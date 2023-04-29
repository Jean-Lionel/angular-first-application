import { Component } from "@angular/core";


@Component({
    selector: "app-root",
    template: `<h1>{{title}}</h1>`,
    styleUrls : ["./app.component.css"],

})
export class AppComponent{
    title: string = "Je suis un Millionnaire";
}
