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
        { name: 'Vegetable', price: 120 },
        { name: 'Paneer', price: 150 },
        { name: 'Fried Vegetable', price: 120 },
        { name: 'Fried Paneer', price: 150 }
      ]
    },
    {
      name: 'Spaghetti/Fettuccine Pasta',
      price: 300,
      image:"https://avatars.mds.yandex.net/i?id=3a53c5ba8ae75f946d89ab4c4d1ff4d40e2adb0b-12155438-images-thumbs&n=13",
      subitems: [
        { name: 'Red Sauce', price: 300 },
        { name: 'Orange Sauce', price: 300 },
        { name: 'White Sauce', price: 300 },
        { name: 'Pesto Sauce', price: 300 }
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
      image:"https://avatars.mds.yandex.net/i?id=208146ac9aa68420eea198851cc8c2e2dc98ecba-10303547-images-thumbs&n=13",
      subitems: [
        { name: 'Cheesling Chips ', price: 120 },
        { name: 'Nachos ', price: 150 },
        { name: 'Add-ons: Chipotle Style Dressing with Cheese', price:""  },
        { name: 'Add-ons: Mint Mayo with Cheese', price: ""  },
        { name: 'Pizza Sauce', price: "" }
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
        { name: 'Vegetable Wrap', price: 120 },
        { name: 'Soya Chunks Wrap', price: 120 }
      ]
    },
    {
      name: 'Smiley McCain (8 pcs)',
      price: 150,
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
      image:"https://avatars.mds.yandex.net/i?id=c94de960e8080e55ab6408e9062c199b-4495446-images-thumbs&n=13",
    },
    {
      name: 'Cheesy Zingy Parcel (3 pcs)',
      price: 280,
      image:"https://i.ytimg.com/vi/5eW0y-APuMQ/hqdefault.jpg",
    },
    {
      name: 'Noughty Nuggets (8 pcs)',
      price: 180,
      image:"https://avatars.mds.yandex.net/i?id=a811ee7c3c5184f4edbda295e90edaf1eaeec645-10997011-images-thumbs&n=13",
    },
    {
      name: 'Choco Volcano',
      price: 150,
      image:"https://avatars.mds.yandex.net/i?id=98775e879b72ef7c947ef6c59c2a0c7812fb9823-9136745-images-thumbs&n=13",
    },
    {
      name: 'Waffles',
      price: 100,
      image:"https://avatars.mds.yandex.net/i?id=326a18029a2f6cbfbf46ac62de0657f52b5c91ef-12305949-images-thumbs&n=13",
      subitems: [
        { name: 'Crispy', price: 100 },
        { name: 'Red Velvet', price: 100 },
        { name: 'Brownie', price: 100 },
        { name: 'Add-ons: Ice Cream', price: 30 },
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
      price: 220,
      image:"https://avatars.mds.yandex.net/i?id=50ba4f8dd3944d456b7b3a0436e696ab7cd8a9c3-9068918-images-thumbs&n=13",
      subitems: [
        { name: 'Vegetable', price: 220 },
        { name: 'Ramen Noodle', price: 220 }
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

  const clearOrder = () => {
    // Clear all order items
    setOrderItems([]);
  };
  return (
    <div>
   {orderItems.length > 0 ? <Order orderItems={orderItems} removeFromOrder={removeFromOrder}  clearorder={clearOrder}/>
 : <> </>}
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
              <ul className=" bg-slate-100 list-none pl-4">
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
