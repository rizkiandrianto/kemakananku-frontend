import React, { Component } from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Head from 'components/head';
import { array, bool, object, oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import MobileMenu from 'components/layout/MobileMenu';

class Layout extends Component {
  static propTypes = {
    children: oneOfType([object, array]),
    menuMobile: bool
  }

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

  render() {
    return (
      <div>
        <Head />
        <Header menu={this.state.menu} />
        <div className={`page-container ${this.props.menuMobile ? 'mobile-menu-active' : ''}`}>
          {this.props.children}
        </div>
        <Footer className={`${this.props.menuMobile ? 'mobile-menu-active' : ''}`} />
        <MobileMenu menu={this.state.menu} className={this.props.menuMobile ? 'active' : ''} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuMobile: state.MainReducer.headerMenuMobile
});

export default connect(mapStateToProps)(Layout);
