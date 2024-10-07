import { useState } from 'react'
import { Edit, Trash } from 'lucide-react'

export default function ItemsPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', category: 'Category 1', price: 10.99, stock: 100 },
    { id: 2, name: 'Item 2', category: 'Category 2', price: 15.99, stock: 50 },
  ])
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = (item) => {
    setItems([...items, { ...item, id: items.length + 1 }])
  }

  const handleEditItem = (item) => {
    setItems(items.map((i) =>
      i.id === item.id
        ? { ...i, name: item.name, category: item.category, price: item.price, stock: item.stock }
        : i
    ));
    setEditingItem(null);
  };


  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Items</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ItemForm
        onSubmit={editingItem ? handleEditItem : handleAddItem}
        initialValues={editingItem || undefined}
      />
    </div>
  )
}

function ItemForm({ onSubmit, initialValues }) {
  const [item, setItem] = useState(
    initialValues || { name: '', category: '', price: 0, stock: 0 }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(item)
    if (!initialValues) {
      setItem({ name: '', category: '', price: 0, stock: 0 })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl font-bold mb-4">{initialValues ? 'Edit Item' : 'Add New Item'}</h3>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          type="text"
          value={item.category}
          onChange={(e) => setItem({ ...item, category: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          step="0.01"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: parseFloat(e.target.value) })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
          Stock
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="stock"
          type="number"
          value={item.stock}
          onChange={(e) => setItem({ ...item, stock: parseInt(e.target.value) })}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {initialValues ? 'Update Item' : 'Add Item'}
        </button>
      </div>
    </form>
  )
}
