import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

// Pages - sẽ tạo sau
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/patient/DashboardPage';
import RoomDetailPage from './pages/patient/RoomDetailPage';
import AdminPage from './pages/admin/AdminPage';

// Layout components - sẽ tạo sau
import AuthLayout from './components/layout/AuthLayout';
import MainLayout from './components/layout/MainLayout';

// Mock authentication state - sẽ thay bằng context sau
const isAuthenticated = true; // Mock state

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

// Public Route component (redirect if authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Router>
        <Routes>
          {/* Public Routes - Authentication */}
          <Route path="/login" element={
            <PublicRoute>
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            </PublicRoute>
          } />
          
          <Route path="/register" element={
            <PublicRoute>
              <AuthLayout>
                <RegisterPage />
              </AuthLayout>
            </PublicRoute>
          } />
          
          {/* Protected Routes - Patient */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/room/:id" element={
            <ProtectedRoute>
              <MainLayout>
                <RoomDetailPage />
              </MainLayout>
            </ProtectedRoute>
          } />
          
          {/* Protected Routes - Admin */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <MainLayout>
                <AdminPage />
              </MainLayout>
            </ProtectedRoute>
          } />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* 404 - Not Found */}
          <Route path="*" element={
            <Box p={8} textAlign="center">
              <h1>404 - Trang không tồn tại</h1>
            </Box>
          } />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
