import React from 'react';
import Score from './Score';

const NUMBER_LABEL = ['Aces', 'Deuces', 'Threes', 'Fours', 'Fives', 'Sixes'];
const DICE_LABEL = [
  '4 of a Kind',
  'Full House',
  'S. Straight',
  'L. Straight',
  'Yacht',
];

function DashBoard(): React.ReactElement {
  return (
    <div className="p-2">
      <div className="flex flex-col p-2 space-y-4 border border-gray-400">
        <div className="flex flex-col border-2 border-gray-800">
          <Score
            className="bg-gray-400"
            label="Catecories"
            pointA="A"
            pointB="B"
          />
        </div>
        <div className="flex flex-col border-2 border-gray-800">
          {NUMBER_LABEL.map(label => (
            <Score key={label} label={label} pointA="1" pointB="0" />
          ))}
          <Score
            className="bg-gray-500 border-t-2 border-gray-800 text-white"
            label="Subtotal"
          />
        </div>
        <div>Bonus if 1-6 are over 63 points!</div>
        <div className="flex flex-col border-2 border-gray-800">
          <Score label="Choice" />
        </div>
        <div className="flex flex-col border-2 border-gray-800">
          {DICE_LABEL.map(label => (
            <Score key={label} label={label} />
          ))}
          <Score
            className="bg-gray-600 border-t-2 border-gray-800 text-white"
            label="Total"
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
