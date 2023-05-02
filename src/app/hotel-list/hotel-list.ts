import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
import { HotelListeService } from "./hotel-liste.services";

@Component({
    selector: 'app-hotel-list',
  templateUrl: "./hotel-list.html",
    styleUrls: ["./hotel.css"]
})

export class AppHotelListComponent implements OnInit {


  public title: string = 'Hotels List';
  public showBadge: boolean = false;
  public hotelFilter: string = '';
  public _filtedList: IHotel[] = [];
  public messageRating: string | undefined;
  public hotels: IHotel[] = [];

  constructor(private hotelList: HotelListeService) {

  }

  ngOnInit(): void {
     this.hotels = this.hotelList.getHotel();
     this._filtedList = this.hotels;
  }

  public get filtedList(): IHotel[] {
    let response = this.hotels.filter(e => JSON.stringify(e).toLowerCase().includes(this.hotelFilter.toLowerCase()));
    return response;
  }

  public toogleShowBug() {
    this.showBadge = !this.showBadge;
  }

  public displayRating(message: string) {
    this.messageRating = message;
  }



}
