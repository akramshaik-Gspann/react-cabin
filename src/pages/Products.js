import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/Context";
import "../styles/Products.css";

export class Products extends Component {
  static contextType = DataContext;
  render() {
    const { products, addCart } = this.context;
    console.log(products);
    return (
      <div>
        <div>
          <center>
            <h3>Over 10+ Cabins Instantly Bookable</h3>
          </center>
        </div>
        {/* <div>
                    SELECT DATE:<input type="datetime-local" className='page1' />
                    <div className='cabindropdown'> <label for="cars">Choose a cabin:</label>
                        <select name="cars" id="cars">
                            <option value="volvo">select_cabin</option>
                            <option value="volvo">cabin_201to205</option>
                            <option value="saab">cabin_301to305</option>
                            <option value="opel">cabin_222</option>
                            <option value="audi">cabin_333</option>
                        </select></div>
                </div> */}
        <div id="product">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt="" />

                <div className="content">
                  <h3>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                  </h3>
                  <div className="cab">
                    <p>TeamSize: {product.capacity}</p>
                    <p>{product.Newcabin}</p>
                  </div>
                  {/*                                     
                                    <Link to={`/product/${product._id}`}> */}
                  {/* <button onClick={() => addCart(product._id)}>Book Now</button> */}
                  {/* </Link> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
