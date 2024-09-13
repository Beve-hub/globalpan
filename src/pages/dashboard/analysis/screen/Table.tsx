import React, { useEffect, useRef } from 'react';

const Table = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically create the script tag
    const script = document.createElement('script');
    script.src = 'https://widgets.coingecko.com/gecko-coin-list-widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{
        __html: `<gecko-coin-list-widget
          locale="en"
          outlined="true"
          coin-ids="ai-companions,dogs-2,solana,maga,bitcoin,tether,tectum,ripple,cardano,the-open-network,tron,wen-4"
          initial-currency="usd"
        ></gecko-coin-list-widget>`,
      }}
    />
  );
};

export default Table;
