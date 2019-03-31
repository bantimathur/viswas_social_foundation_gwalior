import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
public item: any={};
ngOnIt(){
  this.item={
    title:'Viswas Social Foundation Gwalior',

  
  }

}
}
