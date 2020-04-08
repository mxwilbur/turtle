import { Component, Inject, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})


export class AppComponent implements OnInit {
  title = 'Turtle Krawl 5K Virtual Race';
  isAuthenticated: boolean;
  
  constructor(private db:AngularFireDatabase, 
    public router: Router) {   
  }  

  ngOnInit() {
    this.db.list('/accts').valueChanges()
                         .subscribe(accts=>console.log(accts));
  }

}
