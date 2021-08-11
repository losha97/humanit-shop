import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
// import * as Constants from '../../lib/constants';
import { LocationService } from '../../services/LocationService';
import { NavigationService } from '../../services/NavigationService';

class Snap extends Component {
  state = {
  };

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = () => {
  }

  render() {
    return (
      <>
        <Header history={this.props.history} />
        <Footer />
      </>
    );
  }
}

Snap.propTypes = {
  history: PropTypes.any.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string
    })
  })
};

export default Snap;