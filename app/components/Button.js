import React, { Component } from 'react';
import { object, string } from 'prop-types';

class Button extends Component {
    static propTypes = {
        children: object,
        text: string,
        className: string,
        to: string
    }

    render() {
        if (this.props.to) {
            return (
                <a href={this.props.to} className={`btn ${this.props.className || ''}`}>
                    {this.props.children || this.props.text}
                </a>
            );
        }
        return (
            <button className={`btn ${this.props.className || ''}`}>
                {this.props.children || this.props.text}
            </button>
        );
    }
}

export default Button;
