import style from "./Filters.module.css";
import { useState } from "react";
import { FiltersType } from "../../Interfaces/Product";

type FilterProps = {
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
};

const Filters: React.FC<FilterProps> = ({setFilters}) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
    setFilters((prev) => ({
      ...prev,
      minPrice: Number(e.target.value),
    }));
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  return (
    <section className={style.container}>

      <div>
        <label htmlFor="price" className={style.filterLabel}>Price</label>
        <input 
          type="range"
          id="price" 
          min={0}
          max={1000}
          className={style.filterInput}
          onChange={handleChangeMinPrice}
        />
        <span>$ {minPrice}</span>
      </div>

      <div>
        <label htmlFor="category" className={style.filterLabel}>Category</label>
        <select name="category" id="category"  onChange={handleChangeCategory} className={style.filterSelect}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>

    </section>
  )
}

export default Filters