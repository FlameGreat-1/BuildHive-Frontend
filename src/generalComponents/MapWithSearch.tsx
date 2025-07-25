/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

type Location = {
  name: string;
  lat: number;
  lon: number;
};

type Props = {
  locations: Location[];
  setLocations: (locations: Location[]) => void;
};

const MapWithSearch: React.FC<Props> = ({ locations, setLocations }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Location[]>([]);
  // const [error, setError] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=0dbd3b148a5243bb9fbfa9cb5626a400&limit=20`
      );
      const data = await res.json();

      if (data && data.results) {
        setResults(
          data.results.map((item: any) => ({
            name: item.formatted,
            lat: item.geometry.lat,
            lon: item.geometry.lng,
          }))
        );
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const addLocation = (loc: Location) => {
    if (!locations.find((l) => l.name === loc.name)) {
      setLocations([...locations, loc]);
      setQuery('');
      setResults([]);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="absolute top-2 left-1/2 -translate-x-1/2 z-[999] bg-white px-4 py-2 rounded-full shadow-md w-3/4"
        placeholder="Search for a location"
      />

      <ul className="absolute top-14 left-1/2 -translate-x-1/2 z-[999] bg-white shadow rounded w-3/4 max-h-48 overflow-y-auto">
        {results.map((loc, idx) => (
          <li
            key={idx}
            onClick={() => addLocation(loc)}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {loc.name}
          </li>
        ))}
      </ul>

      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={6}
        scrollWheelZoom={false}
        zoomControl={false}
        className="min-h-[300px] border border-gray-300 h-full max-h-[400px] w-full mt-8 z-0"
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {locations.map((loc, idx) => (
          <Marker
            key={idx}
            position={[loc.lat, loc.lon]}
            icon={L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
          />
        ))}
      </MapContainer>

      <div className="mt-4 px-2">
        <h2 className="font-semibold mb-2">Locations Added</h2>
        
        {locations.length === 0 ? (
          <p className="text-red-500">No location added</p>
        ) : (
          <motion.ul 
          layout 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className='flex flex-wrap gap-2 list-none p-0 m-0'
          >
            {locations.map((loc, idx) => (
              <motion.li
               key={idx} 
               layout
               className="bg-[#F3EAEA] rounded-md  p-2 text-sm">
                {loc.name}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default MapWithSearch;
