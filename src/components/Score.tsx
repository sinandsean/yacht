import React from 'react';
import clsx from 'clsx';

function Score({
  className,
  label,
  pointA,
  pointB,
}: {
  className?: string;
  label: string;
  pointA?: string;
  pointB?: string;
}): React.ReactElement {
  return (
    <div
      className={clsx(
        'h-12 flex items-center border border-gray-800 dividex divide-gray-800',
        className
      )}
    >
      <div className="w-28 p-2">{label}</div>
      <div className="w-0.5 h-full bg-gray-800" />
      <div className="w-14 h-full flex justify-center items-center bg-yellow-300 text-center text-2xl font-bold">
        {pointA}
      </div>
      <div className="w-0.5 h-full flex justify-center items-center bg-gray-800" />
      <div className="w-14 h-full flex justify-center items-center text-center text-2xl font-bold">
        {pointB}
      </div>
    </div>
  );
}

export default Score;
