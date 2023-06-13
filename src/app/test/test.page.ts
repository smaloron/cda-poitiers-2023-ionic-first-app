import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  person = {
    name: 'Brahé',
    firstName: 'Tycho',
    profession: '',
    skills: [],
    bio: '',
    gender: 'F',
    age: 30
  }

  buttonColor = "primary";
  hiddenForm = true;
  formIsValid = false;
  formIsTouched = false;

  constructor() { }

  getOlder() {
    this.person.age++;
    if (this.person.age >= 100) {
      this.buttonColor = "danger";
    }
  }

  validatePerson() {

    if (this.person.firstName === '') {
      return false;
    }
    if (this.person.name === '') {
      return false;
    }
    if (this.person.bio === '') {
      return false;
    }
    if (this.person.profession === '') {
      return false;
    }
    if (this.person.age < 20 || this.person.age > 80) {
      return false;
    }

    return true;
  }

  onSubmit() {
    this.formIsTouched = true;
    this.formIsValid = this.validatePerson();
  }

  ngOnInit() {
  }

}
