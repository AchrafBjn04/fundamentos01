import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Angular01Component } from './angular01/angular01.component';
import { Reto1Component } from './reto1/reto1.component';
import { Reto2Component } from './reto2/reto2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Reto2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos01';
}
