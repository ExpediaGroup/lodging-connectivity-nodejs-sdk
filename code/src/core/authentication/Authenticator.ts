/*
 * Copyright (C) 2023 Expedia, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.

 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect } from 'util';
import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { Authentication } from '../constant/Authentication';
import { Constant } from '../constant/Constant';
import { ErrorMessage } from '../constant/ErrorMessage';
import { LoggingMessage } from '../constant/Logging';
import { LoggingMessageProvider } from '../constant/provider/LoggingMessageProvider';
import { getLogger, SdkLogger } from '../logging/LoggerProvider';
import { maskRequestConfig, maskResponse } from '../logging/LogMasker';
import { ExpediaGroupAuthError } from '../model/error/service/ExpediaGroupAuthError';
import { Serializer } from '../serialization/Serializer';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Factory {
  static create(axiosClient: AxiosInstance): Authenticator {
    return new Authenticator(axiosClient);
  }
}

class Configurations {
  constructor(
    readonly authEndpoint: string = Constant.AUTH_ENDPOINT,
    readonly key: string,
    readonly secret: string,
    readonly userAgent: string
  ) {
  }
}

class Authenticator {
  private readonly log: SdkLogger = getLogger(this);
  private bearerTokenInfo: TokenExpiryInfo = ExpiredTokenExpiryInfo.getInstance();

  constructor(readonly axiosClient: AxiosInstance) {
  }

  use(configurations: Configurations): void {
    this.axiosClient.interceptors.request.use(async (requestConfig: InternalAxiosRequestConfig<any>) => {
      if (!this.isAuthRequest(requestConfig, configurations) && this.bearerTokenInfo.isAboutToExpire()) {
        this.log.warn(LoggingMessage.TOKEN_EXPIRED);
        const tokenResponse: TokenResponse = await this.renewToken(configurations);
        const auth = `${Authentication.BEARER} ${tokenResponse.accessToken}`;
        this.axiosClient.defaults.headers.common[Constant.AUTHORIZATION] = auth;
        requestConfig.headers.setAuthorization(auth);
      }
      this.log.info(`OUTGOING REQUEST: ${inspect(maskRequestConfig(requestConfig))}`);
      return requestConfig;
    });
    this.axiosClient.interceptors.response.use((response: AxiosResponse<any, any>) => {
      this.log.info(`INCOMING RESPONSE: ${inspect(maskResponse(response))}`);
      return response;
    });
  }

  private isAuthRequest(requestConfig: InternalAxiosRequestConfig, configurations: Configurations): boolean {
    return configurations.authEndpoint === requestConfig.url;
  }

  private async renewToken(configurations: Configurations): Promise<TokenResponse> {
    this.log.info(LoggingMessage.TOKEN_RENEWAL_IN_PROCESS);
    const response: AxiosResponse<any, any> = await this.axiosClient
      .request({
        method: Constant.POST,
        url: configurations.authEndpoint,
        headers: {
          'User-Agent': configurations.userAgent,
          'Content-Type': Authentication.APPLICATION_FORM_URL_ENCODED
        },
        params: {
          grant_type: Authentication.CLIENT_CREDENTIALS
        },
        auth: {
          username: configurations.key,
          password: configurations.secret
        }
      }).catch((error) => {
        throw new ExpediaGroupAuthError(error.response.status, ErrorMessage.AUTHENTICATION_FAILURE);
      });
    const tokenResponse: TokenResponse = Serializer.deserializeObject<TokenResponse>(response.data, TokenResponse) as TokenResponse;
    if (tokenResponse.accessToken === undefined || tokenResponse.expiresIn === undefined) {
      throw new ExpediaGroupAuthError(response.status, ErrorMessage.TOKEN_DESERIALIZATION_FAILURE);
    }
    this.log.info(LoggingMessage.TOKEN_RENEWAL_SUCCESSFUL);
    this.log.info(LoggingMessageProvider.getTokenExpiresInMessage(tokenResponse.expiresIn));
    this.bearerTokenInfo = new TokenExpiryInfo(tokenResponse.expiresIn);
    return tokenResponse;
  }
}

class TokenExpiryInfo {
  private readonly expiryDate: Date;

  constructor(expiresIn: number) {
    this.expiryDate = this.calculateExpiryDate(expiresIn);
  }

  private calculateExpiryDate(expiresIn: number): Date {
    return new Date(Date.now() + this.millisToSeconds(expiresIn));
  }

  private millisToSeconds(expiresIn: number): number {
    return expiresIn * 1_000;
  }

  isAboutToExpire(): boolean {
    return (Date.now() - (this.expiryDate.getTime() - Authentication.BEARER_EXPIRY_DATE_MARGIN)) > 0;
  }
}

class ExpiredTokenExpiryInfo extends TokenExpiryInfo {
  private static readonly instance: ExpiredTokenExpiryInfo = new ExpiredTokenExpiryInfo();

  private constructor() {
    super(-1);
  }

  isAboutToExpire(): boolean {
    return true;
  }

  static getInstance(): ExpiredTokenExpiryInfo {
    return this.instance;
  }
}

@JsonObject()
class TokenResponse {
  @JsonProperty({ name: 'access_token' })
  private readonly _accessToken: string;

  @JsonProperty({ name: 'expires_in' })
  private readonly _expiresIn: number;

  constructor(accessToken: string, expiresIn: number) {
    this._accessToken = accessToken;
    this._expiresIn = expiresIn;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get expiresIn(): number {
    return this._expiresIn;
  }
}

export { Authenticator };
export { Factory as AuthenticatorFactory };
export { Configurations as AuthenticationConfigurations };
