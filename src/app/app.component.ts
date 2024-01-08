import { Component } from '@angular/core';
import { Kitten } from './model/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  adoptedKitten: Kitten[] = [];

  onKittenAdoption(kitten) {
    this.adoptedKitten.push(kitten);
  }
}
