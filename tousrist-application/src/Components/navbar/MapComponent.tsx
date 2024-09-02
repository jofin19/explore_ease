import React, { useState, useEffect } from 'react';
import countiesOfIreland from '@/Shared/Counties';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

// Defining the coordinates for each county
const countyCoordinates: { [key: string]: LatLngExpression } = {
  "Carlow": [52.8408, -6.9261],
  "Cavan": [53.9908, -7.3633],
  "Clare": [52.8435, -8.9806],
  "Cork": [51.8985, -8.4756],
  "Donegal": [54.6538, -8.1096],
  "Dublin": [53.3498, -6.2603],
  "Galway": [53.2707, -9.0568],
  "Kerry": [52.1545, -9.5669],
  "Kildare": [53.1581, -6.9118],
  "Kilkenny": [52.6541, -7.2448],
  "Laois": [53.0326, -7.3000],
  "Leitrim": [54.0277, -8.0468],
  "Limerick": [52.6680, -8.6305],
  "Longford": [53.7274, -7.7936],
  "Louth": [53.9574, -6.5442],
  "Mayo": [53.7854, -9.3154],
  "Meath": [53.6056, -6.6556],
  "Monaghan": [54.2505, -6.9689],
  "Offaly": [53.2765, -7.4937],
  "Roscommon": [53.7597, -8.2056],
  "Sligo": [54.2697, -8.4694],
  "Tipperary": [52.4731, -8.1618],
  "Waterford": [52.2593, -7.1101],
  "Westmeath": [53.5340, -7.3387],
  "Wexford": [52.3342, -6.4575],
  "Wicklow": [52.9862, -6.3673],
};

// Component to change the map view on selecting a county
const ChangeMapView: React.FC<{ center: LatLngExpression; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

// Main component to display counties and map
const MapComponent: React.FC = () => {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  const handleCountyClick = (countyName: string) => {
    setSelectedCounty(countyName);
  };

  const getCoordinates = (countyName: string): LatLngExpression => {
    return countyCoordinates[countyName] || [53.4129, -8.2439]; // Default to center of Ireland
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-row lg:space-x-8 md:space-x-8 p-4 mt-10 mb-10">
      {/* Left Side: List of Counties */}
      <div className="lg:w-1/3 md:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">Counties of Ireland</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {countiesOfIreland.map((county, index) => (
            <div
              key={index}
              className="relative py-2 cursor-pointer text-primary-500 bg-gray-100 p-2 rounded shadow-sm hover:bg-primary-100"
              onClick={() => handleCountyClick(county.name)}
            >
              {county.name}
              {county.name === selectedCounty && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 p-2 bg-white border border-gray-300 rounded shadow-lg text-sm z-10">
                  {countiesOfIreland.find(c => c.name === county.name)?.description || "No description available."}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Map */}
      <div className="lg:w-2/3 md:w-2/3 flex justify-center items-center">
        <MapContainer center={[53.4129, -8.2439]} zoom={6} style={{ height: '500px', width: '100%', zIndex: 1 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {selectedCounty && (
            <>
              <ChangeMapView center={getCoordinates(selectedCounty)} zoom={10} />
              <Marker position={getCoordinates(selectedCounty)}>
                <Popup>{selectedCounty}</Popup>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
