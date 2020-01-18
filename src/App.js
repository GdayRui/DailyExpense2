import React from "react";
import "./App.css";
import "./Sass/main.scss";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BoardList from "./Components/BoardList";
import ExpenseList from "./Components/ExpenseList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/boardlist" component={BoardList} />
          <Route path="/expenselist/:id" component={ExpenseList} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
