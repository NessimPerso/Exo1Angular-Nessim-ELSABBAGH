import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ELSABBAGH-Nessim-exo1';
  public Bcolor : string ='';

public getColor(color:string){
  this.Bcolor = color;
}
}