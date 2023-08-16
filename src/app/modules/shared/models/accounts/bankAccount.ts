export interface BankAccount {
  Id: string;
  institutionId: string;
  mask: string;
  name: string;
  currentBalace: number;
  subtype: Subtype;
}

export enum Subtype {
  Credit,
  Debit,
  Savings,
  Checking,
  Mortgage,
}
