import React, { Component } from 'react';
import Layout from 'components/layout';
import Slider from 'react-slick';
import Button from 'components/button/Button';
import CateringBox from 'components/box/CateringBox';
import MenuBox from 'components/box/MenuBox';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import TestimonialBox from 'components/box/TestimonialBox';
import SlickButton from 'components/button/SlickButton';
import Redux from 'components/hoc/Redux';

const MyMapComponent = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>)));

const settingsSliderGlobal = {
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: <SlickButton><span className="fa fa-arrow-left" /></SlickButton>,
  nextArrow: <SlickButton><span className="fa fa-arrow-right" /></SlickButton>,
  className: 'slider-list',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};

class Landing extends Component {
  renderBackground() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      className: 'd-none d-md-block'
    };

    return (
      <Slider {...settings}>
        <div className="hero-image">
          <img alt="bg" src="/static/img/bg-landing1.jpeg" />
        </div>
        <div className="hero-image">
          <img alt="bg" src="/static/img/bg-landing2.jpeg" />
        </div>
      </Slider>
    );
  }

  renderMenuList() {
    return (
      <Slider {...settingsSliderGlobal}>
        <div className="pa-16">
          <MenuBox />
        </div>
        <div className="pa-16">
          <MenuBox />
        </div>
        <div className="pa-16">
          <MenuBox />
        </div>
        <div className="pa-16">
          <MenuBox />
        </div>
      </Slider>
    );
  }

  renderTestimonial() {
    return (
      <Slider {...settingsSliderGlobal}>
        <div className="pa-16">
          <TestimonialBox />
        </div>
        <div className="pa-16">
          <TestimonialBox />
        </div>
        <div className="pa-16">
          <TestimonialBox />
        </div>
        <div className="pa-16">
          <TestimonialBox />
        </div>
      </Slider>
    );
  }

  render() {
    return (
      <Layout>
        <div className="aboveTheFold">
          <div className="hero">
            <h2>Dessert Menu</h2>
            <h3>
              simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s,
            </h3>
            <div>
              <Button to="#catering" className="mt-16" text="Read More" />
            </div>
          </div>
          <div className="anchor">
            <a href="#catering">
              <span className="fa fa-arrow-down" />
            </a>
          </div>
          {this.renderBackground()}
        </div>

        <div className="catering section text-center" id="catering">
          <h4 className="title">Catering</h4>
          <p className="desc">Meet the popular of Catering in this place</p>

          <div className="container-fluid">
            <div className="row mt-24">
              <div className="catering-list col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <CateringBox />
                <CateringBox />
                <CateringBox />
              </div>
            </div>
          </div>

          <p className="text-center mt-24">
            <a>View All</a>
          </p>
        </div>

        <div className="menu section text-center" id="catering">
          <h4 className="title">Menu</h4>
          <p className="desc mb-24">Testy food always can make your moment really happy</p>

          {this.renderMenuList()}

          <p className="text-center mt-24">
            <a>View All</a>
          </p>
        </div>

        <div className="section maps text-center">
          <h4 className="title mb-24">FIND CATERING NEAR YOU</h4>
          <MyMapComponent
            isMarkerShown
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
          />
        </div>

        <div className="testimonial section text-center" id="catering">
          <h4 className="title mb-24">WHAT CLIENT SAYS</h4>

          {this.renderTestimonial()}

          <p className="text-center mt-24">
            <a>View All</a>
          </p>
        </div>
      </Layout>
    );
  }
}

export default Redux(Landing);
