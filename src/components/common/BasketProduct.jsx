import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BasketProduct extends Component {
  state = {
    product: null
  };

  componentDidMount() {
    this.setProduct(this.props.product);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setProduct(this.props.product);
    }
  }

  getTotalPrice = () => {
    return this.state.product.price * this.state.product.count;
  }

  setProduct = product => {
    this.setState({product: product});
  }

  render() {
    return (
      <>
      {this.state.product && (
        <div className="basket-product container-shadow">
          <div className="basket-product__pic">
            <img src={this.state.product.url} alt="" />
          </div>
          <div className="basket-product__name">
            <span className="backet__title">{this.state.product.name}</span>
            <span className="backet__value">{this.state.product.price}</span>
          </div>
          <div className="basket-product__date">
            <span className="basket-product__date-title">Added:</span>
            <span className="basket-product__date-value">{this.state.product.addedDate}</span>
          </div>
          <div className="basket-product__counter">
            <span
              className="basket-product__counter-btn"
              onClick={this.props.onDecreaseCount}
            >
              <FontAwesomeIcon icon="minus" />
            </span>
            <span className="basket-product__counter-current">
              {this.state.product.count}
            </span>
            <span
              className="basket-product__counter-btn"
              onClick={this.props.onIncreaseCount}
            >
              <FontAwesomeIcon icon="plus" />
            </span>
          </div>
          <div className="basket-product__total">
            <span className="backet__title">Total amount</span>
            <span className="backet__value">{this.getTotalPrice()}</span>
          </div>
          <div className="basket-product__remove" onClick={this.props.onProductRemove}>
            <FontAwesomeIcon icon="times" />
          </div>
        </div>
      )}
      </>
    );
  }
}

BasketProduct.propTypes = {
  product: PropTypes.object,
  onProductRemove: PropTypes.func,
  onDecreaseCount: PropTypes.func,
  onIncreaseCount: PropTypes.func
};

export default BasketProduct;