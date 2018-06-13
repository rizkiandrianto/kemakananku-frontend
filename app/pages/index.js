import React, { Component } from 'react';
import Layout from 'components/layout';
import Slider from 'react-slick';
import Button from 'components/Button';
import CateringBox from 'components/box/CateringBox';
import MenuBox from 'components/box/MenuBox';

class Landing extends Component {
  renderBackground() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
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
    const SlickButton = ({
        currentSlide, slideCount, children, ...props
    }) => (
        <button {...props}>{children}</button>
    );
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      prevArrow: <SlickButton><span className="fa fa-arrow-left" /></SlickButton>,
      nextArrow: <SlickButton><span className="fa fa-arrow-right" /></SlickButton>,
      className: 'slider-menu-list'
    };

    return (
      <Slider {...settings}>
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
              <div className="catering-list col-md-8 offset-md-2">
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
      </Layout>
    );
  }
}

export default Landing;
