import { RequestInit, Response } from 'node-fetch';
import { Client, ClientConfigurations } from '../core/client/Client';
import { ExpediaGroupError } from '../core/model/error/ExpediaGroupError';
import { ApolloAxiosClientHelpers } from './ApolloAxiosClientHelpers';

export class ApolloAxiosClient extends Client {

  constructor(config: ClientConfigurations) {
    super(config);
  }

  // The fetch method compatible with the Fetch API
  public async fetch(uri: string, options: RequestInit): Promise<Response> {
    try {
      const axiosConfig = ApolloAxiosClientHelpers.buildAxiosConfigFromFetchOptions(uri, options);
      const axiosResponse = await this.axiosClient.request(axiosConfig);
      return ApolloAxiosClientHelpers.buildFetchResponseFromAxiosResponse(axiosResponse);
    } catch (error) {
      throw new ExpediaGroupError(error);
    }
  }
}

