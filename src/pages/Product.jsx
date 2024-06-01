import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
// import all_products from "../assets/all_products";
import PopulerProducts from '../components/PopulerProducts.jsx';
import ProductDescription from '../components/ProductDescription.jsx';
import ProductDisplay from '../components/ProductDisplay.jsx';
import ProductHd from '../components/ProductHd.jsx';
import { ShopContext } from '../context/ShopContext.jsx';


const Product = () => {

  const { productId } = useParams();
  // console.log("productId", productId);

  const {all_products} = useContext(ShopContext)

  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product Not Found...!</div>;
  }

  return (
    <section>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product} />
        <ProductDescription />
        <PopulerProducts />
      </div>
    </section>
  )
}

export default Product
