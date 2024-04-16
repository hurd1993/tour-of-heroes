import { Component } from '@angular/core';
import { UpperCasePipe, NgIf, NgFor } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
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

  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
