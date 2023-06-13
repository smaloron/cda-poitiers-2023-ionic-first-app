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

  filteredList: Array<{ name: string, type: string }> = [];

  formInput = { name: '', type: '' };
  editedItemIndex: number | null = null;
  filterCriterion = 'tous';

  constructor() { }

  ngOnInit() {
    this.filterFood();
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
        this.filterFood();
      } else {
        const item = this.filteredList[this.editedItemIndex];
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
    this.filteredList.splice(index, 1);
  }

  hydrateForm(index: number, data: { name: string, type: string }) {
    this.editedItemIndex = index;
    this.formInput.name = data.name;
    this.formInput.type = data.type;
  }

  filterFood() {
    this.filteredList = this.foodList.filter((item) => {
      if (this.filterCriterion === 'tous') {
        return true;
      } else {
        return item.type === this.filterCriterion;
      }
    });

    console.log(this.filteredList);
  }

}
