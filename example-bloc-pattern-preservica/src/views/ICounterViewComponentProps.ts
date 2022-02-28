import ICounterModel from '../models/ICounterModel'

export default interface ICounterViewComponentProps {
    increment: (counterModel: ICounterModel) => void;
    decrement: (counterModel: ICounterModel) => void;
    counterModel: ICounterModel;
}