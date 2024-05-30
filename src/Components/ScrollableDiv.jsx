import React, { useState, useEffect } from 'react';

const ScrollableDiv = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '1000px' }}>
      <div
        style={{
          position: 'fixed',
          top: `${scrollPosition}px`,
          backgroundColor: 'lightblue',
          padding: '10px',
        }}
      >
        This div moves with scroll!
      </div>
      {/* Rest of your content */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius sunt dolorum, commodi recusandae dolorem cumque consequatur accusantium eum! Ex sapiente id incidunt laborum ab, reiciendis numquam neque quos nulla.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere numquam nam beatae quas a, perspiciatis animi esse quis perferendis, vel optio tempore quam recusandae ipsam qui? Voluptate natus minima velit?
    </div>
  );
};

export default ScrollableDiv;
