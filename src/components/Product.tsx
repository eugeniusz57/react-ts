import { useState } from 'react';
import { IProduct } from '../types/types';

interface ProductsProp {
  product: IProduct;
}

export const Product = ({ product }: ProductsProp) => {
  const [detailes, setDetailes] = useState(false);
  const btnBgClassName = detailes ? 'bg-yellow-400' : 'bg-blue-400';
  const btnClasses = ['py-2 px-4 border', btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price} $</span>

      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetailes(prev => !prev)}
      >
        {detailes ? 'Hide detailes' : 'Show detailes'}
      </button>
      {detailes && <p>{product.description}</p>}
      <p>
        Rate: <span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span>{' '}
      </p>
    </div>
  );
};
