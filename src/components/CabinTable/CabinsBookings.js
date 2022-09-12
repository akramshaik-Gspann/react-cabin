import React, { useState } from 'react';
import CabinsList from './CabinsList';

function CabinsBookings({profile}) {
    const [cabinId, setCabinId] = useState("");

    console.log(profile);
    
    const getCabinIdHandler = (id) => {
        setCabinId(id);
    };
    return (
        <>
            <center><h2>My Cabin Bookings</h2></center>
            <div className='row'>
                <CabinsList getBookId={getCabinIdHandler} profile={profile}/>
            </div>


        </>
    )
}

export default CabinsBookings;