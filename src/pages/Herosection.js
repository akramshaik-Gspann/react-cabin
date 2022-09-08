import React from "react";
import "../styles/Hero.css";
import picthree from "../Images/three.jpg";
import pictwo from '../Images/one.jpg'
function Herosection() {
  return (
    <div className="container flexcabin">
      <div class="row meeting">
        <div class="col-md-6">
          <img src={picthree} alt="Snow" height={500} width={500} />
        </div>

        <div class="col-md-6">
          <h4>Flexi Cabins for the new world.</h4>
          <p>
            Changed working habits due to Covid19? Not sure if you want to come
            to office everyday and concerned about safety while coming to
            coworking space? Tired of working from home and need a change?
          </p>

          <p>
            We've got you covered. Book private cabins reserved for you for the
            entire day. Get your privacy and security- both. Choose from over
            150+ options across India. Work alone or bring your team along.
            Welcome to your own private office, closer to your home!
          </p>
          <p>
            Our meeting rooms / spaces are equipped with facilities such as:
          </p>
        </div>
      </div>
      <div class="row meeting">
        <div class="col-md-6">
          <h4>Meeting Rooms by the hour</h4>
          <p>
            Hold your client meetings, workshops or get your team to present in
            our fully-serviced meeting rooms. Book on-demand by the hour, and
            ensure your meeting runs smoothly. We’ll help you find the ideal
            meeting room to host an event, to interview candidates, or a space
            to conduct training sessions.
          </p>
          <p>
            We've got you covered. Book private cabins reserved for you for the
            entire day. Get your privacy and security- both. Choose from over
            150+ options across India. Work alone or bring your team along.
            Welcome to your own private office, closer to your home!
          </p>

          <p>
            Our meeting rooms / spaces are equipped with facilities such as:
          </p>
        </div>
        <div class="col-md-6">
          <img src={pictwo} alt="Snow" height={500} width={500} />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
