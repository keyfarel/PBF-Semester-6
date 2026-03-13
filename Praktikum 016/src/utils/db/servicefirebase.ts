import { getFirestore, collection, getDocs, addDoc, doc, getDoc, query, where } from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

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
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const dataToSave = {
      fullname: userData.fullname,
      email: userData.email,
      password: hashedPassword,
      role: "user",
      created_at: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, "users"), dataToSave);
    return { status: true, message: "Registrasi Berhasil" };
  } catch (error) {
    console.error("Error saat signUp:", error);
    return { status: false, message: "Gagal menyimpan data", error };
  }
}

export async function signIn(userData: any) {
  try {
    const q = query(collection(db, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return { status: false, message: "Email tidak ditemukan!" };
    }

    const userDoc = snapshot.docs[0];
    const user = userDoc.data();

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);

    if (!isPasswordValid) {
      return { status: false, message: "Password salah!" };
    }

    const { password, ...userWithoutPassword } = user;
    
    return { 
      status: true, 
      message: "Login Berhasil",
      data: { id: userDoc.id, ...userWithoutPassword } 
    };

  } catch (error) {
    console.error("Error saat signIn:", error);
    return { status: false, message: "Terjadi kesalahan pada server", error };
  }
}