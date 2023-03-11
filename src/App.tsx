import React from 'react';
import { Loader } from './component/Loader';
import { ErrorMessage } from './component/ErrorMessage';
import { Product } from './component/Product';
import { useProducts } from './hooks/products';

function App() {
  const { loading, error, products } = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}
export default App;
