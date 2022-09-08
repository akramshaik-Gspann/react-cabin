import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/Context";
import "../styles/Products.css";
export class Products extends Component {
  static contextType = DataContext;
  state = {
    products : this.context.products
  }
  filterData = (e) => {
      if(e.target.value =="asc"){
        const products = this.state.products.sort((a,b) => a.capacity - b.capacity);
        this.setState({products: products})
      }
      else{
        const products = this.state.products.sort((a,b) => b.capacity - a.capacity);
        this.setState({products: products})
      }
  }
  render() {
    const { addCart } = this.context;
    console.log(this.state.products);
    return (
      <div>
        <div>
          <center>
            <h3>Over 10+ Cabins Instantly Bookable</h3>
          </center>
        </div>
        {<div>
                    <div className='cabindropdown'> <label for="cars">Select:</label>
                        <select name="cars" id="cars" onChange={this.filterData} >
                            <option value="default">Team size</option>
                            <option value="asc">Team size Asc</option>
                            <option value="desc">Team size Desc</option>
                        </select></div>
                </div>}
        <div id="product">
          {this.state.products.map((product) => (
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