import React, { useState } from "react";
import { db } from "../firebase";
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from '../redux/actions';
import { useNavigate } from "react-router-dom";
import "firebase/compat/firestore";

function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
    navigate('/login');
  }

  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [power, setPower] = useState("");
  const [ports, setPorts] = useState("");
  const [loader, setLoader] = useState(false);

  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("cabininfo")
      .add({
        name: name,
        capacity: capacity,
        power: power,
        ports: ports,
        date: date,
      })
      .then(() => {
        setLoader(false);
        alert("Your cabin has been booked!");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setCapacity("");
    setPower("");
    setPorts("");
    setDate("");
  };



  return (
    <div className="myform">

      <h2>Welcome to Our Site</h2>

      <button className='btn btn-danger' onClick={handleAuth}>Logout</button>

      <div className="container">
        <h2>Form data to Firebase Database</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Cabin Name</label>
            <input
              placeholder="Cabin Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Capacity</label>
            <input
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Power Available</label>
            <div class="form-check form-check-inline">

              <input
                type="radio"
                value="yes"
                onChange={(e) => setPower(e.target.value)}
              /> Yes
              <input
                type="radio"
                value="no"
                onChange={(e) => setPower(e.target.value)}
              /> No
            </div>
          </div>
          <div className="form-group">
            <label>Internet Ports Available</label>
            <input
              placeholder="Number of ports"
              value={ports}
              onChange={(e) => setPorts(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <DateTimePicker onChange={setDate} value={date} />
          </div>
          <center>
            <button
              type="submit"
              style={{ background: loader ? "#ccc" : "#0000FF" }}
            >
              Submit
            </button>
          </center>

        </form>
      </div>
    </div>

  )
}

export default Home