import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  userId: string = '';
  constructor(private afAuth: AngularFireAuth) { 
    this.user = afAuth.user;

  }


  signUp(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  logIn(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout(){
    return this.afAuth.auth.signOut();
  }
}

