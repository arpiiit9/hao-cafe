import React from 'react';

const Pc = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">This website is not made for PC</h1>
          <p className="text-lg text-gray-200 mb-8">For the best experience, please visit this website on a mobile device.</p>
        </div>
        <img src="https://i.postimg.cc/Gt0qrpy9/download-1.jpg" alt="PC Image" className="w-1/2 mx-auto block" />
      </div>
    </div>
  );
};

export default Pc;
