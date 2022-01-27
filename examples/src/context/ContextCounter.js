import { createContext } from "react"

const ContextCounter = createContext({
  count: 0,
  increment: () => { },
  decrement: () => { }
});

export default ContextCounter;
