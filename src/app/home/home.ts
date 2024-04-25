import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from "@ionic/angular";
import { Router } from '@angular/router';
import { TargetPage } from "../target/target";
//import { TargetPage } from "../target/target";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,

})
export class HomePage {
  username: any = "";
  dept: any = "";
  constructor(private router: Router) {}
  goToPage() {
    console.log(this.username + this.dept);
    this.router.navigate(['/target',{ queryParams: { user: this.username,dept:this.dept }}]);
    // this.navCtrl.push(TargetPage, { param1: this.username, param2: this.dept });

  }
}
