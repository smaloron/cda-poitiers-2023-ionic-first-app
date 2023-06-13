import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  foodList: Array<{ name: string, type: string }> = [
    { name: 'Framboise', type: 'fruit' },
    { name: 'Aubergine', type: 'légume' },
    { name: 'Carotte', type: 'légume' },
    { name: 'Panais', type: 'légume' },
    { name: 'Ananas', type: 'fruit' },
  ];

  formInput = { name: '', type: '' };
  editedItemIndex: number | null = null;

  constructor() { }

  ngOnInit() {
  }

  isInputValid() {
    this.formInput.name = this.formInput.name.trim();
    this.formInput.type = this.formInput.type.trim();
    if (this.formInput.name === '' || this.formInput.type === '') {
      return false;
    }

    return true;
  }

  processForm() {
    if (this.isInputValid()) {
      if (this.editedItemIndex === null) {
        this.foodList.push(this.formInput);
      } else {
        const item = this.foodList[this.editedItemIndex];
        item.name = this.formInput.name;
        item.type = this.formInput.type;
        this.editedItemIndex = null;
      }

      this.formInput = { name: '', type: '' };
    }
  }

  cancelForm() {
    this.formInput = { name: '', type: '' };
    this.editedItemIndex = null;
  }

  deleteFood(index: number) {
    this.foodList.splice(index, 1);
  }

  hydrateForm(index: number, data: { name: string, type: string }) {
    this.editedItemIndex = index;
    this.formInput.name = data.name;
    this.formInput.type = data.type;
  }

}
