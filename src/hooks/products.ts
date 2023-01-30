import { useEffect, useState } from "react";
import { IProduct } from "../types/types";
import axios, { AxiosError} from 'axios';

export function useProducts() { 
  
     const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProduct() {
    try {
      setLoading(true);
      const res = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      setProducts(res.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

    return {products, loading, error}

}