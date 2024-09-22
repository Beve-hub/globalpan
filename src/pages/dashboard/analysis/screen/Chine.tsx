import { Color } from '@/utils/reusable/Theme';
import React, { useEffect, useRef } from 'react';

const Chine = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!containerRef.current) {return;}
  
      // Create a new script element
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
  
      // Set the widget configuration
      script.innerHTML = JSON.stringify({
        symbol: 'FOREXCOM:CNHJPY',
        width: '100%',
        height: '100%',
        locale: 'en',
        dateRange: '12M',
        colorTheme: 'light',
        isTransparent: false,
        autosize: true,
        largeChartUrl: ''
      });
  
      // Append the script to the container
      containerRef.current.appendChild(script);
  
      // Clean up the script on component unmount
      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = ''; // Remove the widget on unmount
        }
      };
    }, []);
  
    return (
      <div className="tradingview-widget-container" ref={containerRef}>
        {/* This div will hold the widget */}
        <div className="tradingview-widget-container__widget" />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span style={{color:Color.WHITE}}>Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    );
}

export default Chine
