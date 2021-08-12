import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../layout/NavBar';
import Title from '../layout/Title';
import BasketProductList from '../common/BasketProductList';
import Details from '../common/Details';
import { BasketService } from '../../services/BasketService';

class Basket extends Component {
  state = {
    category: "Basket",
    products: []
  };

  componentDidMount() {
    this.setState({products: BasketService.getProducts()}, () => {
      console.log(this.state.products);
    });
  }

  render() {
    return (
      <>
        <NavBar category={this.state.category} />
        <Title name="Basket" />
        <section className="basket">
          <section className="basket__list">
            <BasketProductList
              products={this.state.products}
            />
          </section>
          <section className="basket__details">
            <Details />
          </section>
        </section>
      </>
    );
  }
}

Basket.propTypes = {
  product: PropTypes.object
};

export default Basket;