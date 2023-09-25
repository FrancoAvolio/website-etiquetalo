import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-36 right-10 z-50">
      {isVisible && (
        <button
          className="bg-black hover:bg-gray-900 rounded-full p-3"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} color="white" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
