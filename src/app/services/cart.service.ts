import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Good } from '../Interfaces/goods.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private af: AngularFirestore , private as: AuthService) { }
  addToCart(data: Good){
    return this.af.collection(`users/${this.as.userId}/cart`).add(data);
  }
  getCart(){
    return this.af.collection(`users/${this.as.userId}/cart`).snapshotChanges();
  }
  delete(id){
    return this.af.doc(`users/${this.as.userId}/cart/${id}`).delete();
  }
  update(id, amount){
    return this.af.doc(`users/${this.as.userId}/cart/${id}`).update({ amount});
  }
}
