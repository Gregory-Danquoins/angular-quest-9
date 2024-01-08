import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  @Output() sendKittenToList: EventEmitter<Kitten> = new EventEmitter();
  @Input() toggleForm;
  kitten: Kitten = new Kitten();

  onSubmit(form: NgForm) {
    this.sendKittenToList.emit(this.kitten);

    this.toggleForm();
  }
}
