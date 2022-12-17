import React from 'react';
import DashBoard from './components/DashBoard';
import DiceBoard from './components/DiceBoard';

function Main() {
  return (
    <div className="fixed inset-0 flex bg-gray-50">
      <DashBoard />
      <DiceBoard />
    </div>
  );
}

export default Main;
