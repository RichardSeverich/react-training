import Axios, { AxiosInstance } from 'axios'

import IApiConnector from "./IApiConnector"
import ApiConfiguration from './ApiConfiguration';

class ApiConnector implements IApiConnector {
  apiConfiguration: ApiConfiguration;
  connector: AxiosInstance;

  constructor() {
    this.apiConfiguration = new ApiConfiguration();
    this.connector = Axios.create({
      baseURL: this.apiConfiguration.baseUrl,
      headers: this.apiConfiguration.headers,
    })
  }
}

export default ApiConnector;