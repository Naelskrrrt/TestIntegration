import React from 'react';

const Main = () => {
  return (
    <div className="grid grid-cols-4 gap-4">  {/* Add these classes */}
      <div className="bg-gray-200 p-4">Div 1</div>
      <div className="bg-gray-300 p-4">Div 2</div>
      <div className="bg-gray-400 p-4">Div 3</div>
      <div className="bg-gray-500 p-4">Div 4</div>
    </div>
  );
};

export default Main;
