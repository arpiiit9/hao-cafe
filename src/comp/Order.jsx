/*import React from 'react';

const Order = ({ orderItems }) => {
  // Calculate the total price of all items in the order
  const totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: ₹{item.price}</div>
          </li>
        ))}
      </ul>
      <div>Total Price: ₹{totalPrice}</div>
    </div>
  );
};

export default Order;*/ 
/*import React from 'react';

const Order = ({ orderItems }) => {
  // Create a map to count the quantity of each item in the order
  const itemCountMap = orderItems.reduce((map, item) => {
    map[item.name] = (map[item.name] || 0) + item.quantity;
    return map;
  }, {});

  // Calculate the total price of all items in the order
  const totalPrice = orderItems.reduce((acc, item) => acc + item.price , 0);

  // Function to send order via WhatsApp
  const sendOrderViaWhatsApp = () => {
    // Construct the message with order details
    const message = `Hey i love to have this 😊 Order Summary:%0A${orderItems.map(item => `${item.name} - Quantity: ${item.quantity}`).join('%0A')}%0ATotal Price: ₹${totalPrice}`;

    // Open WhatsApp with the message
    window.open(`https://wa.me/+918770942365?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{item.name}</div>
              {itemCountMap[item.name] > 1 && (
                <div className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-md">
                  {itemCountMap[item.name]}
                </div>
              )}
            </div>
            <div>Price: ₹{item.price}</div>
            <div>Quantity: {item.quantity}</div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <div className="font-semibold">Total Price:</div>
        <div>₹{totalPrice}</div>
      </div>
      <button
        onClick={sendOrderViaWhatsApp}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Order via WhatsApp
      </button>
    </div>
  );
};

export default Order;*/
/*import React from 'react';

const Order = ({ orderItems, removeFromOrder }) => {
  // Create a map to count the quantity of each item in the order
  const itemCountMap = orderItems.reduce((map, item) => {
    map[item.name] = (map[item.name] || 0) + item.quantity;
    return map;
  }, {});

  // Calculate the total price of all items in the order
  const totalPrice = orderItems.reduce((acc, item) => acc + item.price , 0);

  // Function to send order via WhatsApp
  const sendOrderViaWhatsApp = () => {
    // Construct the message with order details
    const message = `Hey i love to have this 😊 Order Summary:%0A${orderItems.map(item => `${item.name} - Quantity: ${item.quantity}`).join('%0A')}%0ATotal Price: ₹${totalPrice}`;

    // Open WhatsApp with the message
    window.open(`https://wa.me/+918770942365?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{item.name}</div>
              {itemCountMap[item.name] > 1 && (
                <div className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-md">
                  {itemCountMap[item.name]}
                </div>
              )}
            </div>
            <div>Price: ₹{item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button
              className="mt-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors"
              onClick={() => removeFromOrder(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <div className="font-semibold">Total Price:</div>
        <div>₹{totalPrice}</div>
      </div>
      <button
        onClick={sendOrderViaWhatsApp}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Order via WhatsApp
      </button>
    </div>
  );
};

export default Order;*/

import React from 'react';

const Order = ({ orderItems, removeFromOrder }) => {

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
    <div className=" bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul>
        {orderItems.map(item => (
          <li key={item.name} className="mb-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{item.name}</div>
              {itemCountMap[item.name] > 1 && (
                <div className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-md">
                  {itemCountMap[item.name]}
                </div>
              )}
            </div>
            <div>Price: ₹{item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button
              className="mt-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors"
              onClick={() => removeFromOrder(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <div className="font-semibold">Total Price:</div>
        <div>₹{totalPrice}</div>
      </div>
      <button
        onClick={sendOrderViaWhatsApp}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Order via WhatsApp
      </button>
    </div>
  );
};

export default Order;



