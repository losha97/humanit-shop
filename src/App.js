import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductCard from './components/view/ProductCard';

class App extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <Header />
        <main className="main-container">
          <section className="main">
            <Switch>
              <Route exact path="/">
                <Redirect to="product" />
              </Route>
              <Route exact path="/product" component={ProductCard} />
              {/*<Route exact path="/basket" component={Basket} />
              <Route exact path="/delivery" component={Delivery} />*/}
              {/* <Route exact path="/order" component={Order} />
              <Route component={NotFound} /> */}
            </Switch>
          </section>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;