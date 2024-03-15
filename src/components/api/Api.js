import axios from 'axios';
import {useState} from 'react';
import AlertComponent from '../screens/AlertComponent';
const BASE_URL = 'http://134.209.145.28/aqapi/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const useApi = () => {
  const [loading, setLoading] = useState(false);

  const request = async (method, endpoint, data = {}, params = {}) => {
    setLoading(true);
    try {
      const response = await api({
        url: endpoint,
        method,
        data,
        params,
      });
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      // AlertComponent({title: 'Server Error, Try again later', type: 'danger'});
      // throw error;
    }
  };

  const get = async (endpoint, params = {}) => {
    return request('GET', endpoint, {}, params);
  };

  const post = async (endpoint, data = {}, params = {}) => {
    return request('POST', endpoint, data, params);
  };

  const put = async (endpoint, data = {}, params = {}) => {
    return request('PUT', endpoint, data, params);
  };

  const remove = async (endpoint, params = {}) => {
    return request('DELETE', endpoint, {}, params);
  };

  return {loading, get, post, put, remove};
};

export default useApi;
