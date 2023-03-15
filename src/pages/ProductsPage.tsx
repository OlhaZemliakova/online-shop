import { Loader } from '../component/Loader';
import { ErrorMessage } from '../component/ErrorMessage';
import { Product } from '../component/Product';
import { useProducts } from '../hooks/products';
import { CategorySelect } from '../component/CategorySelect';
import Container from 'react-bootstrap/Container';

function ProductsPage() {
  const { loading, error, products } = useProducts()

  return (
    <>
      <main>
        <aside>
        <CategorySelect />
        </aside>
        <Container>
          <div className='product-wrapper'>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map(product => <Product product={product} key={product.id} />)}
          </div>
          </Container>
      </main>
    </>
  )
}
export default ProductsPage;
