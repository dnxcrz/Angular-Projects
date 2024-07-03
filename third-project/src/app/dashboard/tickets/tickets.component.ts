import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { NewTicketComponent } from '../../tickets/new-ticket/new-ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  imports: [ButtonComponent, NewTicketComponent],
})
export class TicketsComponent {}
