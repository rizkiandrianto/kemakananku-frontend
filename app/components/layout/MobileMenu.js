import React, { Component } from 'react';
import { array, string } from 'prop-types';

class MobileMenu extends Component {
  static propTypes = {
    className: string,
    menu: array
  }

  renderMenu() {
    const item = this.props.menu.map((value, index) => (
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
      <div className={`mobile-menu ${this.props.className || ''}`}>
        {this.renderMenu()}
      </div>
    );
  }
}

export default MobileMenu;
