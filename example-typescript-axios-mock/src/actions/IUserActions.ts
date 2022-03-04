import IResultModel from "../models/IResultModel";
import IUserModel from "../models/IUserModel";

interface IUserActions {
  getUsers: () => Promise<IResultModel<IUserModel[]>>;
  createUser: (user: IUserModel) => Promise<IResultModel<IUserModel>>;
  updateUser: (user: IUserModel, id: string) => Promise<IResultModel<IUserModel>>;
  deleteUser: (id: string) => Promise<IResultModel<IUserModel>>;
}

export default IUserActions;