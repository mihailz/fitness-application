import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }
}
