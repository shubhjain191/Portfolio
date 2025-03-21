import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollRatio: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      
      setScrollPosition({
        scrollY: window.scrollY,
        scrollRatio: scrollRatio,
      });
    };

    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}

export function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -100px 0px', threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return activeSection;
}