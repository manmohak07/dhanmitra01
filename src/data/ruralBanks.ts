import type { Bank } from './types';

const ruralBanks: Bank[] = [
  {
    id: "kerala_gramin",
    name: "Kerala Gramin Bank",
    logo_url: "https://www.keralagbank.com/assets/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.70, senior: 7.20 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "karnataka_vikas",
    name: "Karnataka Vikas Grameena Bank",
    logo_url: "https://www.kvgbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.60, senior: 7.10 },
      { tenure: "1-2 years", general: 6.90, senior: 7.40 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "baroda_up",
    name: "Baroda UP Bank",
    logo_url: "https://www.barodaupbank.in/sites/default/files/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.70, senior: 7.20 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 6.75, senior: 7.25 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "punjab_gramin",
    name: "Punjab Gramin Bank",
    logo_url: "https://www.pgb.org.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.25 },
      { tenure: "15-29 days", general: 3.75, senior: 4.50 },
      { tenure: "30-45 days", general: 4.00, senior: 4.75 },
      { tenure: "46-60 days", general: 4.50, senior: 5.25 },
      { tenure: "61-89 days", general: 4.75, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 7.00 },
      { tenure: "9-12 months", general: 6.85, senior: 7.60 },
      { tenure: "1-2 years", general: 7.15, senior: 7.90 },
      { tenure: "2-3 years", general: 7.25, senior: 8.00 },
      { tenure: "3-5 years", general: 7.35, senior: 8.10 },
      { tenure: "5-10 years", general: 7.40, senior: 8.15 }
    ]
  },
  {
    id: "andhra_pragathi_grameena",
    name: "Andhra Pragathi Grameena Bank",
    logo_url: "https://www.apgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 4.00, senior: 4.00 },
      { tenure: "15-29 days", general: 4.00, senior: 4.00 },
      { tenure: "30-45 days", general: 5.25, senior: 5.75 },
      { tenure: "46-60 days", general: 5.25, senior: 5.75 },
      { tenure: "61-89 days", general: 5.25, senior: 5.75 },
      { tenure: "90 days - 6 months", general: 6.00, senior: 6.50 },
      { tenure: "6-9 months", general: 6.50, senior: 7.00 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 7.10, senior: 7.60 },
      { tenure: "444 days (Kuber - Women)", general: 7.55, senior: 7.55 },
      { tenure: "444 days (Kuber - Others)", general: 7.50, senior: 7.50 },
      { tenure: "333 days (Thriveni - Women)", general: 7.50, senior: 7.50 },
      { tenure: "333 days (Thriveni - Others)", general: 7.45, senior: 7.45 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "andhra_pradesh_grameena_vikas",
    name: "Andhra Pradesh Grameena Vikas Bank",
    logo_url: "https://www.apgvbank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 4.00, senior: 4.50 },
      { tenure: "30-45 days", general: 4.25, senior: 4.75 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "271-364 days", general: 6.05, senior: 6.55 },
      { tenure: "1-2 years", general: 7.15, senior: 7.65 },
      { tenure: "444 days", general: 7.10, senior: 7.60 },
      { tenure: "777 days", general: 7.50, senior: 8.00 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "arunachal_pradesh_rural",
    name: "Arunachal Pradesh Rural Bank",
    logo_url: "https://www.aprb.co.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-90 days", general: 5.50, senior: 6.00 },
      { tenure: "91 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "aryavart_bank",
    name: "Aryavart Bank",
    logo_url: "https://www.aryavart-rrb.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1 year", general: 6.75, senior: 7.25 },
      { tenure: "400 days", general: 7.25, senior: 7.75 },
      { tenure: "15 months", general: 7.25, senior: 7.75 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "assam_gramin_vikash",
    name: "Assam Gramin Vikash Bank",
    logo_url: "https://www.agvbank.co.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.00 },
      { tenure: "15-29 days", general: 3.00, senior: 3.00 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.80, senior: 7.30 },
      { tenure: "2-3 years", general: 7.10, senior: 7.60 },
      { tenure: "3-5 years", general: 6.50, senior: 7.00 },
      { tenure: "5-10 years", general: 6.25, senior: 6.75 }
    ]
  },
  {
    id: "bangiya_gramin_vikas",
    name: "Bangiya Gramin Vikas Bank",
    logo_url: "https://www.bgvb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 3.50 },
      { tenure: "15-29 days", general: 3.50, senior: 3.50 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1 year to 1 year 1 month 3 days", general: 6.75, senior: 7.25 },
      { tenure: "1 year 1 month 4 days", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.25, senior: 6.75 },
      { tenure: "5-10 years", general: 6.00, senior: 6.50 }
    ]
  },
  {
    id: "baroda_gujarat_gramin",
    name: "Baroda Gujarat Gramin Bank",
    logo_url: "https://www.bggb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 7.10, senior: 7.60 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.20, senior: 7.70 }
    ]
  },
  {
    id: "baroda_rajasthan_kshetriya",
    name: "Baroda Rajasthan Kshetriya Gramin Bank",
    logo_url: "https://www.brkgb.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1 year", general: 6.70, senior: 7.20 },
      { tenure: "444 days", general: 7.25, senior: 7.75 },
      { tenure: "2-3 years", general: 7.15, senior: 7.65 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "baroda_up_bank",
    name: "Baroda UP Bank",
    logo_url: "https://www.barodaupbank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.25, senior: 6.75 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.25, senior: 6.75 },
      { tenure: "5-10 years", general: 6.00, senior: 6.50 }
    ]
  },
  {
    id: "chaitanya_godavari_grameena",
    name: "Chaitanya Godavari Grameena Bank",
    logo_url: "https://www.cggb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-45 days", general: 4.25, senior: 4.75 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.50, senior: 7.00 },
      { tenure: "9-12 months", general: 7.00, senior: 7.50 },
      { tenure: "1-2 years", general: 8.10, senior: 8.60 },
      { tenure: "AKSHAYA Term Deposit - V (1 year)", general: 8.00, senior: 8.00 },
      { tenure: "2-3 years", general: 7.50, senior: 8.00 },
      { tenure: "3-5 years", general: 7.25, senior: 7.75 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "chhattisgarh_rajya_gramin",
    name: "Chhattisgarh Rajya Gramin Bank",
    logo_url: "https://www.crgb.co.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 2.75, senior: 3.25 },
      { tenure: "15-29 days", general: 2.75, senior: 3.25 },
      { tenure: "30 days", general: 2.95, senior: 3.45 },
      { tenure: "45 days", general: 2.95, senior: 3.45 },
      { tenure: "60 days", general: 3.95, senior: 4.45 },
      { tenure: "90 days - 6 months", general: 4.50, senior: 5.00 },
      { tenure: "6-9 months", general: 5.25, senior: 5.75 },
      { tenure: "9-12 months", general: 6.00, senior: 6.50 },
      { tenure: "1-2 years", general: 6.25, senior: 6.75 },
      { tenure: "2-3 years", general: 6.00, senior: 6.50 },
      { tenure: "3-5 years", general: 5.75, senior: 6.25 },
      { tenure: "5-10 years", general: 5.50, senior: 6.00 }
    ]
  },
  {
    id: "dakshin_bihar_gramin",
    name: "Dakshin Bihar Gramin Bank",
    logo_url: "https://www.dbgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 3.50 },
      { tenure: "15-29 days", general: 3.50, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 3.50 },
      { tenure: "46-60 days", general: 4.25, senior: 4.25 },
      { tenure: "61-89 days", general: 4.50, senior: 4.50 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.25 },
      { tenure: "6-9 months", general: 5.75, senior: 5.75 },
      { tenure: "9-12 months", general: 6.25, senior: 6.25 },
      { tenure: "1-2 years", general: 6.80, senior: 6.80 },
      { tenure: "2-3 years", general: 7.00, senior: 7.00 },
      { tenure: "3-5 years", general: 6.50, senior: 6.50 },
      { tenure: "5-10 years", general: 6.25, senior: 6.25 }
    ]
  },
  {
    id: "ellaquai_dehati",
    name: "Ellaquai Dehati Bank",
    logo_url: "https://www.edb.org.in/assets/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.40, senior: 5.90 },
      { tenure: "9-12 months", general: 6.15, senior: 6.65 },
      { tenure: "1-2 years", general: 6.40, senior: 6.90 },
      { tenure: "2-3 years", general: 6.20, senior: 6.70 },
      { tenure: "3-5 years", general: 6.00, senior: 6.50 },
      { tenure: "5-10 years", general: 5.75, senior: 6.25 }
    ]
  },
  {
    id: "himachal_pradesh_gramin",
    name: "Himachal Pradesh Gramin Bank",
    logo_url: "https://www.hpgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.10, senior: 5.60 },
      { tenure: "6-9 months", general: 5.50, senior: 6.00 },
      { tenure: "9-12 months", general: 6.25, senior: 6.75 },
      { tenure: "1-2 years", general: 6.55, senior: 7.05 },
      { tenure: "2-3 years", general: 6.30, senior: 6.80 },
      { tenure: "3-5 years", general: 6.10, senior: 6.60 },
      { tenure: "5-10 years", general: 5.85, senior: 6.35 }
    ]
  },
  {
    id: "jk_grameen",
    name: "J&K Grameen Bank",
    logo_url: "https://www.jkgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.40, senior: 5.90 },
      { tenure: "9-12 months", general: 6.15, senior: 6.65 },
      { tenure: "1-2 years", general: 6.40, senior: 6.90 },
      { tenure: "2-3 years", general: 6.20, senior: 6.70 },
      { tenure: "3-5 years", general: 6.00, senior: 6.50 },
      { tenure: "5-10 years", general: 5.75, senior: 6.25 }
    ]
  },
  {
    id: "jharkhand_gramin",
    name: "Jharkhand Gramin Bank",
    logo_url: "https://www.jharkhandgraminbank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.25, senior: 6.75 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.90, senior: 7.40 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "karnataka_gramin",
    name: "Karnataka Gramin Bank",
    logo_url: "https://www.kgbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.25, senior: 3.75 },
      { tenure: "15-29 days", general: 3.50, senior: 4.00 },
      { tenure: "30-45 days", general: 3.75, senior: 4.25 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 7.15, senior: 7.65 },
      { tenure: "2-3 years", general: 7.25, senior: 7.75 },
      { tenure: "3-5 years", general: 7.35, senior: 7.85 },
      { tenure: "5-10 years", general: 7.40, senior: 7.90 }
    ]
  },
  {
    id: "madhya_pradesh_gramin",
    name: "Madhya Pradesh Gramin Bank",
    logo_url: "https://www.mpgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.35, senior: 5.85 },
      { tenure: "6-9 months", general: 5.70, senior: 6.20 },
      { tenure: "9-12 months", general: 6.45, senior: 6.95 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.25, senior: 6.75 },
      { tenure: "5-10 years", general: 6.00, senior: 6.50 }
    ]
  },
  {
    id: "madhyanchal_gramin",
    name: "Madhyanchal Gramin Bank",
    logo_url: "https://www.mgbank.co.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.25, senior: 3.75 },
      { tenure: "30-45 days", general: 3.50, senior: 4.00 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.25, senior: 6.75 },
      { tenure: "1-2 years", general: 6.65, senior: 7.15 },
      { tenure: "2-3 years", general: 6.80, senior: 7.30 },
      { tenure: "3-5 years", general: 6.90, senior: 7.40 },
      { tenure: "5-10 years", general: 7.00, senior: 7.50 }
    ]
  },
  {
    id: "maharashtra_gramin",
    name: "Maharashtra Gramin Bank",
    logo_url: "https://www.mahagramin.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.80, senior: 3.80 },
      { tenure: "15-29 days", general: 4.00, senior: 4.00 },
      { tenure: "30-45 days", general: 4.25, senior: 4.25 },
      { tenure: "46-60 days", general: 4.75, senior: 4.75 },
      { tenure: "61-89 days", general: 5.00, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 5.50 },
      { tenure: "6-9 months", general: 6.00, senior: 6.00 },
      { tenure: "9-12 months", general: 6.50, senior: 6.50 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "manipur_rural",
    name: "Manipur Rural Bank",
    logo_url: "https://www.manipurruralbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.40, senior: 5.90 },
      { tenure: "9-12 months", general: 6.15, senior: 6.65 },
      { tenure: "1-2 years", general: 6.40, senior: 6.90 },
      { tenure: "2-3 years", general: 6.20, senior: 6.70 },
      { tenure: "3-5 years", general: 6.00, senior: 6.50 },
      { tenure: "5-10 years", general: 5.75, senior: 6.25 }
    ]
  },
  {
    id: "meghalaya_rural",
    name: "Meghalaya Rural Bank",
    logo_url: "https://www.meghalayaruralbank.co.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.40, senior: 5.90 },
      { tenure: "9-12 months", general: 6.15, senior: 6.65 },
      { tenure: "1-2 years", general: 6.40, senior: 6.90 },
      { tenure: "2-3 years", general: 6.20, senior: 6.70 },
      { tenure: "3-5 years", general: 6.00, senior: 6.50 },
      { tenure: "5-10 years", general: 5.75, senior: 6.25 }
    ]
  },
  {
    id: "mizoram_rural",
    name: "Mizoram Rural Bank",
    logo_url: "https://www.mizoramruralbank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.40, senior: 5.90 },
      { tenure: "9-12 months", general: 6.10, senior: 6.60 },
      { tenure: "1-2 years", general: 6.35, senior: 6.85 },
      { tenure: "2-3 years", general: 6.15, senior: 6.65 },
      { tenure: "3-5 years", general: 5.95, senior: 6.45 },
      { tenure: "5-10 years", general: 5.70, senior: 6.20 }
    ]
  },
  {
    id: "nagaland_rural",
    name: "Nagaland Rural Bank",
    logo_url: "https://www.nagalandruralbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.40, senior: 5.90 },
      { tenure: "9-12 months", general: 6.10, senior: 6.60 },
      { tenure: "1-2 years", general: 6.35, senior: 6.85 },
      { tenure: "2-3 years", general: 6.15, senior: 6.65 },
      { tenure: "3-5 years", general: 5.95, senior: 6.45 },
      { tenure: "5-10 years", general: 5.70, senior: 6.20 }
    ]
  },
  {
    id: "odisha_gramya",
    name: "Odisha Gramya Bank",
    logo_url: "https://www.odishabank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.35, senior: 5.85 },
      { tenure: "6-9 months", general: 5.70, senior: 6.20 },
      { tenure: "9-12 months", general: 6.45, senior: 6.95 },
      { tenure: "1-2 years", general: 6.70, senior: 7.20 },
      { tenure: "2-3 years", general: 6.45, senior: 6.95 },
      { tenure: "3-5 years", general: 6.20, senior: 6.70 },
      { tenure: "5-10 years", general: 5.95, senior: 6.45 }
    ]
  },
  {
    id: "paschim_banga_gramin",
    name: "Paschim Banga Gramin Bank",
    logo_url: "https://www.pbgbank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.25 },
      { tenure: "15-29 days", general: 3.25, senior: 3.50 },
      { tenure: "30-45 days", general: 3.50, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.25 },
      { tenure: "61-89 days", general: 4.25, senior: 4.50 },
      { tenure: "90 days - 6 months", general: 4.50, senior: 4.75 },
      { tenure: "6-9 months", general: 4.75, senior: 5.00 },
      { tenure: "9-12 months", general: 4.75, senior: 5.00 },
      { tenure: "1 year", general: 5.00, senior: 5.25 },
      { tenure: "1-2 years", general: 5.00, senior: 5.50 },
      { tenure: "2-3 years", general: 5.00, senior: 5.50 },
      { tenure: "3-5 years", general: 5.00, senior: 5.50 },
      { tenure: "5-10 years", general: 5.00, senior: 5.50 }
    ]
  },
  {
    id: "prathama_up_gramin",
    name: "Prathama UP Gramin Bank",
    logo_url: "https://www.prathamaupbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.40, senior: 5.90 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.25, senior: 6.75 },
      { tenure: "5-10 years", general: 6.00, senior: 6.50 }
    ]
  },
  {
    id: "puduvai_bharathiar",
    name: "Puduvai Bharathiar Grama Bank",
    logo_url: "https://www.puduvaibharathiar.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 4.50, senior: 5.00 },
      { tenure: "15-29 days", general: 4.75, senior: 5.25 },
      { tenure: "30-45 days", general: 5.00, senior: 5.50 },
      { tenure: "46-60 days", general: 5.25, senior: 5.75 },
      { tenure: "61-89 days", general: 5.50, senior: 6.00 },
      { tenure: "90 days - 6 months", general: 6.00, senior: 6.50 },
      { tenure: "6-9 months", general: 6.50, senior: 7.00 },
      { tenure: "9-12 months", general: 6.75, senior: 7.25 },
      { tenure: "1-2 years", general: 7.00, senior: 7.50 },
      { tenure: "2-3 years", general: 7.15, senior: 7.65 },
      { tenure: "3-5 years", general: 7.25, senior: 7.75 },
      { tenure: "5-10 years", general: 7.30, senior: 7.80 }
    ]
  },
  {
    id: "rajasthan_marudhara_gramin",
    name: "Rajasthan Marudhara Gramin Bank",
    logo_url: "https://www.rmgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.00 },
      { tenure: "15-29 days", general: 3.25, senior: 3.25 },
      { tenure: "30-45 days", general: 3.50, senior: 3.50 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.25, senior: 6.75 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.90, senior: 7.40 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "saptagiri_grameena",
    name: "Saptagiri Grameena Bank",
    logo_url: "https://www.saptagirigrameenabank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 4.00, senior: 4.50 },
      { tenure: "15-29 days", general: 4.25, senior: 4.75 },
      { tenure: "30-45 days", general: 4.50, senior: 5.00 },
      { tenure: "46-60 days", general: 5.00, senior: 5.50 },
      { tenure: "61-89 days", general: 5.25, senior: 5.75 },
      { tenure: "90 days - 6 months", general: 5.75, senior: 6.25 },
      { tenure: "6-9 months", general: 6.50, senior: 7.00 },
      { tenure: "9-12 months", general: 7.00, senior: 7.50 },
      { tenure: "1-2 years", general: 7.50, senior: 8.00 },
      { tenure: "2-3 years", general: 7.75, senior: 8.25 },
      { tenure: "3-5 years", general: 7.85, senior: 8.35 },
      { tenure: "5-10 years", general: 7.90, senior: 8.40 }
    ]
  },
  {
    id: "sarva_haryana_gramin",
    name: "Sarva Haryana Gramin Bank",
    logo_url: "https://www.shgb.co.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.35, senior: 5.85 },
      { tenure: "6-9 months", general: 5.70, senior: 6.20 },
      { tenure: "9-12 months", general: 6.45, senior: 6.95 },
      { tenure: "1-2 years", general: 6.70, senior: 7.20 },
      { tenure: "2-3 years", general: 6.45, senior: 6.95 },
      { tenure: "3-5 years", general: 6.20, senior: 6.70 },
      { tenure: "5-10 years", general: 5.95, senior: 6.45 }
    ]
  },
  {
    id: "saurashtra_gramin",
    name: "Saurashtra Gramin Bank",
    logo_url: "https://www.sgbrrb.org/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.00 },
      { tenure: "15-29 days", general: 3.25, senior: 3.25 },
      { tenure: "30-45 days", general: 3.50, senior: 3.50 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.25, senior: 6.75 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.95, senior: 7.45 },
      { tenure: "3-5 years", general: 7.05, senior: 7.55 },
      { tenure: "5-10 years", general: 7.15, senior: 7.65 }
    ]
  },
  {
    id: "tamil_nadu_grama",
    name: "Tamil Nadu Grama Bank",
    logo_url: "https://www.tamilnadugramabank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.75, senior: 4.25 },
      { tenure: "15-29 days", general: 4.00, senior: 4.50 },
      { tenure: "30-45 days", general: 4.25, senior: 4.75 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "telangana_grameena",
    name: "Telangana Grameena Bank",
    logo_url: "https://www.tgbhyd.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.25, senior: 6.75 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.90, senior: 7.40 },
      { tenure: "TGB-KAMDHENU - 399 days", general: 7.30, senior: 7.80 },
      { tenure: "TGB AMRUTHA - 777 Days", general: 7.40, senior: 7.90 },
      { tenure: "3-5 years", general: 6.75, senior: 7.25 },
      { tenure: "5-10 years", general: 6.50, senior: 7.00 }
    ]
  },
  {
    id: "tripura_gramin",
    name: "Tripura Gramin Bank",
    logo_url: "https://www.tripuragraminbank.org/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.00, senior: 5.50 },
      { tenure: "6-9 months", general: 5.40, senior: 5.90 },
      { tenure: "9-12 months", general: 6.15, senior: 6.65 },
      { tenure: "1-2 years", general: 6.40, senior: 6.90 },
      { tenure: "2-3 years", general: 6.20, senior: 6.70 },
      { tenure: "3-5 years", general: 6.00, senior: 6.50 },
      { tenure: "5-10 years", general: 5.75, senior: 6.25 }
    ]
  },
  {
    id: "uttarbanga_kshetriya",
    name: "Uttarbanga Kshetriya Gramin Bank",
    logo_url: "https://www.ubkgb.org/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.30, senior: 5.80 },
      { tenure: "6-9 months", general: 5.65, senior: 6.15 },
      { tenure: "9-12 months", general: 6.40, senior: 6.90 },
      { tenure: "1-2 years", general: 6.65, senior: 7.15 },
      { tenure: "2-3 years", general: 6.40, senior: 6.90 },
      { tenure: "3-5 years", general: 6.15, senior: 6.65 },
      { tenure: "5-10 years", general: 5.90, senior: 6.40 }
    ]
  },
  {
    id: "uttar_bihar_gramin",
    name: "Uttar Bihar Gramin Bank",
    logo_url: "https://www.ubgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.40, senior: 5.90 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.50, senior: 7.00 },
      { tenure: "3-5 years", general: 6.25, senior: 6.75 },
      { tenure: "5-10 years", general: 6.00, senior: 6.50 }
    ]
  },
  {
    id: "uttarakhand_gramin",
    name: "Uttarakhand Gramin Bank",
    logo_url: "https://www.uttarakhandgraminbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.35, senior: 5.85 },
      { tenure: "6-9 months", general: 5.70, senior: 6.20 },
      { tenure: "9-12 months", general: 6.45, senior: 6.95 },
      { tenure: "1-2 years", general: 6.70, senior: 7.20 },
      { tenure: "2-3 years", general: 6.45, senior: 6.95 },
      { tenure: "3-5 years", general: 6.20, senior: 6.70 },
      { tenure: "5-10 years", general: 5.95, senior: 6.45 }
    ]
  },
  {
    id: "uttar_pradesh_gramin",
    name: "Uttar Pradesh Gramin Bank",
    logo_url: "https://www.upgb.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "vananchal_gramin",
    name: "Vananchal Gramin Bank",
    logo_url: "https://www.vananchalgraminbank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.00, senior: 4.50 },
      { tenure: "61-89 days", general: 4.25, senior: 4.75 },
      { tenure: "90 days - 6 months", general: 5.20, senior: 5.70 },
      { tenure: "6-9 months", general: 5.55, senior: 6.05 },
      { tenure: "9-12 months", general: 6.30, senior: 6.80 },
      { tenure: "1-2 years", general: 6.55, senior: 7.05 },
      { tenure: "2-3 years", general: 6.30, senior: 6.80 },
      { tenure: "3-5 years", general: 6.05, senior: 6.55 },
      { tenure: "5-10 years", general: 5.80, senior: 6.30 }
    ]
  },
  {
    id: "vidharbha_konkan_gramin",
    name: "Vidharbha Konkan Gramin Bank",
    logo_url: "https://www.vkgb.co.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.75, senior: 4.25 },
      { tenure: "15-29 days", general: 4.00, senior: 4.50 },
      { tenure: "30-45 days", general: 4.25, senior: 4.75 },
      { tenure: "46-60 days", general: 4.75, senior: 5.25 },
      { tenure: "61-89 days", general: 5.00, senior: 5.50 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.85, senior: 7.35 },
      { tenure: "2-3 years", general: 7.00, senior: 7.50 },
      { tenure: "3-5 years", general: 7.15, senior: 7.65 },
      { tenure: "5-10 years", general: 7.25, senior: 7.75 }
    ]
  },
  {
    id: "pragathi_krishna_gramin",
    name: "Pragathi Krishna Gramin Bank",
    logo_url: "https://www.pkgb.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.50, senior: 6.00 },
      { tenure: "6-9 months", general: 6.00, senior: 6.50 },
      { tenure: "9-12 months", general: 6.50, senior: 7.00 },
      { tenure: "1-2 years", general: 6.95, senior: 7.45 },
      { tenure: "2-3 years", general: 7.10, senior: 7.60 },
      { tenure: "3-5 years", general: 7.20, senior: 7.70 },
      { tenure: "5-10 years", general: 7.30, senior: 7.80 }
    ]
  },
  {
    id: "jharkhand_gramin",
    name: "Jharkhand Gramin Bank",
    logo_url: "https://www.jharkhandgraminbank.in/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.50, senior: 4.00 },
      { tenure: "15-29 days", general: 3.75, senior: 4.25 },
      { tenure: "30-45 days", general: 4.00, senior: 4.50 },
      { tenure: "46-60 days", general: 4.50, senior: 5.00 },
      { tenure: "61-89 days", general: 4.75, senior: 5.25 },
      { tenure: "90 days - 6 months", general: 5.25, senior: 5.75 },
      { tenure: "6-9 months", general: 5.75, senior: 6.25 },
      { tenure: "9-12 months", general: 6.25, senior: 6.75 },
      { tenure: "1-2 years", general: 6.75, senior: 7.25 },
      { tenure: "2-3 years", general: 6.90, senior: 7.40 },
      { tenure: "3-5 years", general: 7.00, senior: 7.50 },
      { tenure: "5-10 years", general: 7.10, senior: 7.60 }
    ]
  },
  {
    id: "tamilnadu_grama_bank",
    name: "Tamil Nadu Grama Bank",
    logo_url: "https://www.tamilnadugramabank.com/images/logo.png",
    type: 'rural',
    rates: [
      { tenure: "7-14 days", general: 3.00, senior: 3.50 },
      { tenure: "15-29 days", general: 3.00, senior: 3.50 },
      { tenure: "30-45 days", general: 3.25, senior: 3.75 },
      { tenure: "46-60 days", general: 4.25, senior: 4.75 },
      { tenure: "61-89 days", general: 4.50, senior: 5.00 },
      { tenure: "90 days - 6 months", general: 5.30, senior: 5.80 },
      { tenure: "6-9 months", general: 5.65, senior: 6.15 },
      { tenure: "9-12 months", general: 6.40, senior: 6.90 },
      { tenure: "1-2 years", general: 6.65, senior: 7.15 },
      { tenure: "2-3 years", general: 6.40, senior: 6.90 },
      { tenure: "3-5 years", general: 6.15, senior: 6.65 },
      { tenure: "5-10 years", general: 5.90, senior: 6.40 }
    ]
  }
];

export default ruralBanks; 