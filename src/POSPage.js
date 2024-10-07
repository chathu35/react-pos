import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

export default function POSPage() {
  const [items] = useState([
    { id: 1, name: 'Item 1', price: 10.99, image: 'https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Item 2', price: 15.99, image: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Item 3', price: 7.99, image: 'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Item 4', price: 12.99, image: 'https://images.pexels.com/photos/2583187/pexels-photo-2583187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cart.find((cartItem) => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    } else {
      setCart(cart.filter((cartItem) => cartItem.id !== itemId));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    alert('Checkout completed! Total: $' + getTotalPrice().toFixed(2));
    setCart([]);
  };

  return (
    <div className="flex h-full">
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Available Items</h2>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</p>
              <button
                onClick={handleCheckout}
                className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                <ShoppingCart className="inline-block mr-2 h-5 w-5" />
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
