import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasketProduct from './BasketProduct';
import { BasketService } from '../../services/BasketService';

class BasketProductList extends Component {
  state = {
    products: null
  };

  componentDidMount() {
    this.setProducts(this.props.products);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setProducts(this.props.products);
    }
  }

  decreaseProductCount = productIndex => {
    let products = this.state.products;

    if (products[productIndex].count === 1) {
      this.removeProduct(productIndex);
    } else {
      products[productIndex].count--;
      BasketService.setProducts(products);
      this.setProducts(products, () => this.props.onProductsUpdate(products));
    }
  }

  increaseProductCount = productIndex => {
    let products = this.state.products;
    products[productIndex].count++;
    BasketService.setProducts(products);
    this.setProducts(products, () => this.props.onProductsUpdate(products));
  }

  setProducts = (products, callback) => {
    this.setState({products: products}, callback && callback);
  }

  removeProduct = productIndex => {
    let products = this.state.products;
    products.splice(productIndex, 1);
    BasketService.setProducts(products);
    this.setProducts(products);
  }

  render() {
    return (
      <>
        {this.state.products && this.state.products.map((product, productIndex) => {
          return (
            <BasketProduct
              key={productIndex}
              product={product}
              onProductRemove={() => this.removeProduct(productIndex)}
              onDecreaseCount={() => this.decreaseProductCount(productIndex)}
              onIncreaseCount={() => this.increaseProductCount(productIndex)}
            />
          );
        })}
      </>
    );
  }
}

BasketProductList.propTypes = {
  products: PropTypes.array,
  onProductsUpdate: PropTypes.func
};

export default BasketProductList;