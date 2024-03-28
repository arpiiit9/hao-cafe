import React, { useState,useEffect } from 'react';
import Order from './Order';


const obsessedMenuData = {
  category: 'Obsessed',
  items: [
    {
      name: 'Momos (6 pcs)',
      price: 100,
      image:"https://avatars.mds.yandex.net/i?id=e687a68ae7146d227cacb88634942fe5-5341520-images-thumbs&n=13",
      subitems: [
        { name: 'Vegetable', price: 100 },
        { name: 'Paneer', price: 100 },
        { name: 'Fried Vegetable', price: 100 },
        { name: 'Fried Paneer', price: 100 }
      ]
    },
    {
      name: 'Spaghetti/Fettuccine Pasta',
      price: 150,
      image:"https://avatars.mds.yandex.net/i?id=3a53c5ba8ae75f946d89ab4c4d1ff4d40e2adb0b-12155438-images-thumbs&n=13",
      subitems: [
        { name: 'Red Sauce', price: 150 },
        { name: 'Orange Sauce', price: 150 },
        { name: 'White Sauce', price: 150 },
        { name: 'Pesto Sauce', price: 150 }
      ]
    },
    {
      name: 'Spaghetti Noodles',
      price: 150,
      image:"https://avatars.mds.yandex.net/i?id=eb02b23d611b1ef22d09a113fd4bc1f44a443d17-10803542-images-thumbs&n=13",
      subitems: [
        { name: 'Spaghetti Noodle', price: 150 }
      ]
    },
    {
      name: 'Cheesling Chips',
      price: 120,
      image:"data:image/jpeg;base64,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",
      subitems: [
        { name: 'Cheesling Chips Nachos', price: 120 },
        { name: 'Add-ons: Chipotle Style Dressing with Cheese', price: 30 },
        { name: 'Add-ons: Mint Mayo with Cheese', price: 30 },
        { name: 'Pizza Sauce', price: 30 }
      ]
    },
    {
      name: 'Grilled Cheese Broccoli',
      price: 200,
      image:"https://avatars.mds.yandex.net/i?id=a4d65f42f09e69d8668b3cfa2c4f833cf4261148-10814954-images-thumbs&n=13",
    },
    {
      name: 'Stuffed Wrap',
      price: 150,
      image:"https://avatars.mds.yandex.net/i?id=b25a41a35bf52153e98d9c17aba3ed7db771008b-12996563-images-thumbs&n=13",
      subitems: [
        { name: 'Paneer Wrap', price: 150 },
        { name: 'Vegetable Wrap', price: 150 },
        { name: 'Soya Chunks Wrap', price: 150 }
      ]
    },
    {
      name: 'Smiley McCain (8 pcs)',
      price: 200,
      image:"https://avatars.mds.yandex.net/i?id=65e75bb655fbd9c31155cfd48841781cd3859b34-10518571-images-thumbs&n=13",
    },
    {
      name: 'Garlic Potato Wedges',
      price: 200,
      image:"https://avatars.mds.yandex.net/i?id=f8eabeb707ddb3a11135668da0c22bc60df1c6bd-10022975-images-thumbs&n=13",
    },
    {
      name: 'Corn Dog (2 pcs)',
      price: 200,
      image:"https://avatars.mds.yandex.net/i?id=34c71d76371e2a489925e208c36a53125dae4993-10725450-images-thumbs&n=13",
    },
    {
      name: 'Pizza Puff Girls',
      price: 250,
      image:"",
    },
    {
      name: 'Cheesy Zingy Parcel (3 pcs)',
      price: 280,
      image:"https://i.ytimg.com/vi/5eW0y-APuMQ/hqdefault.jpg",
    },
    {
      name: 'Noughty Nuggets (8 pcs)',
      price: 200,
      image:"",
    },
    {
      name: 'Choco Volcano',
      price: 150,
      image:"",
    },
    {
      name: 'Waffles',
      price: 100,
      image:"",
      subitems: [
        { name: 'Crispy', price: 100 },
        { name: 'Red Velvet', price: 100 },
        { name: 'Brownie', price: 100 },
        { name: 'Add-ons: Ice Cream', price: 20 },
        { name: 'Add-ons: Honey', price: 50 },
        { name: 'Add-ons: Nutella', price: 80 }
      ]
    },
    {
      name: 'Chilli Paneer',
      price: 200,
      image:"https://avatars.mds.yandex.net/i?id=9c24dfce3fbd15012fea2be0febba21075862f2d-12498917-images-thumbs&n=13",
    },
    {
      name: 'Dumplings (3 pcs)',
      price: 300,
      image:"https://avatars.mds.yandex.net/i?id=50ba4f8dd3944d456b7b3a0436e696ab7cd8a9c3-9068918-images-thumbs&n=13",
      subitems: [
        { name: 'Vegetable', price: 100 },
        { name: 'Ramen Noodle', price: 100 }
      ]
    },
    {
      name: 'Paneer Makhani Rolls (3 pcs)',
      price: 150,
      image:"https://yandex-images.clstorage.net/vF5c3Q183/6d0dfe5LjAVb/BTjhjCunTPenNRBhbkOQTJPDRsR74eKwQ_cwiYfc5wlBZYFrR6x1A4fyu_h-ztWSzUBKkUcqCi32ItJ_KuxBHlFcJdgaUtnDFlBQ4V4TsZlH8lcB26QzFGbCpbzRuiU-FgYmrRAuR4FGcp49CxpEB5jwqQLzPItvhibFmqwvZxhH27OsjgcchKN0AoKOQqCoEGNHI7kEgXBG1nIL8ht3TRb3ZD7gPsXCxzONrxjZ8_fKEJiThR6qf4RVFlgc3ZRJ1znzz62HbEShFEKTzwMgSUAjl7ILtJERB1Tyu9EI975kNOXMAkxF4PXS3Y5baqPniMIZ0EVf-B0XNfTo7l90ubcI4T9dt--l0XbgUa8T4Irjw5UiuRZBYJamEhhBetXNJpSF30IdlhL2we4vO6uDR9kiOiKmnJhNNpVE2_-ctttn-ZIeTbXOxoOWsSHvUGOZ4zNlMsuGcvN3RnJ7Ijn3XWY1td1i7IeQ9mDe7YnZYpfqI0iz5d85DsVFNSis74ar5JogDy8UnRahFeDCzXOCy1IytSDJFgKxVPby-EJqRKzVVMV8I91mYUdyf08Lm1FFmoKpcKatK550l2UYnh9ka4drgO8PlRwHgUUSE87CgppBcLTxyUbhEpRmAZrxGER8JDRXTLMspZHnoq3eClnj1fsS2XIHTVrfpOX2-d2ctosmOdCfT1a-FROV4PDdobFa0UM0wLv1AKM1ddEJQJjWb6a05M2zPwVjJNAP7Ho4oHfKcqnRZj8an1SXpbmMPwZqNXqSTy0nLaYjtDCyzRGw-BJiNUAoJ5LBREXBicDZNA0VN7c-8s2mkwZwrZ95K5IVuSIJ80Stuu-FB8dbHP1lubQI4A2PBv5Hk4eikVxDMZlAAodi2AbywKd3ofshOvYupvSEL0KPJHCko9yceypCZjjC2OPX3Lk8lTb02h8O1Con6MO-DsYcBlE2UNGcwEKZMGOWIcgUwBI3ZtC5c",
    }
  ]
};



