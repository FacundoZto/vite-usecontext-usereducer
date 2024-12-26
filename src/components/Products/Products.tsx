import { AddToCartIcon } from "../Icons";
import { Product } from "../../Interfaces/Product";
import style from "./Products.module.css";

interface ProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ products, onAddToCart }) => {
  return (
    <main className={style.products}>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id} className={style.product}>
            <img src={product.image} alt={product.title}/>
            <div className={style.product_info}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>$ {product.price}</p>
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
