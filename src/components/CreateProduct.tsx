import axios from 'axios';
import React, { useState } from 'react';
import { IProduct } from '../types/types';

const productData: IProduct = {
  title: '',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 3.9, count: 120 },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      return;
    }
    productData.title = value;
    const res = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    );
    onCreate(res.data);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-yellow-400 hover:bg-green-400 "
      >
        Create
      </button>
    </form>
  );
}
