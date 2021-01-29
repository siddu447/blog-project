import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  details=[]
  constructor(public dataservice:DataService) { }

  ngOnInit() {
    this.getData();
  }
getData() {
        this.details = this.dataservice.getData();
    }
}
