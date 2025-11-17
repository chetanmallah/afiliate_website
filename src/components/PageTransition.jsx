import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const location = useLocation();

  useEffect(() => {
    setTransitionStage('fadeOut');
  }, [location]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [transitionStage, children]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {displayChildren}
    </div>
  );
}
