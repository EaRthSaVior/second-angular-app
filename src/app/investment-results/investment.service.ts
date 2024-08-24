import { Injectable, signal } from '@angular/core';
import { InvestmentResults } from './investment-results.model';
import { UserInput } from '../user-input/user-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  results = signal<InvestmentResults[] | undefined>(undefined);

  calculateInvestmentResults(data: UserInput) {
    const { annualInvestment, duration, expectedReturn, initialInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.results.set(annualData);
  }
}
