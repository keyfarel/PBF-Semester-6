import { getFirestore, collection, getDocs, addDoc, doc, getDoc, query, where } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data ? { id: snapshot.id, ...data } : null; 
}

export async function addData(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return { status: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { status: false, error };
  }
}

export async function signUp(userData: any) {
  const q = query(collection(db, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    return { status: false, message: "Email sudah terdaftar!" };
  }

  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    return { status: true, message: "Registrasi Berhasil" };
  } catch (error) {
    return { status: false, message: "Gagal menyimpan data", error };
  }
}