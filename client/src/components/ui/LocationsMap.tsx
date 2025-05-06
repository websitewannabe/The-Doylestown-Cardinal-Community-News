
import React, { useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const LocationsMap = () => {
  const center = { lat: 40.3640, lng: -74.9510 }; // Centered on New Hope, PA
  
  const addresses = [
    '500 Union Square Dr, New Hope, PA 18938',
    '36 W Bridge St, New Hope, PA 18938',
    '12 W Bridge St, New Hope, PA 18938',
    '19 W Bridge St, New Hope, PA 18938',
    '1 W Bridge St, New Hope, PA 18938',
    '30 W Bridge St, New Hope, PA',
    '9 E Bridge St, New Hope, PA 18938',
    '32 S Main St, New Hope, PA',
    '1 N Main St, New Hope, PA',
    '7 N Main St, New Hope, PA',
    '1 N Main St, New Hope, PA',
    '19 N Main St, New Hope, PA',
    '42 N Main St, New Hope, PA',
    '70 S Main St, New Hope, PA',
    '50 S Main St, New Hope, PA',
    '10 W Ferry St, New Hope, PA',
    '15 N Main St, New Hope, PA 18938',
    '45 N Main St, New Hope, PA 18938',
    '14 / 16 S Main St, New Hope, PA 18938',
    '20 S Main St, New Hope, PA 18938',
    '15 S Main St, New Hope, PA 18938',
    '28 W. Bridge street, New Hope, PA',
    '18-20 N Main St, New Hope, PA 18938',
    '8 W Mechanic St, New Hope, PA 18938',
    '12 W Mechanic St, New Hope, PA 18938',
    '5 W Mechanic St, New Hope, PA 18938',
    '1 W Mechanic St, New Hope, PA 18938',
    '87a S Main St, New Hope, PA 18938',
    '115 S Main St # A, New Hope, PA 18938',
    '110 S Main St, New Hope, PA 18938',
    '15 Bridge St, Lambertville, NJ 08530',
    '25 Bridge St, Lambertville, NJ 08530',
    '43 Bridge St, Lambertville, NJ 08530',
    '40 Bridge St, Lambertville, NJ 08530',
    '32 Bridge St, Lambertville, NJ 08530',
    '2 Canal St, Lambertville, NJ 08530',
    '49 N Union St, Lambertville, NJ 08530',
    '52 N Union St, Lambertville, NJ 08530',
    '37 N Union St, Lambertville, NJ 08530',
    '19 N Union St, Lambertville, NJ 08530',
    '42 N Union St, Lambertville, NJ 08530'
  ];

  return (
    <div>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="w-full h-[600px] rounded-lg"
          center={center}
          zoom={14}
        >
          {addresses.map((address, index) => (
            <Marker
              key={index}
              position={center} // This will be updated with geocoded positions
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationsMap;
