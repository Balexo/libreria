// import dotenv from "dotenv";
// dotenv.config();
// import admin from "firebase-admin";

// const projectId = process.env.FIREBASE_PROJECT_ID;
// const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
// const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

// if (!projectId || !clientEmail || !privateKey) {
//   throw new Error("Some environment variable is missing.");
// }

// console.log("projectId", projectId);

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId,
//     clientEmail,
//     privateKey,
//   }),
// });

// console.log("Firebase inicializado correctamente.");

// const db = admin.firestore();

// export { db };

import admin from "firebase-admin";
import path from "path";

admin.initializeApp({
  credential: admin.credential.cert(
    path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS!),
  ),
});

const db = admin.firestore();
export { db };
