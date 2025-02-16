import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop();
  }, [pathname]);
};

export default useScrollToTop;
