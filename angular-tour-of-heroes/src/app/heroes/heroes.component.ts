import { Component } from '@angular/core';
import { UpperCasePipe, NgIf, NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
