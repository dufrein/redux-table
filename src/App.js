import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import Products from "./containers/Products";
import Basket from "./containers/Basket";
import NotFound from "./components/NotFound";
import "./app.css";

const history = createBrowserHistory();

export const store = createStore(rootReducer);
export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/basket" component={Basket} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
