import React, { useState } from "react";
import MapPopup, { type MarkerData } from "./MapPopup";

interface MapButtonProps {
  markers: MarkerData[];
  title?: string;
  buttonText?: string;
}

const MapButton: React.FC<MapButtonProps> = ({
  markers,
  title = "Tradies Map",
  buttonText = "Map",
}) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setShowMap(true)}
        className="bg-accent-purple p-1 text-white  shadow-sm focus:shadow-md transition"
      >
        {buttonText}
      </button>

      {/* Modal */}
      {showMap && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center z-[60]"
          onClick={() => setShowMap(false)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()} // stop modal close on inside click
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button
                onClick={() => setShowMap(false)}
                className="px-3 py-1 bg-accent-purple text-white rounded hover:bg-accent-purple/80"
              >
                Close
              </button>
            </div>

            {/* Map */}
            <MapPopup
              markers={markers}
              onMarkerClick={(marker) => {
                console.log("Clicked marker:", marker);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MapButton;