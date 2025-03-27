import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ServiceMap = ({ farms, serviceProviders }) => {
  return (
    <MapContainer
      center={[21.216200, 76.874300]}
      zoom={16}
      style={{ height: '700px', width: '100%', padding: '100px' }}
      className='top-84 inset-0 flex p-5 justify-center items-center'
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Farm Markers */}
      {farms.map((farm) => (
        <Marker key={farm.id} position={farm.location}>
          <Popup>
            <strong>{farm.farmName}</strong>
            <br />
            Crop Type: {farm.cropType}
            <br />
            Services: {farm.serviceTypes.join(', ')}
          </Popup>
        </Marker>
      ))}
      {/* Service Provider Markers */}
      {serviceProviders.map((provider) => (
        <Marker key={provider.id} position={provider.location}>
          <Popup>
            <strong>{provider.name}</strong>
            <br />
            Service: {provider.serviceType}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ServiceMap;