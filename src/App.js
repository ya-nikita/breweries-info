import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js"
import HomePage from "./components/HomePage/HomePage.js"
import SearchPage from "./components/SearchPage/SearchPage.js";
import BreweryInfo from "./components/BreweryInfo/BreweryInfo.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
          <Navigation />
          <div className="app container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route path="/brewery/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <BreweryInfo id={id} />
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
