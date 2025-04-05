import type { Bank } from './types';

export const calculateBestRates = (banks: Bank[], amount: number, tenure: string, customerType: string): Bank[] => {
  return banks
    .map(bank => {
      const rate = bank.rates.find(r => r.tenure === tenure);

      return {
        ...bank,
        bestRate: rate ? (rate as any)[customerType] : 0
      };
    })
    .filter(bank => bank.bestRate > 0)
    .sort((a, b) => (b.bestRate || 0) - (a.bestRate || 0));
};

export const filterBanksByType = (banks: Bank[], types: string[]): Bank[] => {
  if (types.length === 0) return banks;
  return banks.filter(bank => types.includes(bank.type));
};

export const searchBanks = (banks: Bank[], searchTerm: string): Bank[] => {
  if (!searchTerm) return banks;
  const term = searchTerm.toLowerCase();
  return banks.filter(bank => 
    bank.name.toLowerCase().includes(term) ||
    bank.type.toLowerCase().includes(term)
  );
}; 