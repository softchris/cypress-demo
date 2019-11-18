import { Component } from '@angular/core';

interface Hero {
  name: string,
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HeroesApp';
  heroes: Array<Hero> = [{
    name: 'Ironman',
    id: 1
  },
  {
    name: 'Captain Marvel',
    id: 2
  }]

  addHero(hero) {
    this.heroes = [...this.heroes, { name: hero, id: this.heroes.length + 1 }];
  }


  update(hero: Hero) {
    this.heroes = this.heroes.map(h => {
      if(h.id === hero.id) {
        return {...hero, name: hero.name};
      }
      return h;
    }) 
  }

  remove(hero: Hero) {
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
  }
}
