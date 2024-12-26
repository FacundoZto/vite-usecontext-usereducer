import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products?limit=5')
    .then(res=>res.json())
    .then(json=> {
      setProducts(json)
      setLoading(false);
    });
  }, []);

  return (
    <>
      <HashLoader 
        size={60} 
        color='#77f43c' 
        loading={loading} 
      />
      <Products products={products} onAddToCart={(product) => console.log(product)} />
    </>
  )
}

export default App
