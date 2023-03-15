import {Routes, Route} from 'react-router-dom'
import { About } from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import { Header } from './component/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <About/> }/>
        <Route path="/products" element={ <ProductsPage/> } />
      </Routes>
    </>
    
  )
}
export default App;
