import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

interface IApiConnector {
  connector: AxiosInstance;
  mockAdaper: MockAdapter | null;
}

export default IApiConnector;