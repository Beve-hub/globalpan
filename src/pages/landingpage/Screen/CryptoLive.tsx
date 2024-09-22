import { Color } from '@/utils/reusable/Theme';
import { Text } from '@mantine/core';
import React, { useEffect} from 'react';

interface CryptoHeatmapProps {
  
  width?: string;
  height?: string;
}
const CryptoLive: React.FC = ({ width = '100%', height = '580px' }:CryptoHeatmapProps) => {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = 'https://cryptorank.io/widget/market-state.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div style={{ paddingTop: 50, paddingBottom: 40, marginTop: 40, backgroundColor: Color.LIGHT_GRAY }}>
      <div style={{ display: 'grid', justifyContent: 'center', padding: '0 1rem' }}>
        <Text fw={700} fz={{ base: 18, sm: 20 }} style={{ textAlign: 'center' }}>
          Crypto Market Heat Map
        </Text>
        <Text fw={700} fz={{ base: 22, sm: 26 }} style={{ color: Color.PRIMARY, textAlign: 'center', margin: '10px 0' }}>
          Understanding The Crypto Market
        </Text>
        <Text fz={{ base: 15, sm: 17 }} style={{ display: 'block', margin: '0 auto', color: Color.BLACK, textAlign: 'center', marginBottom: 30 }}>
          Get updated in learning about the activities of the cryptocurrency market.
        </Text>
      </div>
      <div
      className="cr-heatmap-widget"
      data-top="100"
      data-site-url="https://cryptorank.io"
      data-api-url="https://api.cryptorank.io/v0"
      data-range="24H"
      data-order="cap"
      style={{ width, height }}
    >
      <a target="_blank" rel="noopener noreferrer" href="https://cryptorank.io/heatmaps" style={{color:Color.LIGHT_GRAY}}>
        Market State by Cryptorank
      </a>
    </div>
    </div>
  );
};

export default CryptoLive;
