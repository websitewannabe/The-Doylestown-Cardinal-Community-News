
import React from 'react';

const LocationsMap = () => {
  return (
    <div className="w-full">
      <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1JJ9265E4d8kqhwHQe0JlLzh6H5OB3_s&ehbc=2E312F"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-sm text-charcoal-gray/70 mt-2">
        Find The Cardinal at various distribution points throughout New Hope and Lambertville
      </p>
    </div>
  );
};

export default LocationsMap;
