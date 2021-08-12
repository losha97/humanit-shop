import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  state = {
    titleName: ''
  };

  componentDidMount() {
    this.setTitleName(this.props.name);
  }

  setTitleName = titleName => {
    this.setState({titleName: titleName});
  }

  render() {
    return (
      <section className="title-container">
        <span className="title-container__name">{this.state.titleName}</span>
      </section>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string
};

export default Title;