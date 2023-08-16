export interface DashboardSummary {
  recentTransactions: object[]; // Replace 'any' with the appropriate type for recentTransactions
  upcomingTransactions: object[]; // Replace 'any' with the appropriate type for upcomingTransactions
  currentMonthSpending: TransactionSummary[];
  lastMonthSpending: TransactionSummary[];
  allocatedBudget: number;
  portfolioSummary: object; // Replace 'any' with the appropriate type for portfolioSummary
  netWorthSummary: NetWorthSummary;
}

interface TransactionSummary {
  transactionDate: string;
  totalAmount: number;
  count: number;
}

interface NetWorthSummary {
  netWorth: number;
  assets: number;
  equity: number;
  liabilities: number;
}
