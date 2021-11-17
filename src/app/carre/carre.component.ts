import { Component, EventEmitter, OnInit,Output} from '@angular/core';



@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})

export class CarreComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Output() BackgroundColorEvent = new EventEmitter<string>();

  public getBgColor(color?: string){
    this.BackgroundColorEvent.emit(color);
        
  }
}
