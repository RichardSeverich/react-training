import IResponseModel from "./IResponseModel";

interface IResultModel<T> {
    data: IResponseModel<T> | null;
    status: number;
}

export default IResultModel;