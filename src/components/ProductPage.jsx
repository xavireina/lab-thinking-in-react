import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import jsonData from '../data.json';

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    let filtered = [...products];

  const filterProducts = (input) => {
    filtered = products.filter((product) => product.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    setProducts(filtered);
    console.log('Total products: ' + products);
    console.log('filter products: ' + filtered);


  }

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProducts={filterProducts} />
        <ProductTable products={products} />
      </div>    
  )
}
export default ProductsPage;