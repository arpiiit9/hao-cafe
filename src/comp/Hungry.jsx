import React, { useEffect, useState } from 'react';
import Order from './Order';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const hungryMenuData = {
  category: 'Hungry',
  items: [
    {
      name: 'Pizza',
      price: 190,
      image: "https://avatars.mds.yandex.net/i?id=5b07b0164afbf9544f58d8cf4d8d651d010dd336-5252128-images-thumbs&n=13",
      subitems: [
        { name: 'Margherita', price: 180 },
        { name: 'Cheese Core', price: 220 },
        { name: 'Mexican Pizza', price: 220 },
        { name: 'Farm Delight Pizza', price: 240 },
        { name: 'Paneer Makhni Pizza', price: 280 },
        { name: 'Mac-o-Mac Pizza', price: 300},
        { name: 'Overloaded Pizza', price: 400 },
        { name: 'Add-ons: Cheese', price: 40 },
        { name: 'Add-ons: Cheese Burst Crust', price: 50 }
      ]
    },
    {
      name: 'Kulhad Pizza',
      price: 100,
      image: "https://images.herzindagi.info/image/2023/Sep/kulhad-pizza-recipe.jpg",
      subitems: [
        { name: 'Margherita', price: 100 },
        { name: 'Cheese Corn', price: 120 },
        { name: 'Mexican Pizza', price: 120 },
        { name: 'Farm Delight Pizza', price: 150 },
        { name: 'Paneer Makhni Pizza', price: 150 }
      ]
    },
    {
      name: 'Pasta',
      price: 250,
      image: "https://brandtscreek.pub/wp-content/uploads/2017/05/brandts-creek-pub-kelowna-menu-rice-bowls-pasta.jpg",
      subitems: [
        { name: 'White Sauce Pasta', price: 250 },
        { name: 'Red Sauce Pasta', price: 250 },
        { name: 'Orange Pasta', price: 250 },
        { name: 'Pesto Pasta', price: 250 },
        { name: 'Mac n Cheese Pasta', price: 300 }
      ]
    },
    {
      name: 'Maggie',
      price: 100,
      image: "https://avatars.mds.yandex.net/i?id=d8e89c7bc8e882d352b321239989894aa830788b-5220968-images-thumbs&n=13",
      subitems: [
        { name: 'Classic Maggie', price: 60 },
        { name: 'Korean Maggie', price: 120 },
        { name: 'Chilli Garlic Maggie', price: 120 },
        { name: 'Add-ons: Vegetable', price: 20 },
        { name: 'Add-ons: Cheese', price: 20 },
        { name: 'Add-ons: Garlic Sauce', price: 20 }
      ]
    },
    {
      name: 'Garlic Bread',
      price: 250,
      image: "https://avatars.mds.yandex.net/i?id=3f66fa9e083590152108750546f057d1aa192ef0-10514561-images-thumbs&n=13",
      subitems: [
        { name: 'Classic Garlic Bread', price: 80 },
        { name: 'Cheese Garlic Bread', price: 120 },
        { name: 'Stuffed Garlic Bread', price: 300 }
      ]
    },
    {
      name: 'Salad (Low Calorie)',
      price: 150,
      image: "https://avatars.mds.yandex.net/i?id=c26378f8d6aad7090c05859a9b7a5b736b6be986-10696380-images-thumbs&n=13",
      subitems: [
       { name: 'Salad (Low Calorie)',
        price: 150},
        { name: 'Paneer (Add-on)', price: 40 },
        { name: 'Oats', price: 150 },
        { name: 'Soya Chunks (High Protein)', price: 150 },
        { name: 'Smoothie', price: 150 }
      ]
    },
    {
      name: 'Toast',
      price: 0,
      image: "https://avatars.mds.yandex.net/i?id=20e1adbcc7864d91231ca73407d4b55cec5f367b-10166367-images-thumbs&n=13",
      subitems: [
        { name: 'With Butter', price: 30 },
        { name: 'With Jam', price: 40 }
      ]
    },
    {
      name: 'Sandwich',
      price: 300,
      image: "https://avatars.mds.yandex.net/i?id=d3193d2accc8cc96a163b350f6ec65e51440133b-9043236-images-thumbs&n=13",
      subitems: [
        { name: 'Bombay Sandwich', price: 60 },
        { name: 'Masala Sandwich', price: 80 },
        { name: 'Vegetable Sandwich', price: 100 },
        { name: 'Cheese Chutney Sandwich', price: 120 },
        { name: 'Paneer Tikka Sandwich', price: 150},
        { name: 'Club Sandwich', price: 200 },
        { name: 'Sandy Witchy Bites', price: 280 },
        { name: 'Chocolate Sandwich', price: 150 },
        { name: 'Pizza Sandwich', price: 180 },
        { name: 'Add-ons: Cheese', price: 20 },
        { name: 'Add-ons: Mayo', price: 20 },
        { name: 'Add-ons: Chipotle Sauce', price: 20 }
      ]
    },
    {
      name: 'Burger',
      price: 150,
      image: "https://avatars.mds.yandex.net/i?id=7d0fc1ffb452aca1ee752bdb6ed2ee3604c7ecda-12422218-images-thumbs&n=13",
      subitems: [
        { name: 'Aloo Tikki Burger', price: 80 },
        { name: 'Classic Veg Burger', price: 100 },
        { name: 'Mexican Burger', price: 120 },
        { name: 'Add-ons: Cheese', price: 20 },
        { name: 'Add-ons: Grilled Paneer', price: 30 },
        { name: 'Add-ons: Tikki', price: 40 }
      ]
    },
    {
      name: 'Fries',
      price: 150,
      image: "https://avatars.mds.yandex.net/i?id=b042efb0a153b88c35d41869b70786325f5937c7-12532894-images-thumbs&n=13",
      subitems: [
        { name: 'Salted Fries', price: 80 },
        { name: 'Masala Fries', price: 100 },
        { name: 'Peri-Peri Fries', price: 120 },
        { name: 'Frenchy Cheesy Fries', price: 250 },
        { name: 'Add-ons: Cheese', price: 30 },
        { name: 'Add-ons: Chipotle Cheese', price: 30 }
      ]
    }
  ]
};



  const   Hungry = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
  
    useEffect(() => {
      // Load order items from localStorage when component mounts
      const storedOrderItems = JSON.parse(localStorage.getItem('orderItems'));
      if (storedOrderItems) {
        setOrderItems(storedOrderItems);
      }
    }, []);
  
    useEffect(() => {
      // Save order items to localStorage whenever it changes
      localStorage.setItem('orderItems', JSON.stringify(orderItems));
    }, [orderItems]);
  
    const removeFromOrder = (itemName) => {
      const updatedOrderItems = orderItems.map(item =>
        item.name === itemName
          ? { ...item, quantity: Math.max(0, item.quantity - 1) } // Reduce quantity, ensuring it's not negative
          : item
      ).filter(item => item.quantity > 0); // Remove items with quantity zero
      setOrderItems(updatedOrderItems);
    };
    
  
    const toggleCategory = (category) => {
      if (expandedCategory === category) {
        setExpandedCategory(null);
      } else {
        setExpandedCategory(category);
      }
    };
  
    const handleAddToOrder = (item) => {
      // Check if the item is already in the order
      const existingItem = orderItems.find(orderItem => orderItem.name === item.name);
      if (existingItem) {
        // Increase its quantity by 1
        const updatedOrderItems = orderItems.map(orderItem =>
          orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
        );
        setOrderItems(updatedOrderItems);
      } else {
        // Add the item to the order with a quantity of 1
        setOrderItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
      }
    };

    const clearOrder = () => {
      // Clear all order items
      setOrderItems([]);
    };

return (
  <div>
    {orderItems.length > 0 ? <Order orderItems={orderItems} removeFromOrder={removeFromOrder}  clearorder={clearOrder}/>
 : <> </>}

    <ul className="h-auto w-69 mt-0 bg-gradient-to-br from-gray-200 to-white list-none p-2 rounded-lg border border-gray-300">
      {hungryMenuData.items.map((item) => (
        <li
          key={item.name}
          className="flex flex-col text-2xl border-b font-normal border-gray-300"
        >
          <div
            className="flex items-center h-14 cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={() => toggleCategory(item.name)}
          >
            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md mr-4 bg-cover" />
            {item.name}
          </div>
          {expandedCategory === item.name && (
            <ul className=" bg-slate-100  rounded-md list-none pl-4">
              {item.subitems && item.subitems.map((subitem) => (
                <li key={subitem.name} className="flex justify-between items-center bg-slate text-lg border-b border-gray-300 py-2">
                  <span>{subitem.name}</span>
                  <span className="text-green-500">₹{subitem.price}</span>
                  <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => handleAddToOrder(subitem)}>+</button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    <Link to="/order">

    </Link>
  </div>
);
              }

export default Hungry;

