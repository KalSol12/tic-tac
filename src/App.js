import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Greet } from "./compoment/Greet";
import Welcome from "./compoment/Welcom";
// import Count from "./compoment/counter";
import ClickFunction from "./compoment/ClickFunction";
import ClassClick from "./compoment/ClassClick";
import ParentComponent from "./compoment/ParentComponent";
import UserGreeting from "./userGreeting";
import Namelist from "./Namelist";
import Count from "./compoment/Count";
import TodoList from "./compoment/TodoList";
import PackingList, { Item } from "./compoment/Item";
import App2 from "./Scientisit/App2";
import Tictactoe from "./tic-tac-toe/Tictactoe";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        {/* <Count /> */}
        <Tictactoe />
        {/* <PackingList />
        <App2 /> */}
        {/* <TodoList /> */}
        {/* <Namelist /> */}
        {/* <UserGreeting /> */}
        {/* <ClickFunction />
        <ClassClick />
        <ParentComponent /> */}
        {/* <Count />
        <Greet name="kaleab" lastName="Tenkir" />
        <Welcome name="Solomon" lastName="Tenkir" /> */}
      </div>
    );
  }
}
export default App;
