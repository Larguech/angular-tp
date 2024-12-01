import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {
  defaultColor: string = 'lightgray';  
  currentColor: string = this.defaultColor;  

  
  changeColor(newColor: string) {
    this.currentColor = newColor || this.defaultColor;  }

  
  resetColor() {
    this.currentColor = this.defaultColor;
  }
}
