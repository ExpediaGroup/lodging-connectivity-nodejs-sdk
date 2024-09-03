import axios, { AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { RequestInfo, RequestInit, Response, Request } from 'node-fetch';
import { AuthenticationConfigurations, AuthenticatorFactory } from '../authentication/Authenticator';
import { AxiosClientConfigurations } from './AxiosClientConfigurations';

class Client {
  public readonly axiosClient: AxiosInstance;

  public constructor({ key, secret, endpoint, authEndpoint, requestTimeout, userAgent }: ClientConfigurations) {
    this.axiosClient = this.createInstance(new AxiosClientConfigurations(endpoint, requestTimeout));

    const authenticationConfigurations = new AuthenticationConfigurations(authEndpoint, key, secret, userAgent = '');

    AuthenticatorFactory.create(this.axiosClient).use(authenticationConfigurations);
  }

  public async fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    const config: AxiosRequestConfig = {
      url: typeof input === 'string' ? input : (input as Request).url,
      method: init?.method,
      headers: init?.headers as RawAxiosRequestHeaders,
      data: init?.body
    };

    try {
      const response = await this.axiosClient(config);

      return new Response(JSON.stringify(response.data), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as any
      });

    } catch (error) {
      return new Response(JSON.stringify(error.response?.data), {
        status: error.response?.status || 500,
        statusText: error.response?.statusText || 'Internal Server Error'
      });
    }
  }

  private createInstance(clientConfigurations: AxiosClientConfigurations): AxiosInstance {
    return axios.create({
      baseURL: clientConfigurations.endpoint,
      timeout: clientConfigurations.requestTimeout
    });
  }
}

interface ClientConfigurations {
  endpoint?: string;
  authEndpoint?: string;
  key: string;
  secret: string;
  requestTimeout?: number;
  userAgent?: string;
}

export { Client };
export { ClientConfigurations };
