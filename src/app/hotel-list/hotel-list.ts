import { Component } from "@angular/core";

@Component({
    selector: 'app-hotel-list',
    templateUrl : "./hotel-list.html",
})

export class AppHotelListComponent{
  public title: string = 'Hotels List';
  public showBadge: boolean = false;
  public hotelFilter: string = 'Mot';

  public toogleShowBug() {
    this.showBadge = !this.showBadge;
  }

  public hotels: any[] = [
    {
      hotelId: 1,
      hotelName: "Buea sweet life",
      description: "Belle vue au bord de la mer",
      price: 230.5,
      imageUrl: "assets/img/hotel-room.jpg",
      rating: 3.5
    },
    {
      "hotelId": 2,
      "hotelName": "Marakech",
      "description": "Profitez de la vue sur les montagnes",
      "price": 145.5,
      "imageUrl": "assets/img/the-interior.jpg",
      "rating": 5
    },
    {
      "hotelId": 3,
      "hotelName": "Abudja new look palace",
      "description": "Séjour complet avec service de voitures",
      "price": 120.12,
      "imageUrl": "assets/img/indoors.jpg",
      "rating": 4
    },
    {
      "hotelId": 4,
      "hotelName": "Cape town city",
      "description": "Magnifique cadre pour votre séjour",
      "price": 135.12,
      "imageUrl": "assets/img/window.jpg",
      "rating": 2.5
    }
  ];
}
