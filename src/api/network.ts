import {ErrorResponse} from './types';

const ENDPOINT = {
  development: 'https://staging-biz.coinprofile.co/v3',
};

export const fetchReq = async <T>(
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT',
  path: string,
  body: any,
  headers?: any,
): Promise<[ErrorResponse | null, T | null]> => {
  try {
    const headerOptions = await generateHeaders(headers);
    const url = formatUrl(path);

    let payloadBody: any = body ? JSON.stringify(body) : undefined;

    const data: any = {
      method,
      body: payloadBody,
      headers: headerOptions,
    };

    const response = await fetch(url, data);
    const responseData = await response.json();

    return [null, responseData?.data ?? responseData];
  } catch (e: any) {
    return [e, null];
  }
};

export const request = {
  get: async <T>(path: string, headers?: any) => {
    return fetchReq<T>('GET', path, null, headers);
  },
  post: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('POST', path, body, headers);
  },
  put: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('PUT', path, body, headers);
  },
  patch: async <T>(path: string, body?: any, headers?: any) => {
    return fetchReq<T>('PATCH', path, body, headers);
  },
  delete: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('DELETE', path, body, headers);
  },
};

const generateHeaders = async (headers: any) => {
  const options: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
  return options;
};

export const formatUrl = (url: string) => {
  let BASE_URL = ENDPOINT.development;

  return url.includes('http') ? url : `${BASE_URL}${url}`;
};
