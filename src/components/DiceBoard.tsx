import React, { useCallback, useEffect, useState } from 'react';

function DiceBoard(): React.ReactElement {
  const [dice, setDice] = useState(0);
  const roll = useCallback(
    () => setDice(Math.floor(6 * Math.random()) + 1),
    []
  );
  const [showDice, setShowDice] = useState(true);

  useEffect(() => {
    setShowDice(false);
  }, [dice]);
  useEffect(() => {
    const diceTime = setTimeout(() => {
      setShowDice(true);
    }, 1500);

    return () => clearTimeout(diceTime);
  }, [dice]);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-gray-800">
      <div>
        <button
          type="button"
          className="bg-white border border-black rounded-md hover:bg-gray-400"
          onClick={roll}
        >
          click dice 1
        </button>
        {showDice && <div className="bg-black text-white">{dice}</div>}
      </div>
    </div>
  );
}

export default DiceBoard;
