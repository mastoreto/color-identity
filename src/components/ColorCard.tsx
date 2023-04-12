import React from "react";

interface ColorCardProps {
    colorName: string;
    colorHex: string;
}

const ColorCard: React.FC<ColorCardProps> = ({colorName, colorHex}) => {
  return (
    <div className="h-60 w-40 mx-5">
      <div className="h-4/6 rounded-t-xl" style={{backgroundColor: `${colorHex}`}}></div>
      <div className="h-2/6 rounded-b-xl bg-white p-3">
        <p className="text-sm font-semibold">{colorName}</p>
        <p className="text-sm font-semibold">{colorHex}</p>
      </div>
    </div>
  );
};

export default ColorCard;
