import axios, { AxiosRequestConfig, AxiosPromise, Method } from 'axios';

const defaultRequest = (options: AxiosRequestConfig): AxiosPromise => {
  const axiosIns = axios.create(options);
  options.headers = options.headers || {};
  options.method = options.method || 'GET';
  options.timeout = options.timeout || 20000;
  if (options.method.toUpperCase() === 'POST' && !options.headers['content-type']) {
    options.headers['content-type'] = 'application/json;charset=UTF-8';
  }
  return axiosIns.request(options);
};

export interface baseAxiosRequestConfig extends AxiosRequestConfig {
  method?: Method
}

export default defaultRequest;

export {
  defaultRequest
};
