import { getFirestore, collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

// Get semua data (Sudah ada di kodemu)
export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

// Tambahkan ini: Get data berdasarkan ID
export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data ? { id: snapshot.id, ...data } : null; 
}

// Add data (Sudah ada di kodemu)
export async function addData(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return { status: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { status: false, error };
  }
}