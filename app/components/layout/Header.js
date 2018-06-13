import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setHeaderMenuMobile } from 'redux/actions/MainAction';
import { array, bool, func } from 'prop-types';

class Header extends Component {
  static propTypes = {
    setHeaderMenuMobile: func,
    mobileMenu: bool,
    menu: array
  }

  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.props.setHeaderMenuMobile();
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
      <div className={`header ${this.props.mobileMenu ? 'mobile-menu-active' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-10">
              <h1 className="mainlogo">LOGO</h1>
            </div>
            <div className="col-md-9 col-lg-8 d-none d-md-block">
              {this.renderMenu()}
            </div>
            <div className="col-2 d-md-none d-block text-right">
              <a onClick={this.toggleMenu}><span className="fa fa-bars" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mobileMenu: state.MainReducer.headerMenuMobile
});

const mapDispatchToProps = dispatchEvent => bindActionCreators({
  setHeaderMenuMobile
}, dispatchEvent);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
