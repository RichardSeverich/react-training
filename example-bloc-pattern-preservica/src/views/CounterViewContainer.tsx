import React from 'react'
import { useObservable } from 'rxjs-hooks'

import CounterViewComponent from "./CounterViewComponent"
import CounterUseCases from "./../usecases/CounterUseCases"


const UC = new CounterUseCases();
// FC = function component
const CounterViewContainer: React.FC = () => {
  /**
   *  UC.counterServices.getSubject retuns state (ICounterModel) or null
   *  UC.counterServices.getCurrentState retuns state (ICounterModel) or null
   *  here we have the subscription.
   *  Each time that state will change this will trigger a new render.
   */
  const counterModel = useObservable(UC.counterServices.getSubject) || UC.counterServices.getCurrentState()

  return (
    <CounterViewComponent
      increment={UC.counterServices.increment}
      decrement={UC.counterServices.decrement}
      counterModel={counterModel}
    ></CounterViewComponent>
  )

}

export default CounterViewContainer;