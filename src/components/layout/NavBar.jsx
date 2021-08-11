import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocationService } from '../../services/LocationService';
import { NavigationService } from '../../services/NavigationService';
import Breadcrumbs from '../common/Breadcrumbs';

class NavBar extends Component {
  state = {
    breadcrumbs: [{
      name: "Home",
      onClick: () => {}
    }, {
      name: "Categories",
      onClick: () => {}
    }, {
      name: "Product Card",
      onClick: () => {}
    }]
  };

  componentDidMount() {
  }

  render() {
    return (
      <section className="navbar-container">
        <div className="navbar">
          <Breadcrumbs breadcrumbs={this.state.breadcrumbs} />
          <div className="navbar__search">
            <input
              placeholder="Product name"
              className="navbar__search__input"
            />
            <FontAwesomeIcon icon="search" className="navbar__search__icon" />
          </div>
          <div className="navbar__delivery">
            <span className="navbar__delivery__title">Delivery service</span>
            <FontAwesomeIcon icon="truck" className="navbar__delivery__icon" />
          </div>
        </div>
      </section>
    );
  }
}

NavBar.propTypes = {
  history: PropTypes.any
};

export default NavBar;