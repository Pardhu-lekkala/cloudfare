import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

//STORE >>> IT'S A GLOBALISED STATE WHERE ALL THE STATES STORED AT ON E PLACE CALLED STORE.
//SO WE CAN ACCESS ANY STATE VARIABLE AT AT ANY PLACE IN THE PROJECT..

//ACTION >>> ACTION IS THING WHAT YOU WANT TO DO WITH THE PARTICULER STATE.(FOR EXAMPLE ACTION INCREMENT)

//REDUCER >>> WE WILL SEND THE ACTION TO REDUCER TO DO THE CHECK THE  ACTION.
//REDUCER CHECKS THE WHAT ACTION YOU DID AND MODIFY THE STATE ACCORDING TO THAT ACTION.REDUCER PLAYS A MAIN ROLE IN THE REDUX.

//DISPATCH >>> DISPATCH EXECUTES THE ACTION AFTER CHECKING FROM REDUCER.DISPATCH ACTS AS EXECUTER IN REDUX.

//>>>SO FINALLY HOW THEY WORK IS DISPATCH SENDS THE ACTION TO REDUCER.THEREFORE REDUCER CHECK THE ACTION AND THE STORE IS UPDATED ACCORDING TO THAT ACTION.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React plus redux counter app</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
