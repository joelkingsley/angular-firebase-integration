import { Component } from '@angular/core';
import { AngularFireDatabase, ChildEvent } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-poc';

  trains: any[];

  constructor(private db: AngularFireDatabase) {
    this.getAllTrains();
  }

  getAllTrains() {
    this.db.list('/trains').valueChanges().subscribe(trains => {
      this.trains = trains;
      console.log(this.trains);
    });
  }
}
