import { Loader } from './component/Loader';
import { ErrorMessage } from './component/ErrorMessage';
import { Product } from './component/Product';
import { useProducts } from './hooks/products';
import { Header } from './component/Header';
import { CategorySelect } from './component/CategorySelect';
import Container from 'react-bootstrap/Container';

function App() {
  const { loading, error, products } = useProducts()

  return (
    <>
      <Header />
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
export default App;
