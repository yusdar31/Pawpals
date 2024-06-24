// src/App.jsx
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Homepage from "./pages/Homepage";
import Komunitaspage from "./pages/KomunitasPage";
import Artikelpage from "./pages/Artikelpage";
import Kontakpage from "./pages/Kontakpage";
import Detailkomunitaspage from "./pages/DetailKomunitaspage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import ArtikelSatu from "./pages/ArtikelSatu";
import AdminLayout from './components/AdminLayout';
import { AuthProvider } from "./contexts/AuthContext";
import './assets/css/sb-admin-2.min.css';

function App() {
  return (
    <AuthProvider>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/komunitaspage" element={<Komunitaspage />} />
          <Route path="/artikelpage" element={<Artikelpage />} />
          <Route path="/kontakpage" element={<Kontakpage />} />
          <Route path="/detailkomunitaspage" element={<Detailkomunitaspage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/registerpage" element={<Registerpage />} />
          <Route path="/artikelsatu" element={<ArtikelSatu />} />
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
        <FooterComponent />
      </div>
    </AuthProvider>
  );
}

export default App;
