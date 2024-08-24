import { Component, inject } from '@angular/core';
import { InvestmentResults } from './investment-results.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentService);
  results = this.investmentService.results.asReadonly();
  trackByYear(result: InvestmentResults) {
    return result.year;
  }
}
