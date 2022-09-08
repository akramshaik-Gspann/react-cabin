import React, { Component, useContext} from 'react'
import {DataContext} from '../components/Context'
import {Link, useParams} from 'react-router-dom'
import '../styles/Details.css'
function Details (){
    const {products, addCart} = useContext(DataContext);
    let { id } = useParams();
    const data = products.filter(item =>{
        return item._id === id
    })
    return (
        <>
        
                {
                    data.map(item =>(
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
                                <Link to="/login" className="cart">
                                    Book Cabin
                                </Link>
                            </div>
                        </div>
                    ))
                }

<div className='detailspage'>
        <h1>Have questions? We’re here <br />to help.</h1>
          <p>Thanks for your interest in GSPANN. Below are
          several ways to connect <br />with us. We look forward to hearing from you!</p>
            </div>
            </>
        )
}
export default Details