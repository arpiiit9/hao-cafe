import React, { useState } from 'react';
import Order from './Order';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const addictedMenuData = {
  category: 'Addicted',
  items: [
    {
      name: 'Shake',
      price: 100,
      image:"https://avatars.mds.yandex.net/i?id=11dbeb468b971a7dcbfc72b2524f15ee1867d8d8-4264797-images-thumbs&n=13",
      subitems: [
        { name: 'Banana', price: 100 },
        { name: 'Mango', price: 100 },
        { name: 'Strawberry', price: 100 },
        { name: 'Butterscotch', price: 100 },
        { name: 'Chocolate', price: 120 },
        { name: 'Oreo', price: 120 },
        { name: 'Kitkat', price: 130 },
        { name: 'Brownie', price: 150 },
        { name: 'Blueberry', price: 150 },
        { name: 'Blackcurrant', price: 150 },
        { name: 'Giant Brownie joy', price: 200 },
        { name: 'Add-on: Ice Cream', price: 30 }
      ]
    },
    {
      name: 'Mocktail',
      price: 150,
      image:"https://avatars.mds.yandex.net/i?id=f9f3082dc2a469f0101548383dffdf72add0bc73-3872711-images-thumbs&n=13",
      subitems: [
        { name: 'Mojitos', price: 120 },
        { name: 'Kaccha Aam', price: 120 },
        { name: 'Strawberry', price: 120 },
        { name: 'Watermelon', price: 120 },
        { name: 'Litchi', price: 120 },
        { name: 'Blackcurrant', price: 120 },
        { name: 'Blueberry', price: 120 },
        { name: 'Virgin ', price: 120 },
        { name: 'Green Mint', price: 120 },
        { name: 'Blue Curacao', price: 150 },
        { name: 'Flirty Grenadine', price: 150 },
        { name: 'Sexy Peach', price: 150 }
      ]
    },
    {
      name: 'Ice Tea',
      price: 200,
      image:"https://avatars.mds.yandex.net/i?id=4a0d4c098d3890b576909724d087a7e3-4034027-images-thumbs&n=13",
      subitems: [
        { name: 'Lemon', price: 100 },
        { name: 'Blueberry', price: 100 },
        { name: 'Blackcurrant', price: 100 },
        { name: 'Watermelon', price: 100 }  
      ]
    },
    {
      name: 'Hot Chocolate',
      price: 120,
      image:"https://avatars.mds.yandex.net/i?id=f9a4ed9eb6d51fff1deb7b1d8e3c81f49063947a-12400592-images-thumbs&n=13",
    },
    {
      name: 'Tea',
      price: 30,
      image:"https://avatars.mds.yandex.net/i?id=e3ef334da97dfbc1e10652360fab6d3cecc99e33-9145716-images-thumbs&n=13",
      subitems: [
        { name: 'Chocolate', price: 25 },
        { name: 'Masala', price: 30 },
        { name: 'Ginger', price: 30 },
        { name: 'Elaichi', price: 30 },
        { name: 'Black', price: 30 },
        { name: 'Green', price: 40 }
      ]
    },
    {
      name: 'Hot Coffee',
      price: 100,
      image:"https://yandex-images.clstorage.net/vF5c3Q183/6d0dfe5LjAVb/BTjhjCunTPenNRBhbkOQTJPDRsR74eKwQ_dQybIZ9zwhcFR-Z9kgg8LXi8jefoC3vVA6pJIK2l3DF6J6imwBW3FsJbg6EomDxsGEoR7T0bgiF8bACiTCATJHYHjn-TL5ERYnrCCuFuFUwByv2apQ90hAK3XnD2reFeO0a90cJUn0a6PePBQ_9ZJFwPG8M2FKgCNW4esXUnClFQA6sgkmLqY1hv5TruejxzAMLZorEeTaU-jCF12K74SVlkrNHlaaNttRLW2E3bXxZkCBfDEBCpFiF2EKRxKgNKewKtNIpK4WFpV-oNwkIjXSfq24GfC0-xBbkgcfWG7HVdcYr402eIYp082d5OynAZZwAp1BY6hTAgehyeTyoqQVEvqi2VZOtYbnXNOehEImki9-Shrjh1pwmrKnTrhNNbYUeP-slsi1OBAP_zQd1CCGciP-E4P5I0JEItrkAlK0Z4LJMTi2LtblpH5D3iVyJLLeb8gaQreYwuhTd325P6T1V9m8X0a5RmtjP4-3fmYx5NNwLjEAqMBgZ8OIVQOCpmUSuXMbBq5VhffNsm1EAoXz7445q1AWOkCqYKUNGN5ntiXLLO6U6XZZk91P1I_G0cRS8T8RUFoRY9bD2UZBg3dlQlrQ25ZdNzaFzWKcJJC1Yx5NyQuAxKtBaNI1bIiuZRfFum0-5nqXGhAPr3XdlqGEkVMtg4Co8nC18BnWcgNGF_G7YXqFjaSHBV9xHqQjNGMN7TvI8maZMQmRl13o3sZ2t_otzpQp10uzv05mntRx5uDAnrOheLBgBfG7FVMCxoQjKQMLtZ0kB0S9E60ncMci_07L6lLE6jIao_UuuH7kVCVaXR8ESzXbcdyd5-ymM0TBE38DkuqT8Vdw2kczsOR0AkkC6If9VuanfzAe5EPWkr3MKEiBtekwG3OGr1iv9MdUWY4PNXi02IJtDnQMhYDFAfE-wSMY0zHUA9o3UqGnZBB70",
      subitems: [
        { name: 'Instant', price: 40 },
        { name: 'Espresso', price: 50 },
        { name: 'Latte', price: 100 },
        { name: 'Americano', price: 100 },
        { name: 'Cappuccino', price: 100 },
        { name: 'Mocha', price: 100 }
      ]
    },
    {
      name: 'Cold Coffee',
      price: 100,
      image:"https://avatars.mds.yandex.net/i?id=44f2aa0219bf94b2f128fb8cb485ac09b09b2e4c-9233261-images-thumbs&n=13",
      subitems: [
        { name: 'Classic', price: 100 },
        { name: 'Hazelnut', price: 120 },
        { name: 'Butterscotch', price: 120 },
        { name: 'Vanilla', price: 120 },
        { name: 'Roasted coffe beans', price: 150 },
        { name: 'Add-on: Chocolate ', price: 20 },
        { name: 'Add-on: Ice Cream', price: 30 },
        { name: 'Add-on: Brownie', price: 50 }
      ]
    },
    {
      name: 'Slushy',
      price: 120,
      image:"https://i.pinimg.com/originals/9f/13/87/9f13878fdb06bea405d93d8887bce68c.jpg",
      subitems: [
        { name: 'Mango', price: 120 },
        { name: 'Kaccha Aam', price: 120 },
        { name: 'Strawberry', price: 120 },
        { name: 'Litchi', price: 120 },
        { name: 'Watermelon', price: 120 },
        { name: 'Blackcurrant', price: 120 },
        { name: 'Blueberry', price: 120 },
        { name: 'Orange', price: 120 }
      ]
    }
  ]
};




    const Addicted = () => {
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
        // Load order items from localStorage when component mounts
        const storedOrderItems = JSON.parse(localStorage.getItem('orderItems'));
        console.log('Stored order items:', storedOrderItems);
        if (storedOrderItems) {
          setOrderItems(storedOrderItems);
        }
      }, []);
      
      useEffect(() => {
        // Save order items to localStorage whenever it changes
        localStorage.setItem('orderItems', JSON.stringify(orderItems));
        console.log('Order items saved to localStorage:', orderItems);
      
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
          {addictedMenuData.items.map((item) => (
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
                <ul className="  bg-slate-100  list-none pl-4">
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
      </div>
    );
  };
  
  export default Addicted;
  
