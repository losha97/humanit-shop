import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Breadcrumbs extends Component {
  state = {
    breadcrumbs: [],
    activeBreadcrumb: 2
  };

  componentDidMount() {
    this.setBreadcrumbs(this.props.breadcrumbs);
  }

  isActiveBreadcrumb = breadcrumbIndex => {
    return breadcrumbIndex === this.state.activeBreadcrumb;
  }

  handleActiveBreadcrumb = breadcrumbIndex => {
    this.setState({activeBreadcrumb: breadcrumbIndex});
  }

  setBreadcrumbs = breadcrumbs => {
    this.setState({breadcrumbs: breadcrumbs});
  }

  render() {
    return (
      <section className="breadcrumbs">
        {this.state.breadcrumbs.map((breadcrumb, breadcrumbIndex) => {
          return (
            <div key={breadcrumbIndex} className={classNames({
              "breadcrumb": true,
              "breadcrumb--active": this.isActiveBreadcrumb(breadcrumbIndex)
            })} onClick={() => this.handleActiveBreadcrumb(breadcrumbIndex)}>
              <span className="breadcrumb__name">{breadcrumb.name}</span>
              <FontAwesomeIcon
                icon="caret-right"
                size="sm"
                className="breadcrumb__arrow"
              />
            </div>
          );
        })}
      </section>
    );
  }
}

Breadcrumbs.propTypes = {
  links: PropTypes.array
};

export default Breadcrumbs;