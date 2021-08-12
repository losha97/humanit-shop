import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../layout/NavBar';
import Title from '../layout/Title';
import Product from '../common/Product';
// import { LocationService } from '../../services/LocationService';
// import { NavigationService } from '../../services/NavigationService';

class ProductCard extends Component {
  state = {
    product: {
      id: "7114",
      name: "Pear chair",
      description: "The pear chair is a kind of frameless furniture. "
        + "This is a pear-shaped bag chair, which can be for children and adults. "
        + "The product consists of two covers (internal and external), as well as a filler. Among professionals, it is called bin bag.",
      code: "555555",
      price: "699.99",
      discountPrice: "599.00",
      score: "4.5",
      reviewsCount: "10",
      createdDate: "05.08.2021",
      colors: ["#76B0CC", "#328863", "#324688", "#883271"],
      pic: require('./../../img/chair.png').default
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <Title name="Product" />
        <Product product={this.state.product} />
        <Title name="Testimonials" />
        <Title name="Accessories" />
      </>
    );
  }
}

ProductCard.propTypes = {
  history: PropTypes.any.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string
    })
  })
};

export default ProductCard;