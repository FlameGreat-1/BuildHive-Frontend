import React from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { Triangle } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
import "leaflet/dist/leaflet.css";

// Create custom icon from Lucide Triangle
const createIcon = (color: string) =>
  L.divIcon({
    html: renderToStaticMarkup(
      <Triangle
        className="w-4 h-4 rotate-180" // bigger + point downward
        style={{ color }}
        fill={color}
      />
    ),
    className: "",
    iconSize: [24, 24], // matches w-6 h-6
    iconAnchor: [12, 12], // center icon
  });

export interface MarkerData {
  id: string;
  position: [number, number];
  status: "available" | "busy";
  link?: string;
}

interface MapPopupProps {
  markers: MarkerData[];
  onMarkerClick?: (marker: MarkerData) => void;
}

const MapPopup: React.FC<MapPopupProps> = ({ markers, onMarkerClick }) => {
  return (
    <MapContainer
      center={[-31.9505, 115.8605]}
      zoom={10}
      zoomControl={false}
      className="h-[400px] w-full rounded-lg overflow-hidden"
    >
      <ZoomControl position="bottomright" />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers.map((m) => (
        <Marker
          key={m.id}
          position={m.position}
          icon={createIcon(m.status === "available" ? "green" : "yellow")}
          eventHandlers={{
            click: () => {
              if (m.link) {
                window.location.href = m.link;
              }
              if (onMarkerClick) {
                onMarkerClick(m);
              }
            },
          }}
        >
          <Popup>
            <div className="text-sm">
              <p>
                <strong>Status:</strong> {m.status}
              </p>
              {m.link && (
                <a
                  href={m.link}
                  className="text-blue-600 hover:underline"
                >
                  View Details
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPopup;