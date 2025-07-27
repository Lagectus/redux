import React, { memo, useCallback, useMemo } from 'react'


const initialProducts = [
  { id: 1, name: 'Product A', price: 100 }, 
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'X', price: 300 },
    { id: 4, name: 'Y', price: 400 },
    { id: 5, name: 'Product E', price: 500 }
];

const ProductList = ({products,addTocart}) => {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addTocart={addTocart}/>))}
    </div>
  );
}

const ProductApp = () => {
    const [cart, setCart] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const addTocart = useCallback((product) => {
        setCart((prevCart) => [...prevCart, product]);
    },[])

    const filteredProducts =useMemo(()=>
        initialProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    ),[search]);
    console.log('Filtered Products:', filteredProducts);
    
    return (
       <div>
        <h2>cart item: {cart.length}</h2>
        <input 
            type="text" 
            placeholder="Search Products" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />
        <ProductList products={filteredProducts} addTocart={addTocart}/>
       </div>
    );

}


const ProductCard =memo( ({ product, addTocart }) => {
    console.log('ProductCard Rendered:', product.name);
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addTocart(product)}>Add to Cart</button>
        </div>
    )
    
})
export default ProductApp