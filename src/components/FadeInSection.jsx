import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const cachedRef = domRef.current;
    if (!cachedRef) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    }, {
      rootMargin: '0px',
      threshold: 0.15
    });

    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
