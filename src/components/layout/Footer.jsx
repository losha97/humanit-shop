import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends PureComponent {
  state = {
    footerInfo: [{
      title: "contacts",
      links: [{
        name: "1 (123) 444 33 22",
        icon: <FontAwesomeIcon icon="phone-alt" fontSize="small" />
      }, {
        name: "collection.@info.com",
        icon: <FontAwesomeIcon icon="envelope" fontSize="small" />
      }, {
        name: "ua. nicolaev st.lenina 123",
        icon: <FontAwesomeIcon icon="map-marker-alt" fontSize="small" />
      }],
      socials: [{
        icon: <FontAwesomeIcon icon={["fab", "facebook-f"]} fontSize="small" />
      }, {
        icon: <FontAwesomeIcon icon={["fab", "instagram"]} fontSize="small" />
      }, {
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} fontSize="small" />
      }, {
        icon: <FontAwesomeIcon icon={["fab", "google-plus-g"]} fontSize="small" />
      }]
    }, {
      title: "information",
      links: [{
        name: "about us"
      }, {
        name: "our history"
      }, {
        name: "contacts"
      }, {
        name: "delivery info"
      }]
    }, {
      title: "shop",
      links: [{
        name: "oxford"
      }, {
        name: "on laces"
      }, {
        name: "without laces"
      }, {
        name: "stock"
      }]
    }, {
      title: "account",
      links: [{
        name: "my account"
      }, {
        name: "wish list"
      }, {
        name: "newsletter"
      }, {
        name: "my order"
      }]
    }]
  };

  render() {
    return (
      <footer className="footer-container">
        <div className="footer">
        {this.state.footerInfo.map((info, infoIndex) => {
          return (
            <div key={infoIndex} className="footer-info">
              <span className="footer-info__title">{info.title}</span>
              <div className="footer-info__content">
                <div className="footer-info__content-links">
                  {info.links.map((link, linkIndex) => {
                    return (
                      <div key={linkIndex} className="footer-info__content-link">
                        {link.icon && (
                          <span className="footer-info__content-link__icon">{link.icon}</span>
                        )}
                        <a className={classNames({
                          "footer-info__content-link__name": true,
                          "footer-info__content-link__name--capitalized": !link.icon,
                        })} href=" ">
                          {link.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
                <div className="footer-info__content-socials">
                  {info.socials && info.socials.map((social, socialIndex) => {
                    return (
                      <span key={socialIndex} className="footer-info__content-social">
                        {social.icon}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </footer>
    );
  }
}

export default Footer;