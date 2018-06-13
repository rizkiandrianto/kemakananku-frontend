import React from 'react';
import { number, object } from 'prop-types';

const SlickButton = ({
  currentSlide, slideCount, children, ...props
}) => (
  <button {...props}>{children}</button>
);

SlickButton.propTypes = {
  currentSlide: number,
  slideCount: number,
  children: object
};

export default SlickButton;
