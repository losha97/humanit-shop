import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Product from './components/view/Product';

class App extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="product" />
          </Route>
          <Route exact path="/product" component={Product} />
          {/*<Route exact path="/basket" component={Basket} />
          <Route exact path="/delivery" component={Delivery} />*/}
          {/* <Route exact path="/order" component={Order} />
          <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;