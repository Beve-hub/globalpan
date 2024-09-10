import IMG1 from '@/asset/hero_image 1.png'
import IMG2 from '@/asset/hero_image 2.png'
import Icon1 from '@/asset/icon1.png'
import Icon2 from '@/asset/icon2.png'
import Icon3 from '@/asset/icon3.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
interface NavbarItem {
    name: string;
    path: string;
    
}
interface PlanItem {
   name: string;
   range: string;
   profit: string;
   icon: React.ReactNode;
   mini: string;
   max: string;
   desc: string;
   referral: string;
}

interface CardItem{
   image: string;
   title: string;
   desc: string
}

export interface HeroFontItem {
   id: number;
   title: string;
   description: string;
   image: string
}
export const NavData: NavbarItem[] = [
 {
    name: 'Home',
    path: '/',
    
 },
 {
    name: 'About',
    path: '/about',
    
 },
 {
    name: 'Investment',
    path: '/investment',
    
 },
 {
    name: 'Our Team',
    path: '/team',

 },
 {
    name: 'Contact',
    path: '/contact',

 },
]
export const SmNavData: NavbarItem[] = [
    {
       name: 'Home',
       path: '/',
       
    },
    {
       name: 'About',
       path: '/about',
       
    },
    {
       name: 'Investment',
       path: '/investment',
       
    },
    {
       name: 'Our Team',
       path: '/team',
   
    },
    {
       name: 'Contact',
       path: '/contact',
   
    },
    {
        name: 'Login',
        path: '/login',
    
     }
   ]

   export const heroFont: HeroFontItem[]= [
      {
        id: 1,
        image: IMG1,
        title: 'Get a Smart Way For Your Business',
        description:
          'World Crypto & Forex Trading Platform, Invest & Earn Massive with our platform. We deliver Worldwide! Join Us now & Cheers to your Financial freedom.',
      },      
      {
        id: 2,
        image: IMG2,
        title: 'Daily Trading Profit',
        description:
          'Our team is made up of trading and financial experts who will help you navigate the trading ecosystem and help you with daily trading profits.',
      },
    ];

    export const CardData: CardItem[] = [
      {
         image: Icon1,
         title: 'Setting your path',
         desc: 'We’re here to back you up with big ideas, practical plans and guidance every step of the way to  reaching your financial goals.',
      },
      {
         image: Icon2,
         title: 'Reliable Protection',
         desc: 'Our analysts and core-traders are experts with extensive experience in the field and know the signals and swings in the market in depth.',
      },
      {
         image: Icon3,
         title: '1/1 expert support',
         desc: 'The easiest investment you will ever make, with our expert support and account officer who is  just one call away to help you in any thing you need.',
      },
    ] 

    export const PlanData: PlanItem[] = [
      {
         name: 'BASIC PLAN',
         range: '$100 - $2000',
         profit: '2% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color='#293991'/>,
         mini: 'Minimum 100 USD',
         max: 'Maximum 2000 USD',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
      {
         name: 'ADVANCE PLAN',
         range: '$2001 - $4000',
         profit: '5% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color='#293991'/>,
         mini: 'Minimum 2001 USD',
         max: 'Maximum 4000 USD',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
      {
         name: 'PROFESSIONAL PLAN',
         range: '$4001 - $10,000',
         profit: '7.5% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color='#293991'/>,
         mini: 'Minimum 4001 USD',
         max: 'Maximum 10,000 USD',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
      {
         name: 'PREMIUM PLAN',
         range: '$10,001 - $unlimited',
         profit: '12.5% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color='#293991'/>,
         mini: 'Minimum 100 USD',
         max: 'Maximum Unlimited',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
    ]