export class Kitten {
  id: number;
  name: string;
  breed: string;
  birthdate: string;
  pictureLink: string;

  constructor(
    id: number = Date.now() + Math.floor(Math.random() * 10000),
    name: string = '',
    breed: string = '',
    birthdate: string = null,
    pictureLink: string = ''
  ) {
    this.name = name;
    this.breed = breed;
    this.birthdate = birthdate;
    this.pictureLink = pictureLink;
  }
}
