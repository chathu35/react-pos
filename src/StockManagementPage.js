import { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function StockManagementPage() {
  const [stockItems, setStockItems] = useState([
    { id: 1, name: 'Item 1', category: 'Category 1', stock: 100 },
    { id: 2, name: 'Item 2', category: 'Category 2', stock: 50 },
  ]);

  const handleUpdateStock = (id, change) => {
    setStockItems(
      stockItems.map((item) =>
        item.id === id ? { ...item, stock: Math.max(0, item.stock + change) } : item
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Stock Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Current Stock</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {stockItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleUpdateStock(item.id, 1)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleUpdateStock(item.id, -1)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
