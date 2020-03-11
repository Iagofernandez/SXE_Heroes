import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {auth} from "firebase";

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {
//usuario ya autenticado
  authUser = null;
  constructor(public miauth: AngularFireAuth) { }

  user = this.miauth.authState;

  login(){
    console.log('login!');
  }
  gitlogin(){
    console.log('github!');
    this.miauth.auth.signInWithPopup(new auth.GithubAuthProvider())
        .then(user=>{
          this.authUser=user.user;

        })
  }
  glogin(){
    console.log('google login!');
    this.miauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(user => {
      this.authUser = user.user;
      console.log('this.authUser: ', this.authUser);
    })
    .catch(error => console.log(error));
  }
  logout(){
    console.log('logout!');
    this.miauth.auth.signOut();
  }
}
