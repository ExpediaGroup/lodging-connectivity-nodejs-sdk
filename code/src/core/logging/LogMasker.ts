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

import {
  AxiosBasicCredentials,
  AxiosHeaders,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  RawAxiosResponseHeaders
} from 'axios';
import { cloneDeep } from 'lodash';
import { LoggingMessage } from '../constant/Logging';
import { LOG_MASKING_BODY_FIELDS, LOG_MASKING_HEADERS } from '../constant/LogMaskingFields';
import { Serializer } from '../serialization/Serializer';

export function maskRequestConfig(config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> {
  const clone: InternalAxiosRequestConfig<any> = cloneDeep(config);
  clone.headers = maskRequestConfigHeaders(clone.headers);
  clone.data = stringifyData(maskBodyFields(clone.data));
  clone.auth = maskAuthCredentials(clone.auth);
  return clone;
}

export function maskResponse(config: AxiosResponse<any, any>): AxiosResponse<any, any> {
  const clone: AxiosResponse<any, any> = cloneDeep(config);
  clone.headers = maskResponseHeaders(clone.headers);
  clone.data = maskBodyFields(clone.data);
  clone.config.headers = maskRequestConfigHeaders(clone.config.headers);
  clone.config.auth = maskAuthCredentials(clone.config.auth);
  clone.config.data = LoggingMessage.OMITTED;
  delete clone.request;
  return clone;
}

function stringifyData(data: any): any {
  if (data === undefined || typeof data === 'string') {
    return data;
  }
  return JSON.stringify(Serializer.serialize(data));
}

function maskRequestConfigHeaders(headers: AxiosRequestHeaders): AxiosRequestHeaders {
  const clonedHeaders: AxiosRequestHeaders = new AxiosHeaders();
  for (const header in headers) {
    clonedHeaders[header] = LOG_MASKING_HEADERS.includes(header.toLowerCase())
      ? LoggingMessage.OMITTED
      : headers[header];
  }
  return clonedHeaders;
}

function maskAuthCredentials(auth: AxiosBasicCredentials | undefined): AxiosBasicCredentials | undefined {
  if (auth === undefined) {
    return auth;
  }
  return {
    username: LoggingMessage.OMITTED,
    password: LoggingMessage.OMITTED
  };
}

function maskResponseHeaders(headers: ResponseHeaders): ResponseHeaders {
  const clonedHeaders: ResponseHeaders = {};
  for (const header in headers) {
    clonedHeaders[header] = LOG_MASKING_HEADERS.includes(header.toLowerCase())
      ? LoggingMessage.OMITTED
      : headers[header];
  }
  return clonedHeaders;
}

function maskBodyFields(body: any): any {
  if (typeof body !== 'object') {
    return body;
  }
  for (const field in body) {
    body[field] = (LOG_MASKING_BODY_FIELDS.includes(field.toLowerCase()) || isPaymentCardNumber(field, body[field]))
      ? LoggingMessage.OMITTED
      : maskBodyFields(body[field]);
  }
  return body;
}

function isPaymentCardNumber(field: string, value: any): boolean {
  if (value === undefined || value === null) {
    return false;
  }
  const s = value.toString();
  const numberOfDigits = s.length;
  return field.toLowerCase() === 'number' && numberOfDigits >= 15 && numberOfDigits <= 16;
}

declare type ResponseHeaders = RawAxiosResponseHeaders | AxiosResponseHeaders
