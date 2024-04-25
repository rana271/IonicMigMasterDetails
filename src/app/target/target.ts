import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController} from "@ionic/angular";
import { ActivatedRoute,Route } from '@angular/router';
import { Router } from '@angular/router';
/**
 * Generated class for the TargetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-target',
  templateUrl: 'target.html',
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class TargetPage {

  constructor(public navCtrl: NavController,private route: ActivatedRoute,private router:Router) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetPage');
    this.route.queryParams.subscribe(params => {
      const id = params['user'];
      const d = params['dept'];
      const item=params['item'];
      //console.log(item.id);
      // Use the id query parameter...
    });
}
  goBack() {
    this.navCtrl.pop();
  }
  goList() {
    this.router.navigate(['/list']);
  }
}
