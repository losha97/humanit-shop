import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({isChecked: this.props.value === this.props.label});
    }
  }


  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label, value } = this.props;
    this.setState({value: value});
    this.setState(({ isChecked }) => ({ isChecked: !isChecked }), () => {
      handleCheckboxChange(this.state.isChecked ? label : null);
    });
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <span>{label}</span>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;