import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private af: AngularFirestore , private as: AuthService) { }
  addNewUser(id, name, address){
    return this.af.doc('users/' + id).set({
      name,
      address
    })
  }
  getUserData() {
    return this.af.doc('users/' + this.as.userId).valueChanges()
  }
}
