import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) {

    
   }

  ngOnInit() {
    console.log('ionViewDidLoad TargetPage');
    var storedNames =localStorage.getItem("items");
    console.log(storedNames);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetPage');
    var storedNames =localStorage.getItem("names");
    console.log(storedNames);
}

}
