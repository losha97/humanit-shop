/*
* @Author: Aleksiej Kuncewicz
* @Date:   2021-08-12 03:33:33
* @Last Modified by:   Aleksiej Kuncewicz
* @Last Modified time: 2021-08-12 18:29:54
*/

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductCard from './components/view/ProductCard';
import Basket from './components/view/Basket';

class App extends Component {
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
              <Route exact path="/basket" component={Basket} />
              {/*<Route exact path="/delivery" component={Delivery} />*/}
              {/* <Route exact path="/order" component={Order} />*/}
            </Switch>
          </section>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;