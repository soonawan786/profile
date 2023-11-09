import React from "react";

const TitleCard = ({ cardData }) => {
  return (
    <div className="flex justify-center mb-3">
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div dangerouslySetInnerHTML={{ __html: cardData }} />
      </div>
    </div>
  );
};

export default TitleCard;
