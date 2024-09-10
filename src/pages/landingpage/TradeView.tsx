import React, { useEffect, useRef } from 'react';

const TradeView: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en'
    });

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }
  }, []);

  const widgetStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: 30,
    right: '0',
    width: '100rem',
    height: '2rem',
    zIndex: 1000,
    backgroundColor: 'white',
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };
  return (
    <div className="tradingview-widget-container" style={widgetStyles}>
      <div className="tradingview-widget-container__widget" ref={widgetRef}> </div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradeView;
