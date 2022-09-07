import React, { Component } from 'react'
import {DataContext} from '../components/Context'
import {Link} from 'react-router-dom'
import '../styles/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
            <div className='detailspage'>
            <h1>Have questions? We’re here <br />to help.</h1>
        <p>Thanks for your interest in GSPANN. Below are
          several ways to connect <br />with us. We look forward to hearing from you!</p>
            </div>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>TeamSize:{item.capacity}</span>
                                </div>
                                <p>{item.Newcabin}</p>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Book Cabin
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
