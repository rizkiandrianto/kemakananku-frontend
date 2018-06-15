import React, { Component } from 'react';
import { object } from 'prop-types';

class MenuBox extends Component {
  static propTypes = {
    data: object
  }

  renderLabel() {
    return this.props.data.contains.map((key, index) => (
      <img key={index} alt={key} title={key} src={`static/img/label-${key}.jpg`} />
    ));
  }

  render() {
    const { data } = this.props;
    return (
      <div className="menu-box">
        <div className="thumbnail">
          <img src={data.image} alt="thumbnail" />
        </div>
        <div className="title">
          <div className="row">
            <div className="col-md-6">
              <p>{data.name}</p>
            </div>
            <div className="col-md-6 price">
              <p>Rp. {data.price}</p>
            </div>
          </div>
        </div>
        <div className="menu-detail">
          <div className="row">
            <div className="col-md-8">
              <img alt="avatar" src="static/img/avatar1.svg" className="avatar" />
              <div className="menu-owner-detail">
                <p className="mb-2">{data.owner.name}</p>
                <p>
                  <span className="fa fa-map-marker-alt mr-4" />
                  {data.owner.location}
                </p>
              </div>
            </div>
            <div className="col-md-4 label">
              {this.renderLabel()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBox;
