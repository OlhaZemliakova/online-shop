import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from '../modeles';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    async function getProducts() {
        try {
            setError('');
            setLoading(true);
            const products = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
            setProducts(products.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message)
        }

    }

    useEffect(() => {
        getProducts();
    }, [])

    return { products, error, loading }
}