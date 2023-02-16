import Header from './Header';
import "./Products.css";
import {Link} from 'react-router-dom'


const Products = (props) => {
  return (
    <div className="movie">
       
      <Link to={`/Products/${props.id}`} style={{"textdecoration": "none"}}>
        <img className='img' src={props.thumbnail} alt="images" /></Link>
      <section className="sec">          
          <p>Title: {props.title}</p>
          <p>Price: ${props.price}</p>
          <p>Brand: {props.brand}</p>
          <p>Category: {props.category}</p>
        <div >
          <Header />
        </div>
      </section>
    </div>
  );
};

export default Products;
