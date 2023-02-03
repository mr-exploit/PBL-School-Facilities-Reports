import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../url";

const AddKerusakan = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts();
  },[]);

  const getProducts = async () =>{
      const response = await axios.get(`${url}/products`);
      setProducts(response.data);
  };

  const deleteProduct = async (productId) =>{
    await axios.delete(`${url}/products/${productId}`);
    getProducts();
  };

  return (
    <div>
      <h1 className="title">Review Laporan</h1>
        <h2 className="subtitle">List of laporan...</h2>
        {/* <Link to="/products/add" className="button is-primary mb-2">Add New</Link> */}
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Detail Kerusakan</th>
                    <th>Created By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {products.map((product, index) =>(
                <tr key={product.uuid}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.user.name}</td>
                    <td>
                      <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info mr-3">Details</Link>
                      <button onClick={()=> deleteProduct(product.uuid) } className="button is-small is-danger">Delete</button>
                    </td>   
                </tr>
              ))}
            </tbody>
        </table> 
    </div>
  )
}

export default AddKerusakan;