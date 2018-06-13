import React, { Component } from 'react';
import Header from 'components/layout/Header';
import Head from 'components/head';
import { object } from 'prop-types';

class Layout extends Component {
  static propTypes = {
    children: object
  }

  render() {
    return (
      <div>
        <Head />
        <Header />
        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
