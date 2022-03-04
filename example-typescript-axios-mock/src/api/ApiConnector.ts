import Axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

import IApiConnector from "./IApiConnector"
import ApiConfiguration from './ApiConfiguration';

class ApiConnector implements IApiConnector {
  apiConfiguration: ApiConfiguration;
  connector: AxiosInstance;
  mockAdaper: MockAdapter | null;

  constructor() {
    this.apiConfiguration = new ApiConfiguration();
    this.connector = Axios.create({
      baseURL: this.apiConfiguration.baseUrl,
      headers: this.apiConfiguration.headers,
    })
    this.mockAdaper = this.apiConfiguration.isMockData ? new MockAdapter(this.connector) : null;
  }
}

export default ApiConnector;