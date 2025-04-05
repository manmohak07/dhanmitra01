import privateBanks from './privateBanks';
import publicBanks from './publicBanks';
import smallFinanceBanks from './smallFinanceBanks';
import corporateBanks from './corporateBanks';
import ruralBanks from './ruralBanks';
import nbfcBanks from './nbfcBanks';
import type { Bank, BankFDRate } from './types';

const allBanks: Bank[] = [
  ...privateBanks,
  ...publicBanks,
  ...smallFinanceBanks,
  ...corporateBanks,
  ...ruralBanks,
  ...nbfcBanks
];

export {
  privateBanks,
  publicBanks,
  smallFinanceBanks,
  corporateBanks,
  ruralBanks,
  nbfcBanks,
  allBanks
};

export type { Bank, BankFDRate }; 