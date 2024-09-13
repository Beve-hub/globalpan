import React, { useEffect } from 'react';

const Euro = () => {
    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://c.mql5.com/js/widgets/quotes/widget.js?v=1';
        script.async = true;
        script.type = 'text/javascript';
        script.setAttribute('data-type', 'quotes-widget');
        script.innerHTML = JSON.stringify({
          type: 'chart',
          filter: 'EURUSD',
          period: 'D1',
          width: '100%',
          height: '100%',
          id: 'quotesWidgetChart',
        });
    
    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="quotesWidgetChart" style={{ width: '100%', height: '15rem' }}> </div>;
}

export default Euro
