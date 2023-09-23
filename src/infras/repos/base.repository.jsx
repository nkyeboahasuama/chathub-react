import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  query,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export class BaseRepository {
  db = db;

  constructor(collectionName) {
    this.collection = collection(this.db, collectionName);
  }

  addDoc = async (data) => {
    const createdAt = new Date().toUTCString();
    return await addDoc(this.collection, { ...data, createdAt }); //cast to avoid linting error
  };

  getDoc = async (id) => {
    const docRef = doc(this.collection, id);
    const data = await getDoc(docRef);
    if (data?.exists()) {
      return { ...data.data(), id: docRef.id };
    }
    return undefined;
  };

  getDocs = async () => {
    const queryRef = query(this.collection);
    const data = await getDocs(queryRef);
    const results = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return results;
  };

  editDocById = async (id, data) => {
    const docRef = this.createDocRef(id);
    const res = await updateDoc(docRef, data);
    console.log(res);
    return res;
  };

  editDocs = async () => {};
  deleteDocById = async (id) => {
    const docRef = this.createDocRef(id);
    return await deleteDoc(docRef, id);
  };
  deleteDocsByFilter = async () => {};

  createDocRef = (id) => {
    return doc(this.collection, id);
  };
}