import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../script";
import { app } from "../firebase"; // Pastikan Anda mengimpor app dari firebase.js atau firebaseConfig.js
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Mengimpor fungsi-fungsi authentication dari Firebase



function Registerpage() {
  const navigate = useNavigate();
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

    // Validasi bahwa password dan confirmPassword sama
    if (password !== confirmPassword) {
      alert('Konfirmasi kata sandi tidak sesuai.');
      return;
    }

    try {
      // Register user in Firebase Authentication
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      // Register user in Realtime Database
      const db = getDatabase(app);
      const newUserRef = push(ref(db, 'users'));
      await set(newUserRef, {
        userId: user.uid,
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
      });

      alert('Registrasi berhasil!');
      navigate('/loginpage');
    } catch (error) {
      console.error('Terjadi kesalahan saat registrasi:', error.message);
      alert('Terjadi kesalahan saat registrasi. Silakan coba lagi.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area" style={{ width: 930 }}>
        {/* Left Box */}
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: 'linear-gradient(131.38deg, #E38B54 1.06%, #FFFFFF 222.41%)', borderRadius: '20px' }}>
          <img src="../src/assets/img/logo-xs.png" alt="Logo" className=" mt-3" />
          <p className="text-white fs-2" style={{ fontFamily: 'Courier New', fontWeight: 600 }}>Lengkapi Data Anda!</p>
          <img src="../src/assets/img/loginimage.png" alt="Image" className="img-fluid  mb-3" style={{ width: 250 }} />
        </div>

        {/* Right Box */}
        <div className="col-md-6 right-box" style={{ padding: '40px 30px 40px 40px' }}>
          <div className="row align-items-center">
            <h2 className="header-text mb-4">Registrasi</h2>

            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Nama Lengkap" ref={nameInputRef} />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Masukkan Email" ref={emailInputRef} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="Masukkan Sandi" ref={passwordInputRef} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="confirmPassword" placeholder="Masukkan Ulang Kata Sandi" ref={confirmPasswordInputRef} />
            </div>

            <button className="btn btn-lg btn-primary w-100 fs-6 mb-3" style={{ backgroundColor: '#ED6A09' }} onClick={handleSubmit}>Registrasi</button>

            <div className="row">
              <small>Sudah Punya Akun? <a href="/loginpage">Masuk</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
