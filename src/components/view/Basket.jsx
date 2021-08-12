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
    products: [],
    details: []
  };

  componentDidMount() {
    this.setProducts(BasketService.getProducts(), this.initDetails);
  }

  initDetails = () => {
    const totalPrice = this.getTotalAmount();
    this.setState({details: [{
      title: {
        name: "Your order"
      },
      content: [{
        name: "Total amount:",
        value: totalPrice,
      }, {
        name: "Quantity of goods:",
        value: this.getProductsQuantity(),
      }, {
        name: "Form of payment:",
        value: "Cash"
      }]
    }, {
      content: [{
        name: "Delivery registration"
      }],
      button: {
        name: "fill in the form",
        onClick: () => {}
      }
    }, {
      title: {
        name: "Amount to be paid",
        value: totalPrice
      },
      button: {
        name: "make an order",
        type: "inverse",
        onClick: () => {}
      }
    }]});
  }

  getProductsQuantity = () => {
    return this.state.products
      .map(product => product.count)
      .reduce((a, b) => a + b, 0);
  }

  getTotalAmount = () => {
    return this.state.products
      .map(product => product.price * product.count)
      .reduce((a, b) => a + b, 0);
  }

  setProducts = (products, callback) => {
    this.setState({products: products}, callback);
  }

  updateProducts = products => {
    this.setProducts(products, this.initDetails);
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
              onProductsUpdate={products => this.updateProducts(products)}
            />
          </section>
          <section className="basket__details">
            <Details details={this.state.details} />
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