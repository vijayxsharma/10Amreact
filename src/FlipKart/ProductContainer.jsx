import React, { useEffect, useState } from 'react'
import Products from './products'
// import {data} from "./productsData.js"
import axios from 'axios';
const ProductContainer = () => {
  const [inpVal, setinpVal] = useState("")
  const [initialproductList, setInitialproductList] = useState([])
  const [productList, setproductList] = useState([])
  // fetch API
  const getproduct = async ()=>{
    // fetch("https://dummyjson.com/products",{"method":"POST"})
    // .then(res=>res.json())
    // .then((data)=>{
    //   setproductList(data.products);
    //   setInitialproductList(data.products);
    // });

  let {data} = await axios.get("https://dummyjson.com/products")
      setInitialproductList(data.products);
      setproductList(data.products);
  };
  
  
  //useEffect
  useEffect(()=>{getproduct()},[])

  
  const handleBtn=()=>{
    let updatedList = initialproductList.filter((elm) => elm.title.toLowerCase().includes(inpVal.toLowerCase()));
    setproductList(updatedList)
    // setinpVal("")
  }
  return (
    <div className="container">
      <div className="row">
        <div className="my-2">
          <input type="text" value={inpVal} onChange={(e) =>setinpVal(e.target.value)} />
          <button className='btn btn-success mx-2' onClick={handleBtn}>Search</button>
        </div>
        <div className="row">
          {productList.map((elm,ind) =>(<Products elm={elm} key={ind}/>))}
        </div>
      </div>
    </div>
  )
}

export default ProductContainer
