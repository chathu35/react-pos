import './App.css';
import Layout from './Layout';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ItemsPage from './ItemsPage';
import CategoriesPage from './CategoriesPage';
import StockManagementPage from './StockManagementPage';
import POSPage from './POSPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/pos" />} /> 
            <Route path="/ItemsPage" element={<ItemsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/stock" element={<StockManagementPage />} />
            <Route path="/pos" element={<POSPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
