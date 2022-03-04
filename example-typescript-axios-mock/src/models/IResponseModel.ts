interface IResponseModel<T> {
  data: T[] | null;
  message: string;
}

export default IResponseModel;