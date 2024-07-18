import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);

  // Given that the app isn't conected to a real server, this is utilize to showcase the different server status available.
  // Math random is utilize to randomly generate the server status online (50%) , offline (40%) and unknown (10%), every 10 seconds the math random value is generated.
  constructor() {
    effect(() => {
      console.log(this.currentStatus);
    });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 10000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
