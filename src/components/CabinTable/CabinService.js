// import { db } from "../../../../../../Naveen/cabin-booking/src/components/firebase-config";
import { db } from "../../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const cabinCollectionRef = collection(db, "cabins");
class CabinDataService {
  addCabins = (newCabin) => {
    return addDoc(cabinCollectionRef, newCabin);
  };

  updateCabin = (id, updatedCabin) => {
    const cabinDoc = doc(db, "cabins", id);
    return updateDoc(cabinDoc, updatedCabin);
  };

  deleteCabin = (id) => {
    const cabinDoc = doc(db, "cabins", id);
    return deleteDoc(cabinDoc);
  };

  getAllCabins = () => {
    return getDocs(cabinCollectionRef);
  };

  getCabin = (id) => {
    const cabinDoc = doc(db, "cabins", id);
    return getDoc(cabinDoc);
  };
}

export default new CabinDataService();
