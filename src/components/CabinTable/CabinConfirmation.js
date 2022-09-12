import React, { useState } from 'react'
import AddCabin from '../CabinTable/AddCabin'

function CabinConfirmation({profile, cabinData}) {
    const [cabinId, setCabinId] = useState("");
    // console.log("Cabin Data for confirm Booking",  cabinData);

  const getCabinIdHandler = (id) => {
    setCabinId(id);
  };
  return (
    <>
    <AddCabin id={cabinId} setCabinId={setCabinId} profile={profile}  cabinData={cabinData}/>
    </>
  )
}

export default CabinConfirmation