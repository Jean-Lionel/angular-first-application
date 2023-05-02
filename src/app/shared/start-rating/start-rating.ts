import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector : 'app-start-rating',
  templateUrl: "./start-rating.html",
  styleUrls : ["./start-rating.css"],
})
export class StartRating implements OnChanges{
  public starWidth: number = 0;
  @Input()
  public rating : number = 2;

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5;
  }

  @Output()
  public StartRatingClick : EventEmitter<string> = new EventEmitter<string>();

  public sendRating(): void {
    this.StartRatingClick.emit(`La note est de ${this.rating}`);
   }

}
