import React, { useState } from 'react';
import CabinsList from './CabinsList';

function CabinsBookings() {
    const [cabinId, setCabinId] = useState("");

    const getCabinIdHandler = (id) => {
        setCabinId(id);
    };
    return (
        <>
            <center><h2>My Cabin Bookings</h2></center>
            <div className='row'>
                <CabinsList getBookId={getCabinIdHandler} />
            </div>


        </>
    )
}

export default CabinsBookings;