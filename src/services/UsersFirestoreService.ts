import { Firestore } from "firebase-admin/firestore";
import { User } from "../initDB/usersDB";

const firestore = new Firestore();
const userCollection = "users";

export const getUserById = async (userId: string): Promise<User | null> => {
  const userRef = firestore.collection(userCollection).doc(userId);
  const userData = await userRef.get();

  return userData.exists ? (userData.data() as User) : null;
};

export const addUser = async (
  uid: string,
  userData: Omit<User, "id">,
): Promise<void> => {
  const userRef = firestore.collection(userCollection).doc(uid);
  await userRef.set(userData);
};

export const deleteUser = async (userId: string): Promise<void> => {
  const userRef = firestore.collection(userCollection).doc(userId);
  await userRef.delete();
};

export const updateUser = async (
  userId: string,
  userData: Partial<User>,
): Promise<void> => {
  const userRef = firestore.collection(userCollection).doc(userId);
  await userRef.update(userData);
};
