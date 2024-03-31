import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './comp/Header';
import Hungry from './comp/Hungry';
import Addiction from './comp/Addicted';
import Obsessed from './comp/Obesesd';
import StickyButton from './comp/StickyButton';
import PopupModal from './comp/Popup';
import Notpc from './comp/Notpc';

import LoadingScreen from './comp/Loading';
import Order from './comp/Order';

const App = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  

  
   const addToOrder = (item) => {
    const existingItemIndex = orderItems.findIndex(orderItem => orderItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].quantity++;
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    } }
   

  // Update orderItems with the items from Hungry, Addicted, and Obsessed components

  return (
    
    <Router>
       
      <div>
        <LoadingScreen />
        <Header className="sticky" />
        <Routes>

          <Route path="/" element={<Hungry addToOrder={addToOrder} />} />
          <Route path="/hungry" element={<Hungry addToOrder={addToOrder} />} />
          <Route path="/addicted" element={<Addiction />} />
          <Route path="/obsessed" element={<Obsessed />} />
         
         
         
         
        </Routes>
      
      </div>
    </Router>
  );
}; {
  
}

export default App
