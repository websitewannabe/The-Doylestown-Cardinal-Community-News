import React from 'react';

const LocationsMap = () => {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <iframe 
        src="https://www.openstreetmap.org/export/embed.html?bbox=-74.97097015380861%2C40.35784938664911%2C-74.93114471435547%2C40.37009169297595&amp;layer=mapnik"
        className="w-full h-full border-0"
        title="Map of New Hope"
      />
    </div>
  );
};

export default LocationsMap;