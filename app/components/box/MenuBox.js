import React, { Component } from 'react';

class MenuBox extends Component {
  render() {
    return (
      <div className="menu-box">
        <div className="thumbnail">
          <img src="static/img/example-thumb1.jpeg" alt="thumbnail" />
        </div>
        <div className="title">
          <div className="row">
            <div className="col-md-6">
              <p>Title Menu</p>
            </div>
            <div className="col-md-6 text-right">
              <p>Rp. 25.895</p>
            </div>
          </div>
        </div>
        <div className="menu-detail">
          <div className="row">
            <div className="col-md-8">
              <img alt="avatar" src="static/img/avatar1.svg" className="avatar" />
              <div className="menu-owner-detail">
                <p className="mb-2">OWNER CATERING</p>
                <p>
                  <span className="fa fa-map-marker-alt mr-4" />
                  Location
                </p>
              </div>
            </div>
            <div className="col-md-4 text-right label">
              <img alt="label" title="Eggs" src="static/img/label-eggs.jpg" />
              <img alt="label" title="Eggs" src="static/img/label-eggs.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBox;
