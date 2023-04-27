import { Component, OnInit } from '@angular/core';
import Hero from '../type/hero.type';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})


export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [
      // tslint:disable-next-line:max-line-length
      {id: 1, name: 'Batman', powers: ['Genius-level intellect', 'One of the Richest Man', 'Expert detective', 'Master tactician, strategist, and field commander'], img: 'https://media4.giphy.com/media/EMpPEre2PqFy8GkOZE/giphy.gif'},
      // tslint:disable-next-line:max-line-length
      {id: 2, name: 'Superman', powers: ['Natural strong force', 'The Man of Steel', 'Enhanced Vision', 'Super-Hearing', 'Solar Energy Absorption'], img: 'https://media.tenor.com/RsR7M34EAEgAAAAC/superman-flying.gif'},
      // tslint:disable-next-line:max-line-length
      {id: 3, name: 'Spiderman', powers: ['Agility', 'Superhuman strength, speed, agility, jump, reflexes, stamina, durability, coordination, and balance', 'Wall-climbing on the surfaces and ceilings', 'Master martial artist and hand-to-hand combatant'], img: 'https://i.pinimg.com/originals/ce/57/c4/ce57c4de9e1caf13aa3077a5de3f083e.gif'}
  ];

  theHero: Hero | null = null;

  nameHero: string |  null;
  powers: string |  null;
  img: string |  null;

  addHero(): void {
      this.theHero = {
          id: (this.heroes.length + 1),
          name: this.nameHero,
          powers: this.powers.split(';'),
          img: this.img,
      };
      this.heroes.push(this.theHero);
      this.nameHero = null;
      this.powers = null;
      this.img = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
