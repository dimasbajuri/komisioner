// ./src/components/Latest.jsx
import React, { useState } from 'react';
import Card from './Card';
import { products } from '../data/products';

const Latest = () => {
  const [visibleCards, setVisibleCards] = useState(5);

  const handleShowMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 5);
  }

  return (
    <div className='w-full pt-24 bg-transparent'>
      <h1 className='text-xl text-center font-bold'>Rekomendasi Terbaru dari Kami</h1>
      {products.slice(0, visibleCards).map((product, index) => (
        <Card
          key={index}
          images={product.images}
          title={product.title}
          subtitle={product.subtitle}
          price={product.price}
          link={product.link}
        />
      ))}
      {visibleCards < products.length && (
        <div className='text-center my-4'>
          <button
            onClick={handleShowMore}
            className='px-4 py-2 bg-pink-500 text-slate-50 shadow-md rounded hover:bg-slate-50 hover:text-pink-500'
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Latest;
