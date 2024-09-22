import { AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';
import { HeaderInit, HeadersInit, RequestInit, Response } from 'node-fetch';

/*
* Utility class used to translate requests/responses between Axios and node-fetch client.
* */
export class ApolloAxiosClientHelpers {

  public static convertAxiosHeadersToFetchHeaders(axiosHeaders: RawAxiosResponseHeaders | AxiosResponseHeaders): HeaderInit {
    const headers: Record<string, string> = {};

    Object.entries(axiosHeaders).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        headers[key] = value.join(', ');
      } else {
        headers[key] = String(value);
      }
    });

    return headers;
  }

  // Helper function to convert Fetch API HeadersInit to Axios headers
  public static convertFetchHeadersToAxiosHeaders(fetchHeaders?: HeadersInit): Record<string, string> {
    const headers: Record<string, string> = {};

    if (!fetchHeaders) {
      return headers;
    }

    if (fetchHeaders instanceof Headers) {
      fetchHeaders.forEach((value, key) => {
        headers[key] = value;
      });
    } else if (Array.isArray(fetchHeaders)) {
      fetchHeaders.forEach(([key, value]) => {
        headers[key] = value;
      });
    } else {
      Object.assign(headers, fetchHeaders as Record<string, string>);
    }

    return headers;
  }

  public static buildAxiosConfigFromFetchOptions(url: string, options: RequestInit): AxiosRequestConfig {
    return {
      url,
      method: options.method,
      headers: this.convertFetchHeadersToAxiosHeaders(options.headers),
      data: options.body
    };
  }

  public static buildFetchResponseFromAxiosResponse(axiosResponse: AxiosResponse): Response {
    return new Response(JSON.stringify(axiosResponse.data), {
      status: axiosResponse.status,
      statusText: axiosResponse.statusText,
      headers: this.convertAxiosHeadersToFetchHeaders(axiosResponse.headers)
    });
  }
}
