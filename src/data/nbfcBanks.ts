import type { Bank } from './types';

const nbfcBanks: Bank[] = [
  {
    id: "bajaj",
    name: "Bajaj Finance",
    logo_url: "https://www.bajajfinserv.in/MobileImages/bajaj-finance-logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0.00, senior: 0.00 },
      { tenure: "15-29 days", general: 0.00, senior: 0.00 },
      { tenure: "30-45 days", general: 5.80, senior: 6.05 },
      { tenure: "46-60 days", general: 6.10, senior: 6.35 },
      { tenure: "61-89 days", general: 6.25, senior: 6.50 },
      { tenure: "90 days - 6 months", general: 7.00, senior: 7.25 },
      { tenure: "6-9 months", general: 7.75, senior: 8.00 },
      { tenure: "9-12 months", general: 8.00, senior: 8.25 },
      { tenure: "1 year", general: 8.60, senior: 8.85 },
      { tenure: "1-2 years", general: 8.60, senior: 8.85 },
      { tenure: "2-3 years", general: 8.75, senior: 9.00 },
      { tenure: "3 years", general: 8.90, senior: 9.15 },
      { tenure: "3-5 years", general: 8.90, senior: 9.15 },
      { tenure: "5 years", general: 8.90, senior: 9.15 },
      { tenure: "5-10 years", general: 8.90, senior: 9.15 },
      { tenure: "42 months", general: 9.05, senior: 9.30 }
    ]
  },
  {
    id: "shriram",
    name: "Shriram Finance",
    logo_url: "https://www.shriramfinance.in/media/4095/shriram-finance-logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0.00, senior: 0.00 },
      { tenure: "15-29 days", general: 0.00, senior: 0.00 },
      { tenure: "30-45 days", general: 5.75, senior: 6.25 },
      { tenure: "46-60 days", general: 6.25, senior: 6.75 },
      { tenure: "61-89 days", general: 6.50, senior: 7.00 },
      { tenure: "90 days - 6 months", general: 7.25, senior: 7.75 },
      { tenure: "6-9 months", general: 8.00, senior: 8.50 },
      { tenure: "9-12 months", general: 8.50, senior: 9.00 },
      { tenure: "1 year", general: 9.05, senior: 9.55 },
      { tenure: "1-2 years", general: 9.05, senior: 9.55 },
      { tenure: "2-3 years", general: 9.30, senior: 9.80 },
      { tenure: "3 years", general: 9.30, senior: 9.80 },
      { tenure: "3-5 years", general: 9.30, senior: 9.80 },
      { tenure: "5 years", general: 9.30, senior: 9.80 },
      { tenure: "5-10 years", general: 9.30, senior: 9.80 },
      { tenure: "30 months", general: 9.45, senior: 9.95 }
    ]
  },
  {
    id: "mahindra",
    name: "Mahindra Finance",
    logo_url: "https://www.mahindrafinance.com/assets/images/mahindrafinance-logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0.00, senior: 0.00 },
      { tenure: "15-29 days", general: 0.00, senior: 0.00 },
      { tenure: "30-45 days", general: 5.50, senior: 6.00 },
      { tenure: "46-60 days", general: 6.00, senior: 6.50 },
      { tenure: "61-89 days", general: 6.25, senior: 6.75 },
      { tenure: "90 days - 6 months", general: 7.00, senior: 7.50 },
      { tenure: "6-9 months", general: 7.75, senior: 8.25 },
      { tenure: "9-12 months", general: 8.25, senior: 8.75 },
      { tenure: "1 year", general: 8.75, senior: 9.25 },
      { tenure: "1-2 years", general: 8.75, senior: 9.25 },
      { tenure: "2-3 years", general: 9.00, senior: 9.50 },
      { tenure: "3 years", general: 9.00, senior: 9.50 },
      { tenure: "3-5 years", general: 9.00, senior: 9.50 },
      { tenure: "5 years", general: 9.00, senior: 9.50 },
      { tenure: "5-10 years", general: 9.00, senior: 9.50 },
      { tenure: "33 months", general: 9.15, senior: 9.65 }
    ]
  },
  {
    id: "pnbhf",
    name: "PNB Housing Finance",
    logo_url: "https://www.pnbhousing.com/wp-content/uploads/2020/09/pnb-logo.svg",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0.00, senior: 0.00 },
      { tenure: "15-29 days", general: 0.00, senior: 0.00 },
      { tenure: "30-45 days", general: 5.40, senior: 5.65 },
      { tenure: "46-60 days", general: 5.75, senior: 6.00 },
      { tenure: "61-89 days", general: 6.00, senior: 6.25 },
      { tenure: "90 days - 6 months", general: 6.75, senior: 7.00 },
      { tenure: "6-9 months", general: 7.25, senior: 7.50 },
      { tenure: "9-12 months", general: 7.75, senior: 8.00 },
      { tenure: "1 year", general: 8.50, senior: 8.75 },
      { tenure: "1-2 years", general: 8.50, senior: 8.75 },
      { tenure: "2-3 years", general: 8.65, senior: 8.90 },
      { tenure: "3 years", general: 8.65, senior: 8.90 },
      { tenure: "3-5 years", general: 8.65, senior: 8.90 },
      { tenure: "5 years", general: 8.65, senior: 8.90 },
      { tenure: "5-10 years", general: 8.65, senior: 8.90 },
      { tenure: "24 months 1 day", general: 8.80, senior: 9.05 }
    ]
  },
  {
    id: "lichf",
    name: "LIC Housing Finance",
    logo_url: "https://www.lichousing.com/imgs/logo.png",
    type: 'nbfc',
    rates: [
      { tenure: "7-14 days", general: 0.00, senior: 0.00 },
      { tenure: "15-29 days", general: 0.00, senior: 0.00 },
      { tenure: "30-45 days", general: 5.35, senior: 5.85 },
      { tenure: "46-60 days", general: 5.65, senior: 6.15 },
      { tenure: "61-89 days", general: 5.90, senior: 6.40 },
      { tenure: "90 days - 6 months", general: 6.60, senior: 7.10 },
      { tenure: "6-9 months", general: 7.15, senior: 7.65 },
      { tenure: "9-12 months", general: 7.60, senior: 8.10 },
      { tenure: "1 year", general: 8.25, senior: 8.75 },
      { tenure: "1-2 years", general: 8.25, senior: 8.75 },
      { tenure: "2-3 years", general: 8.50, senior: 9.00 },
      { tenure: "3 years", general: 8.50, senior: 9.00 },
      { tenure: "3-5 years", general: 8.50, senior: 9.00 },
      { tenure: "5 years", general: 8.50, senior: 9.00 },
      { tenure: "5-10 years", general: 8.50, senior: 9.00 },
      { tenure: "36 months 1 day", general: 8.60, senior: 9.10 }
    ]
  }
];

export default nbfcBanks; 