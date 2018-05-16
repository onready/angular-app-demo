import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterCardListComponent } from './character-card-list/character-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharacterCardListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
