import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import HashLoader from "react-spinners/HashLoader";
import { Filters, Product } from './Interfaces/Product';
import Header from './components/Header/Header';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    minPrice: 0,
  });

  useEffect(() => {
    fetch('/api/products?limit=8')
    .then(res=>res.json())
    .then(json=> {
      setProducts(json)
      setLoading(false);
    });
  }, []);

  const filterProducts =( products: Product[] ) => {
    return products.filter( product => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' || product.category === filters.category
      );
    })
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <HashLoader 
        size={60} 
        color='#77f43c' 
        loading={loading} 
      />
      <Header />
      <Products products={filteredProducts} onAddToCart={(product) => console.log(product)} />
    </>
  )
}

export default App
