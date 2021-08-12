import React, { Component }   from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../element/Checkbox';

class Details extends Component {
  state = {
    details: [],
    privacyCheck: false
  };

  componentDidMount() {
    this.setDetails(this.props.details);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.details !== this.props.details) {
      this.setDetails(this.props.details);   
    }
  }

  setDetails = details => {
    this.setState({details: details});
  }

  onPrivacyCheck = () => {
    this.setState({privacyCheck: !this.state.privacyCheck});
  }

  render() {
    return (
      <section className="details-container container-shadow">
        {this.state.details.map((detail, detailIndex) => {
          return (
            <div key={detailIndex} className="details">
              {detail.title && (
                <span className="details__title">
                  <span className="details__title__name">
                    {detail.title.name}
                  </span>
                  {detail.title.value && (
                    <span className="details__title__value">
                      {detail.title.value}
                    </span>
                  )}
                </span>
              )}
              {detail.content && (
                <div className="details__content">
                  {detail.content.map((item, itemIndex) => {
                    return (
                      <span key={itemIndex} className="details__content-item">
                        <span className="details__content-item__name">
                          {item.name}
                        </span>
                        <span className="details__content-item__value">
                          {item.value}
                        </span>
                      </span>
                    );
                  })}
                </div>
              )}
              {detail.button && (
                <button
                  className={`button button--${detail.button.type}`}
                  onClick={detail.button.onClick}
                >
                  {detail.button.name}
                </button>
              )}
            </div>
          );
        })}
        {this.props.hasPrivacyCheck && (
          <Checkbox
            label="I agree to the Privacy Policy"
            value="I agree to the Privacy Policy"
            handleCheckboxChange={this.onPrivacyCheck}
          />
        )}
      </section>
    );
  }
}

Details.propTypes = {
  details: PropTypes.array,
  hasPrivacyCheck: PropTypes.bool
};

export default Details;