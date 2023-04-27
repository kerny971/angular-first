import { Component, OnInit } from '@angular/core';
import Vilains from '../type/vilains.type';

@Component({
  selector: 'app-vilain-list',
  templateUrl: './vilain-list.component.html',
  styleUrls: ['./vilain-list.component.css']
})
export class VilainListComponent implements OnInit {

  vilains: Vilains[] = [
    // tslint:disable-next-line:max-line-length
    {id: 1, name: 'Joker', powers: ['Criminal mastermind', 'Expert chemist', 'Uses weaponized props and toxins', 'Injustice Gang', 'Injustice League'], img: 'https://i.gifer.com/HU6r.gif'},
    // tslint:disable-next-line:max-line-length
    {id: 2, name: 'Thanos', powers: ['natural God force', 'Access to nearly all powerful mystical artifacts and weapons', 'Superhuman physiology of Eternals', 'Plasma energy projection', 'Master tactician'], img: 'https://www.icegif.com/wp-content/uploads/thanos-icegif-6.gif'},
    // tslint:disable-next-line:max-line-length
    {id: 3, name: 'Docteur Fatalys', powers: ['Mastery of science and mystic arts', 'Peak human conditioning', 'Mind transference', 'Technopathy'], img: 'https://pa1.narvii.com/5756/962899cac4f294403475e959134328e0e4e71434_00.gif'}
  ];

  theHero: Vilains | null = null;

  nameHero: string;
  powers: string;
  img: string;

  addHero(): void {
    this.theHero = {
      id: (this.vilains.length + 1),
      name: this.nameHero,
      powers: this.powers.split(';'),
      img: this.img
    };
    this.vilains.push(this.theHero);
  }

  constructor() { }

  ngOnInit() {
  }

}
