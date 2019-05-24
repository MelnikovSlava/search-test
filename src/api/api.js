import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_URL } from '../constants/consts';
import config from '../project.config';
import subscribeMockRequests from './apiMock';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

if (process.env.NODE_ENV !== 'production') {
  if (config.USE_MOCK) {
    subscribeMockRequests(new MockAdapter(axiosInstance, {
      delayResponse: config.REQUEST_DELAY_MOCK,
    }));
  }
}

export { axiosInstance };
