// TradingViewForexWidget.tsx
import { Container } from '@mantine/core';
import React, { useEffect, useRef } from 'react';

const ForexChat = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (containerRef.current) {
        // Check if the script is already present
        if (!document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"]')) {
          const script = document.createElement('script');
          script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
          script.type = 'text/javascript';
          script.async = true;
  
          // Configure the widget
          script.innerHTML = JSON.stringify({
            width: '100%',
            height: '100%',
            currencies: ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD'],
            isTransparent: false,
            colorTheme: 'light',
            locale: 'en',
            backgroundColor: '#ffffff',
          });
  
          containerRef.current.appendChild(script);
        }
      }
    }, []);
  
    return (
        <Container style={{ height: '70vh', padding: 0 }} my={50}>
            <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"> </div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
        </Container>
      
  );
};

export default ForexChat;
