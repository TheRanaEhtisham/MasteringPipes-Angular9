import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: "BMW",
    model: "Roadster",
    year: "2020"
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value)
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value)
  }

  onInputChange(value: string) {
    this.name = value
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
