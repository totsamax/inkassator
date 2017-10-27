import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  
   constructor(public afd: AngularFireDatabase) { }
  
   getItems() {
     return this.afd.list('/barcodes/');
   }
  
   addItem(name) {
     this.afd.list('/barcodes/').push(name);
   }
  
   removeItem(id) {
     this.afd.list('/barcodes/').remove(id);
   }
 }
