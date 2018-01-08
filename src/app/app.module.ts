import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


  var firebaseConfig = {
    apiKey: "AIzaSyAZJgbiQuwXaUIyx0zyiQBD5tD346nTMVg",
    authDomain: "firestore-389db.firebaseapp.com",
    databaseURL: "https://firestore-389db.firebaseio.com",
    projectId: "firestore-389db",
    storageBucket: "firestore-389db.appspot.com",
    messagingSenderId: "184435011138"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
