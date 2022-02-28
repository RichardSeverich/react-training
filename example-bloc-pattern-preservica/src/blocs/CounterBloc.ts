import { ProtoBloc } from "./ProtoBloc"
import ICounterModel from "./../models/ICounterModel"
import ICounterServices from "./../services/ICounterServices"

const defaultCounterState: ICounterModel = {
  counter: 0
}

export default class CounterBloc extends ProtoBloc<ICounterModel> implements ICounterServices {

  constructor() {
    super(defaultCounterState);
    this.increment.bind(this);
    this.decrement.bind(this);
  }

  increment = (counterModel: ICounterModel) => {
    this.pushState({
      counter: counterModel.counter + 1
    });
  }

  decrement = (counterModel: ICounterModel) => {
    this.pushState({
      counter: counterModel.counter + -1
    });
  }
}
