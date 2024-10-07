import React from 'react';
import { ShoppingCart, Package, List, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">POS System</h1>
        </div>
        <ul className="space-y-2 py-4">
          <li>
            <a href="/pos" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Point of Sale
            </a>
          </li>
          <li>
            <Link to="/ItemsPage" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Package className="mr-2 h-5 w-5" />
              Items
            </Link>
          </li>
          <li>
            <a href="/categories" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <List className="mr-2 h-5 w-5" />
              Categories
            </a>
          </li>
          <li>
            <a href="/stock" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <BarChart2 className="mr-2 h-5 w-5" />
              Stock Management
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
