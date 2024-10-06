import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
function Details() {
    const params = useParams()
    const [product , setProduct] = useState ([])
 
    useEffect(() => { 
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }  , [])
  return (
     <section className='py-5'>
    <div className=' container'>
        <div className=' row'>
        <div className=" col-md-6 mb-1">
     
        <h1>{product.title}</h1>
        <h3>{product.category}</h3>
        <h3>{product.price}$</h3>
       <p>{product.description}</p>
   
     </div>
      
      <div className='col-md-6 mb-1 text-center pt-5'>
        <img src={product.image} className="w-50" alt="" />
      </div>

        </div>{/*row*/}
    </div>{/*container*/}
   </section>
  )
}

export default Details