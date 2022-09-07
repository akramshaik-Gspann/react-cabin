import React, { useState } from 'react'
import AddCabin from '../CabinTable/AddCabin'
import CabinsList from '../CabinTable/CabinsList'

function CabinConfirmation() {
    const [cabinId, setCabinId] = useState("");

  const getCabinIdHandler = (id) => {
    setCabinId(id);
  };
  return (
    <>
    <AddCabin id={cabinId} setCabinId={setCabinId} />
    <CabinsList getBookId={getCabinIdHandler} />
    </>
  )
}

export default CabinConfirmation