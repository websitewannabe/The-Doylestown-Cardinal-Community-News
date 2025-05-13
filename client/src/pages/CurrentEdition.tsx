
import React from 'react';

const CurrentEdition = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-charcoal-gray mb-8 text-center">
          This Month's Edition
        </h1>

        <div className="w-full aspect-[4/3] md:aspect-[16/9]">
          <iframe
            src="https://online.fliphtml5.com/onuot/wqtv/"
            title="The Doylestown Cardinal - Flipbook"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CurrentEdition;
