import IApiConfiguration from "./IApiConfiguration"

const { REACT_APP_BACKEND_PROTOCOL } = process.env;
const { REACT_APP_BACKEND_HOST } = process.env;
const { REACT_APP_BACKEND_PORT } = process.env;
const { REACT_APP_BACKEND_VERSION } = process.env;
const { REACT_APP_MOCK_DATA } = process.env;

const urlBase = REACT_APP_BACKEND_PROTOCOL
  + "://"
  + REACT_APP_BACKEND_HOST
  + ":"
  + REACT_APP_BACKEND_PORT
  + "/"
  + REACT_APP_BACKEND_VERSION
  + "/";
const token = window.sessionStorage.getItem("token");

class ApiConfiguration implements IApiConfiguration {
  headers: object;
  baseUrl: string;
  isMockData: boolean;

  constructor() {
    this.isMockData = REACT_APP_MOCK_DATA == "TRUE";
    this.baseUrl = urlBase;
    this.headers = {
      Authorization: token,
      ContentType: 'application/json'
    }
  }
}

export default ApiConfiguration;