// Define the BankFDRate interface
export interface BankFDRate {
  tenure: string;
  general: number;
  senior: number;
  minAmount?: number;
  maxAmount?: number;
  customerType?: string;
  specialNotes?: string[];
}

// Define the Bank interface
export interface Bank {
  id: string;
  name: string;
  logo_url: string;
  type: string;
  rates: BankFDRate[];
  bestRate?: number;
}

// Create type aliases that can be imported
export type BankType = Bank;
export type BankFDRateType = BankFDRate;

// Export a dummy object to ensure the module is properly loaded
export const BankTypes = {
  Bank,
  BankFDRate
}; 