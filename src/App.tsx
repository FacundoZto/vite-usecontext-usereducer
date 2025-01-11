import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import HashLoader from "react-spinners/HashLoader";
import useFilters from './components/Hooks/FilterProducts';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { filterProducts, setFilters } = useFilters();

  useEffect(() => {
    fetch('/api/products?limit=8')
    .then(res=>res.json())
    .then(json=> {
      setProducts(json)
      setLoading(false);
    });
  }, []);


  const filteredProducts = filterProducts(products);

  return (
    <>
      <HashLoader 
        size={60} 
        color='#77f43c' 
        loading={loading} 
      />
      <Header>
        <Filters setFilters={setFilters} />
      </Header>
      <Products products={filteredProducts} onAddToCart={(product) => console.log(product)} />
    </>
  )
}

export default App
