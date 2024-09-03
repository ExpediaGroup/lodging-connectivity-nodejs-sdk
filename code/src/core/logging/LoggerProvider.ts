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

import { LoggingMessage } from '../constant/Logging';
import { ExpediaGroupLogger, Logger } from './Logger';

export class SdkLogger {
  constructor(readonly name: string) {
  }

  info(message: string): void {
    LoggerProvider.getLogger().info(this.decorate(message, this.name));
  }

  warn(message: string): void {
    LoggerProvider.getLogger().warn(this.decorate(message, this.name));
  }

  error(message: string): void {
    LoggerProvider.getLogger().error(this.decorate(message, this.name));
  }

  private decorate(message: string, name: string): string {
    return `${LoggingMessage.LOGGING_PREFIX} - ${name}: ${message}`;
  }
}

export function getLogger(object: any): SdkLogger {
  return new SdkLogger(object.constructor.name);
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class LoggerProvider {
  private static logger: Logger = ExpediaGroupLogger;

  static getLogger(): Logger {
    return this.logger;
  }

  static setLogger(logger: Logger): void {
    this.logger = logger;
  }
}
