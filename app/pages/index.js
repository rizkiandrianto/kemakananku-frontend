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
  constructor() {
    super();

    // Ini adalah contoh data
    this.state = {
      background: [
        {
          name: 'Bg1',
          src: '/static/img/bg-landing1.jpeg'
        },
        {
          name: 'Bg2',
          src: '/static/img/bg-landing2.jpeg'
        }
      ],
      menu: [
        {
          image: 'https://images.unsplash.com/photo-1518619745898-93e765966dcd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbb64274b97b8894117e0cd95408feb8&auto=format&fit=crop&w=805&q=80',
          name: 'Catering 1',
          price: 25123,
          owner: {
            name: 'Rizki Andrianto',
            location: 'Jakarta, Indonesia'
          },
          contains: [
            'eggs'
          ]
        },
        {
          image: 'https://images.unsplash.com/photo-1480455454781-1af590be2a58?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=932f17ffb9074c29e46353e2db5420fc&auto=format&fit=crop&w=750&q=80',
          name: 'Catering 2',
          price: 25123,
          owner: {
            name: 'Rizki Andrianto',
            location: 'Jakarta, Indonesia'
          },
          contains: [
            'eggs'
          ]
        },
        {
          image: 'https://images.unsplash.com/photo-1473366514866-3649b6c30284?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4400bfbe15140ee3a1d42c1d687ffdfa&auto=format&fit=crop&w=752&q=80',
          name: 'Catering 3',
          price: 25123,
          owner: {
            name: 'Rizki Andrianto',
            location: 'Jakarta, Indonesia'
          },
          contains: [
            'eggs'
          ]
        },
        {
          image: 'https://images.unsplash.com/photo-1493808655842-aa308811e178?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c722a187ee37da777570b6981cd60cd&auto=format&fit=crop&w=750&q=80',
          name: 'Catering 4',
          price: 25123,
          owner: {
            name: 'Rizki Andrianto',
            location: 'Jakarta, Indonesia'
          },
          contains: [
            'eggs'
          ]
        }
      ],
      testimonial: [
        {
          name: 'Rizki Andrianto',
          comment: 'This test awesome food recomended place.'
        },
        {
          name: 'Benjamin Netanyahu',
          comment: 'Benjamin "Bibi" Netanyahu adalah Perdana Menteri Israel'
        },
        {
          name: 'Larry Page',
          comment: 'Lawrence Edward Page is an American computer scientist and Internet entrepreneur who co-founded Google with Sergey Brin.'
        },
        {
          name: 'uvuvwevwevwe onyetenyevwe ',
          comment: 'Bahkan beberapa orang termasuk public figure mencoba menyebutkan nama lengkap dari Osas ini.'
        }
      ]
    };
  }

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
        {
          this.state.background.map((key, index) => (
            <div className="hero-image" key={index}>
              <img alt={key.name} src={key.src} />
            </div>
          ))
        }
      </Slider>
    );
  }

  renderMenuList() {
    return (
      <Slider {...settingsSliderGlobal}>
        {
          this.state.menu.map((key, index) => (
            <div className="pa-16" key={index}>
              <MenuBox data={key} />
            </div>
          ))
        }
      </Slider>
    );
  }

  renderTestimonial() {
    return (
      <Slider {...settingsSliderGlobal}>
        {
          this.state.testimonial.map((key, index) => (
            <div className="pa-16" key={index}>
              <TestimonialBox data={key} />
            </div>
          ))
        }
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
