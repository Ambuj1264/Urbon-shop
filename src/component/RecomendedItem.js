import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ViewProduct from "./ViewProduct";

const RecomendedItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCloth();
  }, []);

  const getCloth = async () => {
    let result = await axios.get("https://fakestoreapi.com/products");
    // console.log(result, "hhhhhhh");
    if (result.data) {
      setData(result.data);
    }
  };

  return (
  
    <>

      <div
        class="container"
        style={{ fontSize: "180%", paddingTop: "15px", textAlign: "center" }}
      >
        Recommended Items For Yor{" "}
      </div>
      
      <div className="d-flex flex-row  justify-content-between" style={{ flexWrap:"wrap" }}>

      {data.map((value, index) => {
        return (
        <div className="cards m-5">
            <div
              className="card bg-black "
              style={{ width: "18rem", color: "white", border:"" }}
            >
              <Link to={`/ViewProduct/${value.id}`}><img src={value.image} className="card-img-top" alt="..." style={{height:"200px"}}/></Link>
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <h5 className="card-title"> Price :{value.price} rs</h5>
               
                <Link to={`/ViewProduct/${value.id}`} className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
            </div>
            </div>
          
        );
      })}
      </div>
    </>
  );
};

export default RecomendedItem;
