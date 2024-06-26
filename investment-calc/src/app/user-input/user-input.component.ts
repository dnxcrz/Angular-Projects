import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitInvest = signal('0');
  enteredAnnualInvest = signal('0');
  enteredExpReturn = signal('5');
  enteredDuration = signal('10');

  // Injecting the InvestmentService to use its methods and properties
  constructor(private investmentService: InvestmentService) {}

  // Handling form submission and calling the calculateInvestmentResults method from InvestmentService
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitInvest(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpReturn(),
      annualInvestment: +this.enteredAnnualInvest(),
    });

    // Resetting the form fields to their default values
    this.enteredInitInvest.set('0');
    this.enteredAnnualInvest.set('0');
    this.enteredExpReturn.set('5');
    this.enteredDuration.set('10');
  }
}
