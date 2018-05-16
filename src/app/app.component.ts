import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  characters: Character[];

  constructor(private starwarsService: StarwarsService) {
  }

  ngOnInit() {
    this.starwarsService.getCharacters()
      .subscribe(response => this.characters = response.results);
  }

}
