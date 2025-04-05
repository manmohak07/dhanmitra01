import type { Bank } from './types';

const corporateBanks: Bank[] = [
  {
    id: "icici_corporate",
    name: "ICICI Bank Corporate FD",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/200px-ICICI_Bank_Logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.90, senior: 7.40 },
      { tenure: "1-2 years", general: 7.25, senior: 7.85 },
      { tenure: "15 months - 18 months", general: 7.25, senior: 7.85 },
      { tenure: "2-3 years", general: 7.15, senior: 7.65 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "hdfc_corporate",
    name: "HDFC Bank Corporate FD",
    logo_url: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b76e2c1e-4c9c-4f2c-bc67-d191bf8c0c43/common/logo.svg",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.85, senior: 6.35 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 7.30, senior: 7.80 },
      { tenure: "2-3 years", general: 7.20, senior: 7.70 },
      { tenure: "3-5 years", general: 7.20, senior: 7.70 },
      { tenure: "5-10 years", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "axis_corporate",
    name: "Axis Bank Corporate FD",
    logo_url: "https://www.axisbank.com/assets/images/logo-white.png",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.85, senior: 6.35 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.95, senior: 7.45 },
      { tenure: "1-2 years", general: 7.30, senior: 7.80 },
      { tenure: "2-3 years", general: 7.20, senior: 7.70 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "kotak_corporate",
    name: "Kotak Mahindra Bank Corporate FD",
    logo_url: "https://www.kotak.com/content/dam/Kotak/kotak-bank-logo.jpg",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 6.00, senior: 6.50 },
      { tenure: "6-9 months", general: 6.40, senior: 6.90 },
      { tenure: "9-12 months", general: 6.95, senior: 7.45 },
      { tenure: "1-2 years", general: 7.30, senior: 7.80 },
      { tenure: "2-3 years", general: 7.20, senior: 7.70 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  },
  {
    id: "sbi_corporate",
    name: "State Bank of India Corporate FD",
    logo_url: "https://sbi.co.in/documents/16012/22867/sbi-logo.svg",
    type: 'corporate',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 7.00, senior: 7.50 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 6.95, senior: 7.45 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 }
    ]
  },
  {
    id: "shriram_finance",
    name: "Shriram Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shriram_Finance_logo.svg/200px-Shriram_Finance_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 8.47, senior: 8.97 },
      { tenure: "24 months", general: 8.47, senior: 8.97 },
      { tenure: "36 months", general: 8.47, senior: 8.97 },
      { tenure: "48 months", general: 8.47, senior: 8.97 },
      { tenure: "60 months", general: 8.47, senior: 8.97 }
    ]
  },
  {
    id: "bajaj_finance",
    name: "Bajaj Finance Ltd",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bajaj_Finance_logo.svg/200px-Bajaj_Finance_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 8.60, senior: 8.85 },
      { tenure: "24 months", general: 8.60, senior: 8.85 },
      { tenure: "36 months", general: 8.60, senior: 8.85 },
      { tenure: "48 months", general: 8.60, senior: 8.85 },
      { tenure: "60 months", general: 8.60, senior: 8.85 }
    ]
  },
  {
    id: "mahindra_finance",
    name: "Mahindra Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mahindra_Finance_logo.svg/200px-Mahindra_Finance_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 8.10, senior: 8.35 },
      { tenure: "24 months", general: 8.10, senior: 8.35 },
      { tenure: "36 months", general: 8.10, senior: 8.35 },
      { tenure: "48 months", general: 8.10, senior: 8.35 },
      { tenure: "60 months", general: 8.10, senior: 8.35 }
    ]
  },
  {
    id: "pnb_housing",
    name: "PNB Housing Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PNB_Housing_Finance_logo.svg/200px-PNB_Housing_Finance_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 8.00, senior: 7.55 },
      { tenure: "24 months", general: 8.00, senior: 7.55 },
      { tenure: "36 months", general: 8.00, senior: 7.55 },
      { tenure: "48 months", general: 8.00, senior: 7.55 },
      { tenure: "60 months", general: 8.00, senior: 7.55 }
    ]
  },
  {
    id: "icici_housing",
    name: "ICICI Housing Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/200px-ICICI_Bank_Logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 7.80, senior: 8.05 },
      { tenure: "24 months", general: 7.80, senior: 8.05 },
      { tenure: "36 months", general: 7.80, senior: 8.05 },
      { tenure: "48 months", general: 7.80, senior: 8.05 },
      { tenure: "60 months", general: 7.80, senior: 8.05 }
    ]
  },
  {
    id: "sundaram_finance",
    name: "Sundaram Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sundaram_Finance_logo.svg/200px-Sundaram_Finance_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 7.80, senior: 8.30 },
      { tenure: "24 months", general: 7.80, senior: 8.30 },
      { tenure: "36 months", general: 7.80, senior: 8.30 },
      { tenure: "48 months", general: 7.80, senior: 8.30 },
      { tenure: "60 months", general: 7.80, senior: 8.30 }
    ]
  },
  {
    id: "lic_housing",
    name: "LIC Housing Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/LIC_Housing_Finance_logo.svg/200px-LIC_Housing_Finance_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 7.75, senior: 8.00 },
      { tenure: "24 months", general: 7.75, senior: 8.00 },
      { tenure: "36 months", general: 7.75, senior: 8.00 },
      { tenure: "48 months", general: 7.75, senior: 8.00 },
      { tenure: "60 months", general: 7.75, senior: 8.00 }
    ]
  },
  {
    id: "hdfc_ltd",
    name: "HDFC Ltd",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/HDFC_Bank_logo.svg/200px-HDFC_Bank_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 7.40, senior: 7.65 },
      { tenure: "24 months", general: 7.40, senior: 7.65 },
      { tenure: "36 months", general: 7.40, senior: 7.65 },
      { tenure: "48 months", general: 7.40, senior: 7.65 },
      { tenure: "60 months", general: 7.40, senior: 7.65 }
    ]
  },
  {
    id: "muthoot_capital",
    name: "Muthoot Capital Services",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Muthoot_Capital_Services_logo.svg/200px-Muthoot_Capital_Services_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 8.38, senior: 8.88 },
      { tenure: "24 months", general: 8.38, senior: 8.88 },
      { tenure: "36 months", general: 8.38, senior: 8.88 },
      { tenure: "48 months", general: 8.38, senior: 8.88 },
      { tenure: "60 months", general: 8.38, senior: 8.88 }
    ]
  },
  {
    id: "can_fin_homes",
    name: "Can Fin Homes Ltd",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Can_Fin_Homes_logo.svg/200px-Can_Fin_Homes_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 8.00, senior: 8.25 },
      { tenure: "24 months", general: 8.00, senior: 8.35 },
      { tenure: "36 months", general: 8.00, senior: 8.40 },
      { tenure: "48 months", general: 8.00, senior: 8.45 },
      { tenure: "60 months", general: 8.00, senior: 8.50 }
    ]
  },
  {
    id: "manipal_housing",
    name: "Manipal Housing Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Manipal_logo.svg/200px-Manipal_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 8.25, senior: 8.50 },
      { tenure: "24 months", general: 8.25, senior: 8.50 },
      { tenure: "36 months", general: 8.25, senior: 8.50 },
      { tenure: "48 months", general: 8.25, senior: 8.50 },
      { tenure: "60 months", general: 8.25, senior: 8.50 }
    ]
  },
  {
    id: "kerala_transport",
    name: "Kerala Transport Development Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Government_of_Kerala_Logo.svg/200px-Government_of_Kerala_Logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 7.00, senior: 7.25 },
      { tenure: "24 months", general: 7.00, senior: 7.25 },
      { tenure: "36 months", general: 7.00, senior: 7.25 },
      { tenure: "48 months", general: 7.00, senior: 7.25 },
      { tenure: "60 months", general: 7.00, senior: 7.25 }
    ]
  },
  {
    id: "sundaram_home",
    name: "Sundaram Home Finance",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sundaram_Finance_logo.svg/200px-Sundaram_Finance_logo.svg.png",
    type: 'corporate',
    rates: [
      { tenure: "12 months", general: 7.90, senior: 8.25 },
      { tenure: "24 months", general: 7.90, senior: 8.30 },
      { tenure: "36 months", general: 7.90, senior: 8.35 },
      { tenure: "48 months", general: 7.90, senior: 8.40 },
      { tenure: "60 months", general: 7.90, senior: 8.40 }
    ]
  }
];

export default corporateBanks; 