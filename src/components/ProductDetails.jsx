import product from './Product.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetails = (props) => {
  const { pid } = useParams()
  const item = product[pid];

  const [num, setNum] = useState(0);
  const inc = () => { if (num < item.images.length-1) setNum(num + 1) }
  const dec = () => { if (num > 0) setNum(num - 1) }

  return (
    <div className="prodetails">
      <div className="photos">
        <button className="btn btn-light" onClick={dec}>&lt;</button>
        <img className='bigimg' src={item.images[num]} alt=""/>
        <button className="btn btn-light" onClick={inc}>&gt;</button>
        
      </div>
      <div className="details">
        <p><h1>{item.title}</h1></p>
        <p>Category: {item.category}</p>
        <p>Rating: {item.rating}</p>
        <p>Brand: {item.brand}</p>
        <p>Stock: {item.stock}</p>
        <p>Price: ${item.price}</p>
        <p>Discount: {item.discountPercentage}%</p>
        <p>Description: {item.description}</p>

      </div>
    </div>
  );
}

export default ProductDetails 