import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Login</h2>
          <p className="text-gray-600">Enter your email and password to login to your account.</p>
        </div>
        <form action="/api/login" method="POST" className="space-y-4 p-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" required className="w-full p-2 border rounded-lg" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required className="w-full p-2 border rounded-lg" />
          </div>
          <div className="flex flex-col space-y-4">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
            <p className="text-sm text-center text-gray-600">
              Don't have an account?
              <Link to="/signup" className="text-blue-600 hover:underline ml-1">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
