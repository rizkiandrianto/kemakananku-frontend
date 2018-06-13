import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'components/head';
import Button from 'components/Button';
import withRedux from 'next-redux-wrapper';
import initStore from 'redux/stores';
import { setCount } from 'redux/actions/MainAction';
import { bindActionCreators } from 'redux';

class Contoh extends Component {
    render() {
        return (
            <div>
                <Head title="==== CONTOH ===" description="Ini adalah halaman Contoh" />
                <div className="hero">
                    <p>Halaman Contoh</p>
                    <p>{this.props.count}</p>
                </div>
                <Button />
                <Link href="/"><a>Home</a></Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
        setCount
    }, dispatch);

const mapStateToProps = state => ({
    count: state.MainReducer.count
});

Contoh.propTypes = {
    count: PropTypes.number
};

Contoh.defaultProps = {
    count: 0
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Contoh);
