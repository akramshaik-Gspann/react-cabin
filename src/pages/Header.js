import React, { Component } from 'react'
import Menu from '../components/svg/bars-solid.svg'
import Close from '../components/svg/times-solid.svg'
// import CartIcon from '../components/svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import "../styles/Header.css";
import { DataContext } from '../components/Context'
import "firebase/compat/firestore";

export class Header extends Component {
    static contextType = DataContext;
    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        const { toggle } = this.state;
        // const { cart } = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20" />
                </div>
                <div className="logo">
                    <h1><Link to="/">Cabinbooking</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Cabins</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20" />
                        </li>
                    </ul>
                    {/* <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20" />
                        </Link>
                    </div> */}
                </nav>
            </header>
        )
    }
}

export default Header
