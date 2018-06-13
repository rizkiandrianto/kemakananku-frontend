import React from 'react';
import initStore from 'redux/stores';
import withRedux from 'next-redux-wrapper';

const Wrapper = (Component, mapStateToProps = null, mapDispatchToProps = null) => {
  class Redux extends Component {
    static async getInitialProps() {
      return {
        ...Component.getInitialProps ? await Component.getInitialProps : null
      };
    }

    render() {
      return <Component {...this.props} />;
    }
  }
  return withRedux(initStore, mapStateToProps, mapDispatchToProps)(Redux);
};


export default Wrapper;
