import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { InvestmentResults } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<InvestmentResults[]>();
  trackByYear(result: InvestmentResults) {
    return result.year;
  }
}
