import { AxiosPromise } from 'axios';
import axiosRequest, { baseAxiosRequestConfig } from '@/service';
import { userId } from '@/service/api';

const fetchUserById = async (): Promise<AxiosPromise> => {
  const options: baseAxiosRequestConfig = {
    method: 'GET',
    url: userId
  };
  return axiosRequest(options);
};


export {
  fetchUserById
};
