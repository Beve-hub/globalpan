import React, { useEffect } from 'react';

interface CoinGeckoWidgetProps {
  locale?: string;
  outlined?: boolean;
  initialCurrency?: string;
}

const Bitcoin: React.FC<CoinGeckoWidgetProps> = ({ locale = 'en', outlined = true, initialCurrency = 'usd' }) => {
    useEffect(() => {
      // Dynamically load the script
      const script = document.createElement('script');
      script.src = 'https://widgets.coingecko.com/gecko-coin-price-chart-widget.js';
      script.async = true;
      document.body.appendChild(script);
  
      // Cleanup the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<gecko-coin-price-chart-widget locale="${locale}" outlined="${outlined}" initial-currency="${initialCurrency}"></gecko-coin-price-chart-widget>`,
        }}
      />
    );
}

export default Bitcoin;
