import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-black flex flex-col items-center justify-center h-screen">
          <h1 className="text-blue-50 text-xl font-normal mb-1">Welcome to </h1> <h1 className='text-blue-50 text-4xl font-bold mb-4'>HAO!</h1>
          <div className="w-64 h-1 bg-gray-200 rounded-full">
            <div className="h-full bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      ) : (
        <>
         
        </>
      )}
    </>
  );
};

export default LoadingScreen;
