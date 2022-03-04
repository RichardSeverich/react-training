import ApiConnector from "../api/ApiConnector";
import IResultModel from "../models/IResultModel";
import IUserModel from "../models/IUserModel";
import IUserActions from "./IUserActions";
import usersMocks from "../mock/usersMocks";


class UserActions implements IUserActions {

  apiConnector: ApiConnector;

  constructor() {
    this.apiConnector = new ApiConnector();
  }

  getUsers = async () => {
    // Before call api inject mock data, only if mockAdaper exists
    if (this.apiConnector.mockAdaper != null) {
      this.apiConnector.mockAdaper.onGet('users/').reply(200, usersMocks.usersGetMock)
    }
    const response = await this.apiConnector.connector.get('users/')
    let responseData = null;
    if (response.data) {
      responseData = {
        data: response.data.data,
        message: response.data.message
      };
    }
    const result: IResultModel<IUserModel[]> = {
      data: responseData,
      status: response.status,
    }
    return result
  }

  createUser = async (user: IUserModel) => {
    // Before call api inject mock data, only if mockAdaper exists
    if (this.apiConnector.mockAdaper != null) {
      this.apiConnector.mockAdaper.onPost('users/', user).reply(201, usersMocks.userPostMock)
    }
    const response = await this.apiConnector.connector.post('users/', user)
    let responseData = null;
    if (response.data) {
      responseData = {
        data: response.data.data,
        message: response.data.message
      };
    }
    const result: IResultModel<IUserModel> = {
      data: responseData,
      status: response.status,
    }
    return result
  }

  updateUser = async (user: IUserModel, id: string) => {
    // Before call api inject mock data, only if mockAdaper exists
    if (this.apiConnector.mockAdaper != null) {
      this.apiConnector.mockAdaper.onPut('users/' + { id }, user).reply(200, usersMocks.userPutMock)
    }
    const response = await this.apiConnector.connector.put('users/' + { id }, user)
    let responseData = null;
    if (response.data) {
      responseData = {
        data: response.data.data,
        message: response.data.message
      };
    }
    const result: IResultModel<IUserModel> = {
      data: responseData,
      status: response.status,
    }
    return result
  }

  deleteUser = async (id: string) => {
    // Before call api inject mock data, only if mockAdaper exists
    if (this.apiConnector.mockAdaper != null) {
      this.apiConnector.mockAdaper.onDelete('users/' + { id }).reply(200, usersMocks.userDeleteMock)
    }
    const response = await this.apiConnector.connector.delete('users/' + { id })
    let responseData = null;
    if (response.data) {
      responseData = {
        data: response.data.data,
        message: response.data.message
      };
    }
    const result: IResultModel<IUserModel> = {
      data: responseData,
      status: response.status,
    }
    return result
  }

}

export default UserActions;