const Obsessed = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    // Load order items from localStorage when component mounts
    const storedOrderItems = JSON.parse(localStorage.getItem('orderItems'));
    if (storedOrderItems) {
      setOrderItems(storedOrderItems);
    }
  }, []);

  const removeFromOrder = (itemName) => {
    const updatedOrderItems = orderItems.filter(item => item.name !== itemName);
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
    const existingItemIndex = orderItems.findIndex(orderItem => orderItem.name === item.name);
    if (existingItemIndex !== -1) {
      // Increase its quantity by 1
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].quantity += 1;
      setOrderItems(updatedOrderItems);
    } else {
      // Add the item to the order with a quantity of 1
      setOrderItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    // Save order items to localStorage whenever it changes
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
  }, [orderItems]);

  return (
    <div>
      {orderItems.length > 0 ? <Order orderItems={orderItems} removeFromOrder={removeFromOrder} /> : null}

      <ul className="h-auto w-69 mt-0 bg-gradient-to-br from-gray-200 to-white list-none p-2 rounded-lg border border-gray-300">
        {obsessedMenuData.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col text-2xl border-b font-semibold border-gray-300"
          >
            <div
              className="flex items-center h-14 cursor-pointer transition-colors duration-300 ease-in-out"
              onClick={() => toggleCategory(item.name)}
            >
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md mr-4 bg-cover" />
              {item.name}
            </div>
            {expandedCategory === item.name && (
              <ul className="list-none pl-4">
                {item.subitems && item.subitems.map((subitem) => (
                  <li key={subitem.name} className="flex justify-between items-center bg-slate text-lg border-b border-gray-300 py-2">
                    <span>{subitem.name}</span>
                    <span className="text-green-500">₹{subitem.price}</span>
                    <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => handleAddToOrder(subitem)}>+</button>
                  </li>
                ))}
                {/* If no subitems, add the item itself as a subitem */}
                {!item.subitems && (
                  <li className="flex justify-between items-center bg-slate text-lg border-b border-gray-300 py-2">
                    <span>{item.name}</span>
                    <span className="text-green-500">₹{item.price}</span>
                    <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => handleAddToOrder(item)}>+</button>
                  </li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Obsessed;
