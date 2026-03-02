import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./routes/ProtectedRoute";
import LandingPage from "./pages/public/LandingPage";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Services from "./pages/public/Services";
import ServiceDetails from "./pages/public/ServiceDetails";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import MyBookings from "./pages/customer/MyBookings";
import Profile from "./pages/customer/Profile";
import BookingPage from "./pages/customer/BookingPage";
import Payments from "./pages/customer/Payments";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import AddService from "./pages/provider/AddService";
import ManageServices from "./pages/provider/ManageServices";
import ProviderBookings from "./pages/provider/ProviderBookings";
import Earnings from "./pages/provider/Earnings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageProviders from "./pages/admin/ManageProviders";
import AdminServices from "./pages/admin/ManageServices";
import Reports from "./pages/admin/Reports";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />

          <Route path="/customer/dashboard" element={<ProtectedRoute role="customer"><CustomerDashboard /></ProtectedRoute>} />
          <Route path="/customer/bookings" element={<ProtectedRoute role="customer"><MyBookings /></ProtectedRoute>} />
          <Route path="/customer/profile" element={<ProtectedRoute role="customer"><Profile /></ProtectedRoute>} />
          <Route path="/customer/booking/:id" element={<ProtectedRoute role="customer"><BookingPage /></ProtectedRoute>} />
          <Route path="/customer/payments" element={<ProtectedRoute role="customer"><Payments /></ProtectedRoute>} />

          <Route path="/provider/dashboard" element={<ProtectedRoute role="provider"><ProviderDashboard /></ProtectedRoute>} />
          <Route path="/provider/add-service" element={<ProtectedRoute role="provider"><AddService /></ProtectedRoute>} />
          <Route path="/provider/services" element={<ProtectedRoute role="provider"><ManageServices /></ProtectedRoute>} />
          <Route path="/provider/bookings" element={<ProtectedRoute role="provider"><ProviderBookings /></ProtectedRoute>} />
          <Route path="/provider/earnings" element={<ProtectedRoute role="provider"><Earnings /></ProtectedRoute>} />

          <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute role="admin"><ManageUsers /></ProtectedRoute>} />
          <Route path="/admin/providers" element={<ProtectedRoute role="admin"><ManageProviders /></ProtectedRoute>} />
          <Route path="/admin/services" element={<ProtectedRoute role="admin"><AdminServices /></ProtectedRoute>} />
          <Route path="/admin/reports" element={<ProtectedRoute role="admin"><Reports /></ProtectedRoute>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
