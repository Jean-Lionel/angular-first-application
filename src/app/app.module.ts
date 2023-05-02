import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHotelListComponent } from './hotel-list/hotel-list';
import { FormsModule } from '@angular/forms';
import { ReplaceComma } from './shared/pipes/replace-commant';

@NgModule({
  declarations: [
    AppComponent,
    AppHotelListComponent,
    ReplaceComma,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
