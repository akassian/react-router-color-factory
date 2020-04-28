import React, { useState } from "react";
import "./App.css";
import ColorList from "./ColorList";
import Color from "./Color";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import AddColorForm from "./AddColorForm";
import uuid from "uuid/v4";

function App() {
  const [colors, setColors] = useState([
    { colorName: "black", color: "black", id: 1 },
  ]);
  const addColor = (color) => {
    let newColor = { ...color, id: uuid() };
    setColors((colors) => {
      let colorsCopy = [...colors];
      colorsCopy.unshift(newColor);
      return colorsCopy;
    });
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <AddColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:paramColor">
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
