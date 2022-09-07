import React, { useState } from 'react';
import CabinsList from './CabinsList';

function CabinsBookings() {
    const [cabinId, setCabinId] = useState("");

    const getCabinIdHandler = (id) => {
        setCabinId(id);
    };
    return (
        <>
            <CabinsList getBookId={getCabinIdHandler}  />
        </>
    )
}

export default CabinsBookings;