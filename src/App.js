import React, { useEffect, useState } from 'react';
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
import { DataProvider } from './components/Context'
import Products from './pages/Products';
// import About from './pages/About';
// import Contact from './pages/Contact';
import CabinConfirmation from './components/CabinTable/CabinConfirmation'
import Footer from './pages/Footer';
import CabinsBookings from './components/CabinTable/CabinsBookings';
import Details from './pages/Details';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser.displayName);
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])
  const [cabinData, setCabinData] = useState([]);

  return (
    <DataProvider>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login cabinData={cabinData} />} />
            <Route exact path='/register' element={<Register />} />
            <Route path="/product/:id" element={<Details setCabinData={setCabinData} />} exact />
            <Route exact path='/product' element={<Products />} />
            {/* <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} /> */}
            <Route path="/allbookings" element={<CabinsBookings />} />
            <Route path="/cabinconfirmation" element={<UserRoute> <CabinConfirmation /> </UserRoute>} />
          </Routes>
        </div>
      </Router>
      <Footer />

    </DataProvider>
  );
}

export default App;