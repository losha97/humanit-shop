import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocationService } from '../../services/LocationService';
import { NavigationService } from '../../services/NavigationService';

class Header extends Component {
  state = {
    navigation: [{
      label: "categories"
    }, {
      label: "payment"
    }, {
      label: "warranty"
    }, {
      label: "credit"
    }],
    icons: [{
      name: "heart"
    }, {
      name: "shopping-cart"
    }, {
      name: "user"
    }],
    isActiveToggleMenu: false,
    toggleMenuValue: 'catalog'
  };

  componentDidMount() {
  }

  handleToggleMenu = () => {
    this.setState({isActiveToggleMenu: !this.state.isActiveToggleMenu});
  }

  setToggleMenuValue = toggleMenuValue => {
    this.setState({toggleMenuValue: toggleMenuValue})
  }

  render() {
    return (
      <header className="header-container">
        <div className="header">
          <div className="header__left">
            <div className="header__logo">
              <a href=" " className="header__logo-link">logo</a>
            </div>
            <ul className="header__menu">
              {this.state.navigation.map((item, itemIndex) => {
                return (
                  <li
                    key={itemIndex}
                    className="header__menu-item"
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="header__right">
            <div className="header__toggle-menu">
              <div
                className="header__toggle-menu-title"
                onClick={this.handleToggleMenu}
              >
                <span className="header__toggle-menu-title--name">{this.state.toggleMenuValue}</span>
                <FontAwesomeIcon icon={this.state.isActiveToggleMenu ? "chevron-up" : "chevron-down"} />
              </div>
              {this.state.isActiveToggleMenu && (
                <ul className="header__toggle-menu-items">
                  {this.state.navigation.map((item, itemIndex) => {
                    return (
                      <li
                        key={itemIndex}
                        className="header__toggle-menu-item"
                        onClick={() => this.setToggleMenuValue(item.label)}
                      >
                        {item.label}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="header__icons">
              {this.state.icons.map((icon, iconIndex) => {
                return (
                  <span
                    key={iconIndex}
                    className="header__icon"
                  >
                    <FontAwesomeIcon icon={icon.name} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.any.isRequired
};

export default Header;