import React, { useState } from 'react'
import AddCabin from '../CabinTable/AddCabin'

function CabinConfirmation() {
    const [cabinId, setCabinId] = useState("");

  const getCabinIdHandler = (id) => {
    setCabinId(id);
  };
  return (
    <>
    <AddCabin id={cabinId} setCabinId={setCabinId} />
    </>
  )
}

export default CabinConfirmation