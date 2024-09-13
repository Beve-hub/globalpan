import React, { useEffect, useRef } from 'react';


const Usdt = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widgets.coingecko.com/gecko-coin-price-chart-widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            dangerouslySetInnerHTML={{
                __html: `
                    <gecko-coin-price-chart-widget
                        locale="en"
                        outlined={true}
                        coin-id="tether"
                        initial-currency="usd">
                    </gecko-coin-price-chart-widget>
                `,
            }}
        />
    );
}

export default Usdt
