import React from 'react'
import HeroScreen from './HeroScreen';
import AboutUs from './AboutUs';
import ForexChat from './ForexChat';
import Package from './Package';
import Company from './Company';
import CryptoLive from './CryptoLive';
import Started from './Started';
import Testimonia from './Testimonia';
import Support from './Support';
import CardSlide from './CardSlide';
import TradeView from '../TradeView';
import WidthrawalTrend from '../WidthrawalTrend';

interface Props {
    
}

const LandingPage: React.FC<Props> = () => {
    return (
        <div>            
            <HeroScreen />
            <CardSlide/>
           <AboutUs/>
            <ForexChat/>
            <Package/>
            <CryptoLive/>
            <Company/>
            <Started/>
            <Testimonia/>
            <Support/>
            <TradeView/>
            <WidthrawalTrend/>
        </div>
    )
}

export default LandingPage
