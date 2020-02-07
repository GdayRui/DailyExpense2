import React from "react";
import "./App.scss";
import "./Sass/main.scss";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter  basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/expense" component={MainPage}
          />
        </Switch>
        <Footer />
      </div>
    </HashRouter >
  );
}

export default App;
