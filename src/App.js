import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import UserRoute from './components/UserRoute';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from './redux/actions';
import Header from './pages/Header';
import {DataProvider} from './components/Context'
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])

  return (
    <DataProvider>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/product' element={<Products />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;