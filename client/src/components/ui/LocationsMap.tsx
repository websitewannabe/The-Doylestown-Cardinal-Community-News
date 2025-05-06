
import React from 'react';

const LocationsMap = () => {
  return (
    <div className="w-full">
      <h2 className="font-playfair text-2xl font-bold mb-4">Distribution Locations</h2>
      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Distribution Locations Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-75.07124423980714%2C40.36002797619979%2C-74.94421005249025%2C40.37227386086975&amp;layer=mapnik&amp;marker=40.36615380889697%2C-75.00772714614868"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="text-sm text-charcoal-gray/70 mt-2">
        Find The Cardinal at various distribution points throughout New Hope and Lambertville
      </p>
    </div>
  );
};

export default LocationsMap;
