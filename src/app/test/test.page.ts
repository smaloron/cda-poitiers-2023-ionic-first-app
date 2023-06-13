import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  public name = "Niels";
  age = 89;
  buttonColor = "primary"

  constructor() { }

  getOlder() {
    this.age++;
    if (this.age >= 100) {
      this.buttonColor = "danger";
    }
  }

  ngOnInit() {
  }

}
