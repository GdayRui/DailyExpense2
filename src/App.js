import React from "react";
import "./App.scss";
import "./Sass/main.scss";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Login} />
          <Route
            path={process.env.PUBLIC_URL + "/expense"}
            component={MainPage}
          />
        </Switch>
        <Footer /> */}
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
