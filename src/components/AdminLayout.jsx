// src/components/AdminLayout.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from '../pages/Dashboard';
import AdminPage from '../pages/AdminPage';
import '../assets/css/sb-admin-2.min.css';  // Sesuaikan jalur sesuai lokasi file Anda

const AdminLayout = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="admin" element={<AdminPage />} />
              {/* Tambahkan lebih banyak Route sesuai kebutuhan */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
