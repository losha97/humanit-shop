import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BasketService } from '../../services/BasketService';
import { LocationService } from '../../services/LocationService';
import { NavigationService } from '../../services/NavigationService';
import Checkbox from '../element/Checkbox';

class Product extends Component {
  state = {
    product: null,
    paymentCheckboxes: [
      "Cash",
      "Credit",
      "Certificate"
    ],
    deliveryCheckboxes: [
      "Delivery",
      "Self-export"
    ],
    paymentMethod: null,
    deliveryService: null
  };

  componentDidMount() {
    this.setProduct(this.props.product);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setProduct(this.props.product);
    }
  }

  addProduct = () => {
    let basketProducts = BasketService.getProducts() || [];
    let product = {
      name: this.state.product.name,
      code: this.state.product.code,
      url: this.state.product.url,
      paymentMethod: this.state.paymentMethod,
      deliveryService: this.state.deliveryService,
      addedDate: this.getCurretDate(),
      count: 1,
      price: this.state.product.discountPrice || this.state.product.price,
      totalPrice: this.state.product.discountPrice || this.state.product.price
    };

    const index = this.getProductIndexFromBasket(basketProducts, product);

    if (index > -1) {
      basketProducts[index].count++; 
      basketProducts[index].addedDate = this.getCurretDate();
    } else {
      basketProducts.push(product);
    }

    BasketService.setProducts(basketProducts);
  }

  getProductIndexFromBasket = (basketProducts, product) => {
    return basketProducts.findIndex(basketProduct => {
      return basketProduct.code === product.code
          && basketProduct.paymentMethod === product.paymentMethod
          && basketProduct.deliveryService === product.deliveryService;
    });
  }

  getCurretDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();


    today = dd + '.' + mm + '.' + yyyy;
    return today;

  }

  orderProducts = () => {
    return LocationService.setLocation(NavigationService.basketLink());
  }

  setProduct = product => {
    this.setState({product: product});
  }

  getColorStyle = color => {
    return {
      backgroundColor: color
    }
  }

  togglePaymentMethodCheckbox = label => {
    this.setState({paymentMethod: label});
  }

  toggleDeliveryServiceCheckbox = label => {
    this.setState({deliveryService: label});
  }

  render() {
    return (
      <>
        {this.state.product && (
          <section className="product-wrapper">
            <div className="product">
              <div className="product__pic product-container container-shadow">
                <div className="product__pic__header">
                  <span className="product__pic__header-data">
                    <FontAwesomeIcon icon="star" className="product-icon" />
                    <span className="product__pic__header-data-star">
                      {this.state.product.score}
                    </span>
                    <span className="product__pic__header-data-reviews-count">
                      {this.state.product.reviewsCount}
                    </span>
                    <span className="product__pic__header-data-reviews-label">
                      Customer service
                    </span>
                  </span>
                  <span className="product__pic__header-code">
                    <span className="product__pic__header-code-title">
                      Product code
                    </span>
                    <span className="product__pic__header-code-value">
                      {this.state.product.code}
                    </span>
                  </span>
                </div>
                <div className="product__pic__main">
                  <div className="product__pic__main-title">
                    <span className="product__pic__main-title__name product-title">{this.state.product.name}</span>
                    <span className="product__pic__main-title__discount-price">{this.state.product.discountPrice}</span>
                    <span className="product__pic__main-title__price">{this.state.product.price}</span>
                  </div>
                  <img src={this.state.product.url} alt="" className="product__pic__main-src" />
                </div>
              </div>
              <div className="product__additional-pics">
                {Array.from(Array(3).keys()).map((pic, picIndex) => {
                  return (
                    <div
                      key={picIndex}
                      className="product__additional-pic product-container container-shadow"
                    >
                      <img src={this.state.product.url} alt="" className="product__additional-pic-src" />
                    </div>
                  );
                })}
              </div>
            </div>
            <section className="product-info">
              <div className="product__actual product-container container-shadow">
                <span className="product__actual-price">
                  <span className="product__actual-price__title product-title">{this.state.product.name}</span>
                  <span className="product__actual-price__value">{this.state.product.discountPrice}</span>
                </span>
                <span className="product__actual-date">
                  <span className="product__actual-date__title">Added: </span>
                  <span className="product__actual-date__value">{this.state.product.createdDate}</span>
                  <FontAwesomeIcon icon="heart" className="product-icon" />
                </span>
              </div>
              <div className="product__description product-container container-shadow">
                <span className="product__description__title">Specifications:</span>
                <span className="product__description__value">{this.state.product.description}</span>
                <span className="product__description__title">Colors:</span>
                <div className="product__description__colors">
                  {this.state.product.colors.map((color, colorIndex) => {
                    return (
                      <span
                        key={colorIndex}
                        style={this.getColorStyle(color)}
                        className="product__description__color"
                      >
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="product__price product-container container-shadow">
                <span className="product__price__title product-title">Product price</span>
                <div className="product__price__checkbox">
                  <div className="product__price__checkbox-row">
                    <span className="product__price__checkbox-row__title">Payment method:</span>
                    <div className="product__price__checkbox-row-content">
                      {this.state.paymentCheckboxes.map((checkbox, checkboxIndex) => {
                        return (
                          <Checkbox
                            key={checkboxIndex}
                            label={checkbox}
                            value={this.state.paymentMethod}
                            handleCheckboxChange={this.togglePaymentMethodCheckbox}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="product__price__checkbox-row">
                    <span className="product__price__checkbox-row__title">Delivery service:</span>
                    <div className="product__price__checkbox-row-content">
                      {this.state.deliveryCheckboxes.map((checkbox, checkboxIndex) => {
                        return (
                          <Checkbox
                            key={checkboxIndex}
                            label={checkbox}
                            value={this.state.deliveryService}
                            handleCheckboxChange={this.toggleDeliveryServiceCheckbox}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="product__price__actions">
                  <button className="product__price__action-btn" onClick={this.addProduct}>add to basket</button>
                  <button className="product__price__action-btn product__price__action-btn--inverse" onClick={this.orderProducts}>Make an order</button>
                </div>
              </div>
            </section>
          </section>
        )}
      </>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object
};

export default Product;