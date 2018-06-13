import React, { Component } from 'react';

class TestimonialBox extends Component {
  render() {
    return (
      <div className="testimonial-box">
        <div className="quotes">
          <p>This test awesome food recomended place.</p>
        </div>
        <div className="testimonial-detail">
          <div className="row">
            <div className="col-md-8">
              <img alt="avatar" src="static/img/avatar1.svg" className="avatar" />
              <div className="testimonial-owner-detail">
                <p className="mb-2">CUSTOMER NAME</p>
              </div>
            </div>
            <div className="col-md-4 text-right align-self-center">
              <p>
                <span className="fa fa-star mr-4" />
                3.0
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialBox;
