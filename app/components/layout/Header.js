import React, { Component } from 'react';

class Header extends Component {
    constructor() {
      super();
      this.state = {
          menu: [{
          title: 'Home'
          }, {
          title: 'Catering'
          }, {
          title: 'Food'
          }, {
          title: 'About Us'
          }, {
          title: 'Join Us'
          }
          ]
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
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="mainlogo">LOGO</h1>
              </div>
              <div className="col-md-6">
                {this.renderMenu()}
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Header;
