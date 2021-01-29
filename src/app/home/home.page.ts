import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data = [];


  constructor(public dataService:DataService,private navCtrl: NavController ) {}
  ngOnInit() {
        this.getData();
        
    }
    getMoreDetails()
    {
      this.navCtrl.navigateForward('/profile')
    }
     getData() {
        this.data = this.dataService.getData();
    }

}
