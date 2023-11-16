import React from "react";
import parse from "html-react-parser";
import { Alert } from "react-bootstrap";

const TitleCard = ({ cardData }) => {
  return (
    <div className="flex justify-center mb-3">
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        {cardData && Object.keys(cardData).length > 0 ? (
          <div>{parse(cardData || "<p>(will update soon)</p>")}</div>
        ) : (
          <>
            {["warning"].map((variant) => (
              <Alert key={variant} variant={variant} className="w-full">
                No Data Found!
              </Alert>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TitleCard;
