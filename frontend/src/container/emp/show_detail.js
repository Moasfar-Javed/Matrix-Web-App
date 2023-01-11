import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

import { withRouter } from 'react-router-dom';
import constants from '../../utilities/constants';
import { useLocation } from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
const constant = constants.getConstant();
function Show(props) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
<<<<<<< HEAD
  const apiUrl = "http://192.168.56.1:5000/api/itdept/employee/";

=======
  
  const location = useLocation();
 
  const options = {
    method: 'GET',
    url: constant.empView,
    params: {  id : location.id },
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'your-rapidapi-key',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    },
      
};
>>>>>>> ad4f14dbccf333e0898591cb2ffb1b7171586481
  useEffect(() => {
   
    const fetchData = async () => {
<<<<<<< HEAD
      const result = await axios(apiUrl);
      setData(result.data.employees);
=======
      const result = await axios.request(options);
      setData(result.data);
>>>>>>> ad4f14dbccf333e0898591cb2ffb1b7171586481
      setShowLoading(false);
    };

    fetchData();
    
  }, []);


  // const editProduct = (id) => {
  //   props.history.push({
  //     pathname: '/edit/' + id
  //   });
  // };

  // const deleteProduct = (id) => {
  //   setShowLoading(true);
  //   const product = { prod_name: data.prod_name, prod_desc: data.prod_desc, prod_price: parseInt(data.prod_price) };
  //   axios.delete(apiUrl, product)
  //     .then((result) => {
  //       setShowLoading(false);
  //       props.history.push('/list')
  //     }).catch((error) => setShowLoading(false));
  // };

  return (
    <div>
      {showLoading && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> }
<<<<<<< HEAD
      {data.length && data.map((item) => (    
      <Jumbotron>
        <h1>{item.name}</h1>
        <p>{item.designation}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        <p>{item.attendance}</p>
        <p>{item.salary}</p>
        <p>{item.address}</p>
        <p>{item.cnic}</p>
        <p>{item.date_of_birth}</p>
        <p>{item.department}</p>
        <p>{item.gender}</p>
        <p>
          <Button type="button" variant="primary" onClick={() => { editProduct(item._id) }}>Edit</Button>&nbsp;
          <Button type="button" variant="danger" onClick={() => { deleteProduct(item._id) }}>Delete</Button>
        </p>
      </Jumbotron>
      ))}
=======
      <h2>Employee View</h2>
      <Jumbotron>   
  {data.map((item) => (
 <div>
  <h4>{item.name} </h4>  
  <h4>{item.designation}</h4> 
  <h4>{item.email}</h4> 
  <h4>{item.phone}</h4> 
  <h4>{item.attendance}</h4> 
  <h4>{item.address}</h4> 
  <h4>{item.cnic}</h4> 
  <h4>{item.date_of_birth}</h4> 
  <h4>{item.department}</h4> 
  <h4>{item.gender}</h4> 
   </div>  
    ))}
  </Jumbotron>
>>>>>>> ad4f14dbccf333e0898591cb2ffb1b7171586481
    </div>
  );
}

export default withRouter(Show);