import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  @Output() sendKittenToAdoption: EventEmitter<Kitten> = new EventEmitter();
  showForm: boolean = false;
  kittenList: Kitten[] = [
    {
      id: 54543435434354,
      name: 'kitty ',
      breed: 'garfieldus',
      pictureLink:
        'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
      birthdate: '2024-01-13',
    },
    {
      id: 5454365436434,
      name: 'garfield ',
      breed: 'persan',
      pictureLink:
        'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
      birthdate: '2020-01-13',
    },
    {
      id: 54543435434354,
      name: 'kitty',
      breed: 'garfieldus',
      pictureLink:
        'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
      birthdate: '2022-02-13',
    },
  ];

  toggleForm() {
    this.showForm = !this.showForm;
  }
  onReceiveNewKitten(kitten): void {
    this.kittenList.push({ ...kitten });
  }

  onAdoption(kitten) {
    this.kittenList = this.kittenList.filter((k) => k.id !== kitten.id);
    this.sendKittenToAdoption.emit(kitten);
  }
}
