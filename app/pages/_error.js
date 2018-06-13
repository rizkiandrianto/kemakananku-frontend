import React from 'react';
import PropTypes from 'prop-types';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = () => {
      if (res) {
        return res.statusCode;
      } else if (err) {
        return err.statusCode;
      }
      return null;
    };
    return { statusCode: statusCode() };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number
};

Error.defaultProps = {
  statusCode: 0
};
