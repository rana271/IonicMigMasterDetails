import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController,NavParams} from "@ionic/angular";
import { Router } from '@angular/router';
//import { DetailsPage } from '../details/details';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,

})
export class ListPage {
  items: any[];
  username:any;
  constructor(public navCtrl: NavController,private router: Router) {
    this.items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
  }

  ionViewDidLoad() {
    //this.username=this.navParams.get('param1');
    console.log('ionViewDidLoad ListPage');
  }
  showDetails(item:any) {
   // localStorage.setItem("item",this.items);
   var items = [];

localStorage.setItem("items", JSON.stringify(this.items));
    this.router.navigate(['/details']);
  }
}
