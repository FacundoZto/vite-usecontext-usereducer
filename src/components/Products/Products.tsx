import './Product.css';
import { AddToCartIcon } from '../Icons';
import { Product } from '../../Interfaces/Product';

interface ProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Products:React.FC<ProductsProps> = ({ products, onAddToCart }) => {
  return (
    <main className='products'>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id} className='product'>
            <img src={product.image} alt={product.title} />
            <div className='product-info'>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => onAddToCart(product)}>
                <AddToCartIcon />
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;