import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHotelListComponent } from './hotel-list/hotel-list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
        AppComponent,
      AppHotelListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
