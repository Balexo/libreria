import { Timestamp } from "firebase-admin/firestore";

export interface User {
  uid: string;
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const users: User[] = [
  {
    uid: "bEXDwTQqXQaELPRILKRvBPh83D03",
    username: "hfernandez",
    name: "Hernesto",
    surname: "Fernandez",
    email: "hernesto.fernandez@email.com",
    password: "",
    createdAt: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updatedAt: Timestamp.fromDate(new Date(2024, 10, 30, 15, 6, 9)),
  },
];

export default users;
