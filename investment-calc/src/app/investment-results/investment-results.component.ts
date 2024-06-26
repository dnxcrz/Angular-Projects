import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})

// Injecting the InvestmentService to use its methods and properties
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // Computed property that calls resultData() from InvestmentService
  results = computed(() => this.investmentService.resultData());
}
