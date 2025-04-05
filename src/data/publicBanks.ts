import type { Bank } from './types';

const publicBanks: Bank[] = [
  {
    id: "sbi",
    name: "State Bank of India",
    logo_url: "https://sbi.co.in/documents/16012/22867/sbi-logo.svg",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.70, senior: 7.20 },
      { tenure: "1 year", general: 6.70, senior: 7.20 },
      { tenure: "1-2 years", general: 6.80, senior: 7.30 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5 years", general: 6.50, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.25 },
      { tenure: "400 days", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "pnb",
    name: "Punjab National Bank",
    logo_url: "https://www.pnbindia.in/images/logo.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.80, senior: 6.30 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1 year", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 6.90, senior: 7.40 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "666 days", general: 7.40, senior: 7.90 }
    ]
  },
  {
    id: "bob",
    name: "Bank of Baroda",
    logo_url: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/home/logo/logo.svg",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.85, senior: 7.35 },
      { tenure: "1 year", general: 6.85, senior: 7.35 },
      { tenure: "1-2 years", general: 7.15, senior: 7.65 },
      { tenure: "2-3 years", general: 6.70, senior: 7.20 },
      { tenure: "3 years", general: 6.70, senior: 7.20 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "399 days", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "canara",
    name: "Canara Bank",
    logo_url: "https://canarabank.com/assets/images/Canara-Bank-Logo.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.85, senior: 7.35 },
      { tenure: "1 year", general: 6.85, senior: 7.35 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 7.40, senior: 7.90 },
      { tenure: "5-10 years", general: 6.70, senior: 7.20 },
      { tenure: "444 days", general: 7.40, senior: 7.90 }
    ]
  },
  {
    id: "union",
    name: "Union Bank of India",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Union_Bank_of_India_Logo.svg/200px-Union_Bank_of_India_Logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.90, senior: 7.40 },
      { tenure: "1 year", general: 6.90, senior: 7.40 },
      { tenure: "1-2 years", general: 7.05, senior: 7.55 },
      { tenure: "2-3 years", general: 6.80, senior: 7.30 },
      { tenure: "3 years", general: 6.80, senior: 7.30 },
      { tenure: "3-5 years", general: 6.80, senior: 7.30 },
      { tenure: "5 years", general: 6.10, senior: 6.85 },
      { tenure: "5-10 years", general: 6.10, senior: 6.85 },
      { tenure: "600 days", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "iob",
    name: "Indian Overseas Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Indian_Overseas_Bank_Logo.svg/200px-Indian_Overseas_Bank_Logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 7.10, senior: 7.60 },
      { tenure: "1 year", general: 7.10, senior: 7.60 },
      { tenure: "1-2 years", general: 7.10, senior: 7.60 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "555 days", general: 7.30, senior: 7.80 }
    ]
  },
  {
    id: "boi",
    name: "Bank of India",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Bank_of_India_logo.svg/200px-Bank_of_India_logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.80, senior: 7.30 },
      { tenure: "1 year", general: 6.80, senior: 7.30 },
      { tenure: "1-2 years", general: 6.80, senior: 7.30 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.00, senior: 6.50 },
      { tenure: "444 days", general: 7.30, senior: 7.80 }
    ]
  },
  {
    id: "bank_of_maharashtra",
    name: "Bank of Maharashtra",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bank_of_Maharashtra_logo.svg/200px-Bank_of_Maharashtra_logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1 year", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "400 days", general: 7.45, senior: 7.95 }
    ]
  },
  {
    id: "central_bank",
    name: "Central Bank of India",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Central_Bank_of_India.svg/200px-Central_Bank_of_India.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.85, senior: 7.35 },
      { tenure: "1 year", general: 6.85, senior: 7.35 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 6.75, senior: 7.25 },
      { tenure: "555 days", general: 7.50, senior: 8.00 }
    ]
  },
  {
    id: "indian_bank",
    name: "Indian Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Indian_Bank_logo.svg/200px-Indian_Bank_logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.10, senior: 6.60 },
      { tenure: "1 year", general: 6.10, senior: 6.60 },
      { tenure: "1-2 years", general: 6.10, senior: 6.60 },
      { tenure: "2-3 years", general: 6.25, senior: 6.75 },
      { tenure: "3-5 years", general: 6.25, senior: 6.75 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 },
      { tenure: "400 days", general: 7.30, senior: 7.80 }
    ]
  },
  {
    id: "psb",
    name: "Punjab and Sind Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Punjab_%26_Sind_Bank_logo.svg/200px-Punjab_%26_Sind_Bank_logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.30, senior: 6.80 },
      { tenure: "1 year", general: 6.30, senior: 6.80 },
      { tenure: "1-2 years", general: 6.30, senior: 6.80 },
      { tenure: "2-3 years", general: 6.00, senior: 6.50 },
      { tenure: "3-5 years", general: 6.00, senior: 6.50 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 },
      { tenure: "333 days", general: 7.45, senior: 7.95 }
    ]
  },
  {
    id: "uco",
    name: "UCO Bank",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/UCO_Bank_logo.svg/200px-UCO_Bank_logo.svg.png",
    type: 'public',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1 year", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.30, senior: 6.80 },
      { tenure: "2-3 years", general: 6.30, senior: 6.80 },
      { tenure: "3-5 years", general: 6.30, senior: 6.80 },
      { tenure: "5-10 years", general: 6.20, senior: 6.70 },
      { tenure: "666 days", general: 7.30, senior: 7.80 }
    ]
  }
];

export default publicBanks; 