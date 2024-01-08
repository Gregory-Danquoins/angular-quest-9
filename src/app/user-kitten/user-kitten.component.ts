import { Component, Input } from '@angular/core';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {
  @Input() myKittens: Kitten[];
}
