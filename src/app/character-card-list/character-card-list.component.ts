import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-card-list',
  templateUrl: './character-card-list.component.html',
  styleUrls: ['./character-card-list.component.css']
})
export class CharacterCardListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private starwarsService: StarwarsService) {
  }

  ngOnInit() {
    this.starwarsService.getCharacters()
      .subscribe(({results}) => this.characters = results);
  }

}
