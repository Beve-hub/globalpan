import { Color } from '@/utils/reusable/Theme';
import { Container, Text } from '@mantine/core';
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
    <div style={{ paddingTop: 70, marginTop: 40, backgroundColor: Color.WHITE }}>
      <div style={{ display: 'grid', justifyContent: 'center', padding: '0 1rem' }}>
        <Text fw={700} fz={{ base: 18, sm: 20 }} style={{textAlign:'center'}}>
          Forex Market
        </Text>
        <Text fw={700} fz={{ base: 22, sm: 26 }} style={{ color: Color.PRIMARY, textAlign: 'center', margin: '10px 0' }}>
          Stay ahead of the curve
        </Text>
        <Text fz={{ base: 15, sm: 17 }} style={{ display: 'block', margin: '0 auto', color: Color.BLACK, textAlign: 'center' }}>
          Follow the market trends and stay updated on the activities of the market.
        </Text>
      </div>
      <Container style={{ height: '70vh', padding: 0 }} my={{ base: 30, sm: 50 }}>
        <div className="tradingview-widget-container" ref={containerRef} style={{ width: '100%', height: '100%' }}>
          <div className="tradingview-widget-container__widget" style={{ width: '100%', height: '100%' }}> </div>
          <div className="tradingview-widget-copyright" style={{ textAlign: 'center', marginTop: '10px' }}>
            <a href="https://www.tradingview.com/" rel="noreferrer noopener" target="_blank">
              <span style={{color:Color.WHITE}}>Track all markets on TradingView</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForexChat;
