import ICounterUseCases from "./ICounterUseCases"
import CounterBloc from "./../blocs/CounterBloc"

export default class CounterUseCases implements ICounterUseCases {
    counterServices = new CounterBloc();
}
