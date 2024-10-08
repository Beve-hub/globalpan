import IMG1 from '@/asset/hero_image 1.png'
import IMG2 from '@/asset/hero_image 2.png'
import IMG3 from '@/asset/logobg.png'
import Icon1 from '@/asset/icon1.png'
import Icon2 from '@/asset/icon2.png'
import Icon3 from '@/asset/icon3.png'
import Test1 from '@/asset/andrew.png'
import Test2 from '@/asset/andrew4.png'
import Test3 from '@/asset/andrew2.png'
import Test4 from '@/asset/andrew3.png'
import Test5 from '@/asset/andrew5.png'
import { BiSolidDashboard } from "react-icons/bi";
import { FaMoneyBills,FaCreditCard,FaGift  } from "react-icons/fa6";
import { GiHistogram } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline, IoMdSettings } from 'react-icons/io'
import { RiShieldUserFill } from "react-icons/ri";
import { Color } from '../reusable/Theme'

interface SideBarItem {
    name: string;
    path: string;
    icon: React.ReactNode;
}
interface NavbarItem {
   name: string;
   path: string;
}
interface ServiceItem {
   mini: string;
   icon: React.ReactNode;
}
interface TestimoniaItem{
   name:string;
   desc: string;
   image: string;
}
interface WithrawalTestItem{
   name:string; 
   country:string;  
   amount: number;
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
export const SideBarData: SideBarItem[] = [
   {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <BiSolidDashboard size={18} />,
   },
   {
      name: 'Make Deposit',
      path: '/invest',
      icon: <FaGift size={18} />,
   },
   {
      name: 'Withdraw',
      path: '/withdraw',
      icon: <FaMoneyBills size={18} />,
   },
   {
      name: 'Analysis',
      path: '/analysis',
      icon: <GiHistogram size={18} />,
   },
   {
      name: 'Transaction',
      path: '/transaction',
      icon: <FaCreditCard size={18} />,
   },  
   {
      name: 'Settings',
      path: '/settings',
      icon: <IoMdSettings  size={18} />,
   },
   {
      name: 'Admin',
      path: '/admin',
      icon: <RiShieldUserFill size={18} />,
   }, 
  ]
 
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
        title: 'Global Markets at Your Fingertips',
        description:
          'World Crypto & Forex Trading Platform, Invest & Earn Massive with our platform. We deliver Worldwide! Join Us now & Cheers to your Financial freedom.',
      },      
      {
        id: 2,
        image: IMG2,
        title: 'Trade Forex with Confidence',
        description:
          'Get an easy-to-use platform, expert trade ideas and friendly support as standard. Access 40,000+ instruments – across asset classes – to trade, hedge and invest from a single account.',
      },        
      {
        id: 3,
        image: IMG3,
        title: 'Elevate your portfolio',
        description:
          'Bring your trading ventures go around the world, beyond the space of your investment.Tap into the markets and explore endless trading opportunities with tight spreads and no commission.',
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

    export const serviceData: ServiceItem[] = [
      {        
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Forex & Crypto Trading Strategies',         
      },
      {        
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Instatnt E-currency Deposit',         
      },
      {        
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Investment Portfolio',         
      },
      {        
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Crypto Loan',         
      },
      {        
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'High Quality Trading Signals',         
      },
      {        
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Mt4, Mt5 | Auto | Copy-Trading',         
      },
      {        
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Crypto AI & Best ForexEA Robot (Software)',         
      },
    ]
    export const PlanData: PlanItem[] = [
      {
         name: 'BASIC PLAN',
         range: '$200 - $50,000',
         profit: '2% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Minimum 200 USD',
         max: 'Maximum 50,000 USD',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
      {
         name: 'ADVANCE PLAN',
         range: '$30,000 - $70,000',
         profit: '5% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Minimum 30,000 USD',
         max: 'Maximum 70,000 USD',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
      {
         name: 'PROFESSIONAL PLAN',
         range: '$50,000 -  unlimited',
         profit: '7.5% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Minimum 4001 USD',
         max: 'Maximum  unlimited',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
      {
         name: 'PREMIUM PLAN',
         range: '$80,000 - unlimited',
         profit: '12.5% Daily',
         icon: <IoIosCheckmarkCircleOutline size={24} color={Color.PRIMARY}/>,
         mini: 'Minimum 100 USD',
         max: 'Maximum Unlimited',
         desc: 'instant Withdrawal',
         referral: 'Referral Commission 5%',
      },
    ]

    export const TestimoniaData: TestimoniaItem[] = [
      {
         name:'Andrew O',
         desc:'I have been using the nexcel global Crypto & Forex Trading Platform for over 1 year and have been absolutely thrilled with the results. I have been able to make massive profits while keeping my money safe.',
         image: Test1
      },
      {
         name:'Elena K',
         desc:'I Receive my account update today i’m excited by the out come. I’m kicking myself in the nut for not investing. Won’t be missing no opportunity again. ',
         image: Test2
      },
      {
         name:'James W',
         desc:'I have been trading with nexcel global for over a year now, and I can honestly say it has been life-changing. Their platform is user-friendly, and the customer support team is always ready to help.',
         image: Test3
      },
      {
         name:'Sarah L',
         desc:'I’ve been skeptical about crypto for years, but after joining nexcel global, my perspective changed completely. They offer excellent training materials and webinars that taught me how to manage risks effectively.',
         image: Test4
      },
      {
         name:' Daniel T',
         desc:'What sets nexcel global apart for me is their attention to detail and support for traders at all levels. They offer a wide range of assets, and their advanced charting tools have been key to improving my forex trading performance. ',
         image: Test5
      }
    ]
    export const WithrawalTestData: WithrawalTestItem[] = [
      {
         name:'Andrew Ostein',
         country: 'England',
         amount: 500
      },
      {
         name:'Louis Laurent',
         country: 'france',
         amount: 1000
      },
      {
         name:'Joel kyler',
         country: 'Australia',
         amount: 2500
      },     
      {
         name:'Ashad Agarwal',
         country: 'England',
         amount: 2500
      },
      {
         name:'Ashwin Kaur',
         country: 'India',
         amount: 200
      },
      {
         name:'Aitken Fiona',
         country: 'Scotland',
         amount: 900
      },
      {
         name:'Felix Berger',
         country: 'Portugal',
         amount: 1200
      },
      
      {
         name:'Arthur Dubois',
         country: 'Brazil',
         amount: 100
      },
      {
         name:'Catriona Abercrombie ',
         country: 'Italy',
         amount: 600
      },
      {
         name:'Maximilian Fischer',
         country: 'England',
         amount: 400
      },
    ]