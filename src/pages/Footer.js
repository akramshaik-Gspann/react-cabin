import React from 'react'
import '../styles/Footer.css'


function Footer() {
  return (

    <div className='footer'>
      <div className='container'>
      {/* <center><h1 className='namefooter'>@GSPANN</h1></center> */}
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <h5>Services</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Content Management</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">E-Commerce Ecosystem</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Data and Analytics</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">SAP</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mobility</a></li>
          </ul>
        </div>

        <div className="col-md-2 col-xs-12">
          <h5>Products</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">BEAT™</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">CARBON™</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nitrate™</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nitrate™</a></li>
          </ul>
        </div>

        <div className="col-md-2 col-xs-12">
          <h5>About Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Resources</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Find a Position</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Walk-in Events</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>

        <div className="col-md-4 offset-1 col-xs-12">
          <form>
            <h5>Connect With Us</h5>
            <p>362 Fairview Way, Milpitas, CA 95035408-263-3435</p>
            <div className="d-flex w-100 gap-2">
              <label HtmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn" type="button">Subscribe</button>
            </div>
          </form>

        </div>
      </div>
      {/* <p>© GSPANN Technologies, Inc., 2022
        |Privacy Policy|Cookie Policy|CSR Policy|Information Security Policy Statement</p> */}
    </div>
    </div>
  )
}

export default Footer