import { ClientEnvironment } from './ClientEnvironment';

export interface ClientConfiguration {
  readonly key: string,
  readonly secret: string,
  readonly environment?: ClientEnvironment,
  readonly requestTimeout?: number,
  readonly userAgent?: string
}
