import { useEffect } from 'react';

const useBodyOverflow = (loading: boolean) => {
  useEffect(() => {
    if (loading) {
      // Disable body scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable body scrolling
      document.body.style.overflow = '';
    }

    // Clean up function to reset body overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);
};

export default useBodyOverflow;
