import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app'
import 'firebase/auth'


@Component({
  selector: 'app-auto-generated',
  templateUrl: './auto-generated.page.html',
  styleUrls: ['./auto-generated.page.scss'],
})
export class AutoGeneratedPage implements OnInit {

  generatedPassword: any;
  code: any;
  email: any;
  expired: any;
  data:any;
  uid: any;
  param: any;
  auth: any;

  constructor(
    private afstore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {

  

    this.param = this.route.queryParams.subscribe(params=> {
      this.code = params.oobCode
      console.log(this.code)
    })

      this.makeid(10);



      var auth = firebase.auth();


      this.changeUser(auth);


  }

  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.generatedPassword = result;
 }


 changeUser(auth){
  //  console.log(this.generatedPassword)

   

  // var functions = firebase.app().functions('us-central1')
  // const callable = functions.httpsCallable('updateUser');
  // const obs = callable({uid: this.uid, password: this.generatedPassword}).then(resp=> {
  //   console.log("nice")
  // })

    var accountEmail;

    try{

      console.log(this.code)
      console.log(this.generatedPassword)


      auth.verifyPasswordResetCode(this.code).then(email => {
        accountEmail = email
  
        auth.confirmPasswordReset(this.code, this.generatedPassword).then(resp=> {
          console.log("success")
        }).catch(error=> {
          console.log("error",error)
        });
      }).catch(error=> {
        this.router.navigate(['/expired'])
        console.log(error)
      })

    } catch (error) {
      this.router.navigate(['/expired'])
      console.log(error)
    }
    

    
 }

}