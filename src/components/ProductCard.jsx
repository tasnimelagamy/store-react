 
import { Link } from 'react-router-dom';
 
 function ProductCard({prod}) {
   return (
     <div className=" col-md-3 col-sm-6 mb-1 m-auto ">
      <div className="card p-3 justify-content-center align-items-center p-2">
        <h3>{prod.title}</h3>
        <img src={prod.image} height={150}  alt="prod" />
        <h5>{prod.category}</h5>
        <h5>{prod.price}$</h5>
        <Link to={`/details/${prod.id}`} className='btn btn-primary'>Details</Link>
        
      </div>{/*card*/}
     </div>
   )
 }
 
 export default ProductCard