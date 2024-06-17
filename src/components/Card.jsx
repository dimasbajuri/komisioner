// ./src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { formatCurrency } from '../utils/formatCurrency'; // Import the utility function

const Card = ({ images, title, subtitle, link, price }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='m-2 px-2 py-3 flex flex-col gap-2 shadow-md'>
      <Slider {...settings} className='w-11/12 self-center'>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className='w-full' />
          </div>
        ))}
      </Slider>
      <h3 className='mt-2 text-lg capitalize'>{title}</h3>
      <h4 className={`${subtitle == 'Tokopedia' ? 'text-green-500' : 'text-orange-500'}`}>{subtitle}</h4>
      <h3 className='text-xl font-semibold'>{formatCurrency(price)}</h3>
      <a href={link} target="_blank" className='bg-pink-500 text-slate-50 px-4 py-2 text-xl font-semibold hover:bg-slate-50 hover:text-pink-500 shadow-md text-center rounded'>Order Disini</a>
    </div>
  );
}

Card.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired // Add price as a required prop
};

export default Card;
