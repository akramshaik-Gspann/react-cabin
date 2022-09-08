import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fbSignInInitiate, googleSignInInitiate, loginInitiate } from '../redux/actions';
import "../styles/Login.css";
const Login = ({ cabinData }) => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const { email, password } = state;
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Cabin Data", cabinData.length, "current user", currentUser)
        if (currentUser && cabinData._id) {
            navigate('/cabinconfirmation');
        }
        else {
            navigate('/login')
        }
    }, [currentUser, navigate]);

    const dispatch = useDispatch();
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
    };
    const handleFBSignIn = () => {
        dispatch(fbSignInInitiate());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({ email: "", password: "" });
        navigate('/cabinconfirmation');
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    return (
        <div className='container'>
            <div id="logreg-forms">
                <form className='form-signin' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: "center" }}>
                        Sign in
                    </h1>
                    <div className='social-login'>
                        <button className='btn google-btn social-btn' type='button' onClick={handleGoogleSignIn}>
                            <span>
                                <i className='fab fa-google-plus-g'></i> Sign in with Google+
                            </span>
                        </button>
                        <button className='btn facebook-btn social-btn' type='button' onClick={handleFBSignIn}>
                            <span>
                                <i className='fab fa-facebook-f'></i> Sign in with Facebook
                            </span>
                        </button>
                    </div>
                    <p style={{ textAlign: "center" }}>OR</p>
                    <input
                        type="email"
                        id="inputEmail"
                        className='form-control'
                        placeholder='Email Address'
                        name='email'
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <div className='text-center'>
                        <button className='btn btn-block signinb' type='submit'>
                            <i className=''></i> Sign In</button>
                    </div>
                    <hr />
                    <center>
                    <p>Don't have an account ?</p>
                    </center>
                    <Link to="/register">
                        <div className='text-center'>
                            <button className='btn btn-block signupb' type='button' id='btn-signup'>
                                <i className=''></i>Sign up New Account</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login