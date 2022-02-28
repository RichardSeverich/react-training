import ICounterModel from './../models/ICounterModel'

export default interface ICounterServices {
    increment: (counterModel: ICounterModel) => void;
    decrement: (counterModel: ICounterModel) => void;
}