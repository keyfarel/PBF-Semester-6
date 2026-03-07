import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

// get data
export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

// add data
export async function addData(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return { status: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { status: false, error };
  }
}