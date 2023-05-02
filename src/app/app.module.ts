import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHotelListComponent } from './hotel-list/hotel-list';
import { FormsModule } from '@angular/forms';
import { ReplaceComma } from './shared/pipes/replace-commant';
import { StartRating } from './shared/start-rating/start-rating';

@NgModule({
  declarations: [
    AppComponent,
    AppHotelListComponent,
    ReplaceComma,
    StartRating,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
