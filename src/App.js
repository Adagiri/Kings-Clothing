import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage.Component";
import { Route, Switch } from 'react-router-dom'

const Hatspage = () => (
  <div>
  <h1>HatsPage</h1>
  </div>
)

function App() {
  return (
    <div >
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/hats" component={Hatspage} />
    </Switch>
    </div>
  );
}

export default App;
