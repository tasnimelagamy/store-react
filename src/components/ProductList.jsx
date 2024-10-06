import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductList() {
    const [products , setProducts] = useState ([])

    const getProducts =async () => {
      const response =await axios.get(`https://fakestoreapi.com/products`);
       setProducts(response.data)
      }
      useEffect(() => {
        getProducts()
        },[])
  return (
   <section className='py-5'>
    <div className=' container'>
        <div className=' row  '>
            {
                products.map((item) => {
                     return( <ProductCard key={item.id} prod={item}/>)
                 })
            }

         

        </div>{/*row*/}
    </div>{/*container*/}
   </section>
  )
}

export default ProductList