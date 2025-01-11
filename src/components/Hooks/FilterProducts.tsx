import { useState } from 'react';
import { FiltersType, Product } from '../../Interfaces/Product'; 

const useFilters = () => {

  const [filters, setFilters] = useState<FiltersType>({
     category: 'all',
     minPrice: 0,
   });
  
   const filterProducts =( products: Product[] ) => {
     return products.filter( product => {
       return product.price >= filters.minPrice && (
         filters.category === 'all' || product.category === filters.category
       );
     })
   };

   return {filterProducts, setFilters};

};

export default useFilters;
