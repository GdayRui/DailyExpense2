import React from "react";
import "./App.css";
import "./Sass/main.scss";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainPage from './Components/MainPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/expense" component={MainPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
