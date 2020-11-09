import React from "react";
import { Router } from "@reach/router";
import { RandomPerson } from "../modules/RandomPerson";

export interface IRouterProps {};

const App: React.FC<IRouterProps> = (props) => {
    return (
        <Router>
           <RandomPerson path='/app/random-person/:results' />
        </Router>
    );
}

export default App;