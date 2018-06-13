import React, { Component } from 'react';

class CateringBox extends Component {
  render() {
    return (
      <div className="catering-box">
        <div className="thumbnail">
          <img src="static/img/example-thumb1.jpeg" alt="thumbnail" />
        </div>
        <p className="title">Name Catering</p>
        <p className="desc">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
           deserunt mollit anim.
        </p>
        <div className="detail">
          <div className="rating">
            <p>
              <span className="fa fa-star" /> 3.6
            </p>
          </div>
          <div className="location">
            <p>
              <span className="fa fa-map-marker-alt mr-4" />
              Location, Jawa Barat
            </p>
          </div>
          <div className="more">
            <a>More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CateringBox;
