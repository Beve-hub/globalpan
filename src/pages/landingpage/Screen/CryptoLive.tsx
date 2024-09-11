import { Text } from '@mantine/core';
import React, { useEffect, useRef } from 'react';

const CryptoLive = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
if (!containerRef.current) {return;}

    // Check if the script is already added to avoid re-adding it
    const scriptId = 'gecko-coin-heatmap-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://widgets.coingecko.com/gecko-coin-heatmap-widget.js';
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Optionally clean up the script if necessary
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div style={{ paddingTop: 50,paddingBottom: 40, marginTop: 40, backgroundColor: '#F2F2F2' }}>
      <div style={{ display: 'grid', justifyContent: 'center', padding: '0 1rem' }}>
        <Text fw={700} fz={{ base: 18, sm: 20 }} style={{textAlign:'center'}}>
          Crypto Market
        </Text>
        <Text fw={700} fz={{ base: 22, sm: 26 }} style={{ color: '#293991', textAlign: 'center', margin: '10px 0' }}>
          Understanding The Crypto Market
        </Text>
        <Text fz={{ base: 15, sm: 17 }} style={{ display: 'block', margin: '0 auto', color: '#121212', textAlign: 'center', marginBottom:30 }}>
          Get updated in learning about the activities of the crypto currency market.
        </Text>
      </div>
      <div ref={containerRef}>
      {/* Render the widget element */}
      <gecko-coin-heatmap-widget locale="en" top="100"> </gecko-coin-heatmap-widget>
    </div>
    </div>
    
  );
};

export default CryptoLive;
