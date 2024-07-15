import React, { useState } from 'react';

const LazyImageWithPlaceholder = ({ src, alt, placeholder, width, height }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width, height }}>
      {!loaded && (
        <img
          src={placeholder}
          alt="placeholder"
         
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          // display: loaded ? 'block' : 'none',
          // width: '100%',
          // height: 'auto',
        }}
      />
    </div>
  );
};

export default LazyImageWithPlaceholder;
