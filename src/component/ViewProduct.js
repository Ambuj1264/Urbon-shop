import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const ViewProduct = (props) => {
  const [data, setData] = useState([]);

  let params = useParams();

  console.log(params.id, "userId");
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
  console.log(data, "hhhhhhh");
  let mydata = data.filter((post) => post.id == params.id);
  console.log(mydata, "myData");

  return (
    <>
      <div>
        {mydata.map((v, i) => {
          return (
            <div
              className="container-fluid"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="left" style={{ margin: "50px", width:"50%" }}>
                <img
                  src={v.image}
                  alt="..."
                  style={{ width: "400px", height: "400px" }}
                />
              </div>
              <div className="right" style={{ margin: "50px", width:"50%" }}>
                <span> Details of the project </span>
                <ul>
                  <li style={{ color: "blue" }}>Title : {v.title}</li>
                  <li style={{ color: "blue" }}>
                    Description : {v.description}
                  </li>
                  <li style={{ color: "blue" }}>Category : {v.category}</li>
                  <li style={{ color: "blue" }}>Rate : {v.rating.rate}</li>
                  <li style={{ color: "green" }}>
                    Available Item : {v.rating.count}
                  </li>
                  <li style={{ color: "red" }}>Price : {v.price} Rs.</li>
                </ul>
                <Link to="/" className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewProduct;
