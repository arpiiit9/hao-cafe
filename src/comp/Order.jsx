

import React from 'react';

const Order = ({ orderItems, removeFromOrder,clearorder }) => {

  const itemCountMap = orderItems.reduce((map, item) =>
   {
    map[item.name] = (map[item.name] || 0) + item.quantity;
    return map;
  }, {});

  const totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const sendOrderViaWhatsApp = () => {
    const message = `Hey i love to have this 😊 Order Summary:%0A${orderItems.map(item => `${item.name} - Quantity: ${item.quantity}`).join('%0A')}%0ATotal Price: ₹${totalPrice}`;
    window.open(`https://wa.me/+918770942365?text=${message}`, '_blank');
  };

  return (
    <div className=" bg-slate-50 shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4 border-b-2 border-slate-300" >Order Summary</h2>
      <ul>
        {orderItems.map(item => (
          <li key={item.name} className=" border-b-2 border-slate-300 mb-4 ">
            <div className="flex justify-between items-center">
              <div className="  font-semibold">{item.name}</div>
              <div className='flex justify-end'>
              <button
              className=" rotate-90 mt-2  text-gray-700 font-bold px-2 py-1  hover:bg-black transition-colors"
              onClick={() => removeFromOrder(item.name)}
            >
             |
            </button>
              {itemCountMap[item.name] > 0 && (
                
                <div className=" ml-2 bg-blue-100 rounded-md text-black px-2 py-1 ">
                  {itemCountMap[item.name]}
                </div>
              )}
              </div>
            </div>
            <div>Price: ₹{item.price}</div>
           
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <div className="font-semibold">Total Price:</div>
        <div>₹{totalPrice}</div>
      </div>
      <div className='w-full flex justify-center'>
      <button
        onClick={sendOrderViaWhatsApp}
        className="mt-6   bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Order via WhatsApp
      </button>
      </div>
      
    </div>
  );
};

export default Order;






