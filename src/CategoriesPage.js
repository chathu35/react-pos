import { useState } from 'react';
import { Edit, Trash } from 'lucide-react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
  ]);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleAddCategory = (category) => {
    setCategories([...categories, { ...category, id: categories.length + 1 }]);
  };

  const handleEditCategory = (category) => {
    setCategories(categories.map((c) => (c.id === category.id ? category : c)));
    setEditingCategory(null);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Categories</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {categories.map((category) => (
              <tr key={category.id} className="border-b">
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setEditingCategory(category)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
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
      <CategoryForm
        onSubmit={editingCategory ? handleEditCategory : handleAddCategory}
        initialValues={editingCategory || undefined}
      />
    </div>
  );
}

function CategoryForm({ onSubmit, initialValues }) {
  const [category, setCategory] = useState(initialValues || { name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(category);
    if (!initialValues) {
      setCategory({ name: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl font-bold mb-4">{initialValues ? 'Edit Category' : 'Add New Category'}</h3>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={category.name}
          onChange={(e) => setCategory({ ...category, name: e.target.value })}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {initialValues ? 'Update Category' : 'Add Category'}
        </button>
      </div>
    </form>
  );
}
