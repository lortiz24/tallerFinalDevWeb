import { db } from "../firebase";
import { collection, deleteDoc, doc, addDoc } from 'firebase/firestore/lite';

const deleteDatabase = async (id, coleccion = 'busquedas') => {
    const docRef = doc(db, coleccion, id)
    await deleteDoc(docRef)
    return true;
}

export default deleteDatabase