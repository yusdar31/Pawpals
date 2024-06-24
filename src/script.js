// script.js
import { getDatabase, ref, push, set } from 'firebase/database';

// Fungsi untuk mendaftar pengguna ke Realtime Database
export async function registerUser(name, email, password) {
  try {
    const db = getDatabase();
    const newUserRef = push(ref(db, 'users'));
    await set(newUserRef, {
      name: name,
      email: email,
      createdAt: new Date().toISOString(),
    });
    return { uid: newUserRef.key };
  } catch (error) {
    throw error;
  }
}
