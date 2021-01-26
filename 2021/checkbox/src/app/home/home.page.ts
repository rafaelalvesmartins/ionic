import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public form = [
    { val: 'Rafael', isChecked: true },
    { val: 'Reenye', isChecked: false },
    { val: 'Wellington', isChecked: false }
  ];

 

  constructor() {}

  checkboxClick(e,val){
    console.log("Value checked:"+e.currentTarget.checked);
    console.log("Checkbox selecionado:"+val);
  }

}
