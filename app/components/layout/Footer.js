import React, { Component } from 'react';
import { string } from 'prop-types';

class Footer extends Component {
  static propTypes = {
    className: string
  }

  constructor() {
    super();
    this.state = {
        menu: [{
        title: 'FAQ'
        }, {
        title: 'Privacy Policy'
        }, {
        title: 'Contact Us'
        }, {
        title: (
          <span>
            Follow Us
            <span className="fab fa-twitter ml-8" />
            <span className="fab fa-instagram ml-8" />
            <span className="fab fa-facebook ml-8" />
          </span>
        )
        }]
    };
  }

  renderMenu() {
    const item = this.state.menu.map((value, index) => (
      <li key={index}>
        <a>{value.title}</a>
      </li>
    ));
    return (
      <ul className="mainmenu">
        {item}
      </ul>
    );
  }

  render() {
    return (
      <footer className={`footer ${this.props.className || ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <h5 className="mainlogo">LOGO</h5>
            </div>
            <div className="col-md-9 col-lg-9 col-sm-12 d-md-block">
              {this.renderMenu()}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
