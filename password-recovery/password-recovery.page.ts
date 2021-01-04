import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ActivatedRoute, Router } from '@angular/router';


declare var require: any

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {

  password: any;
  email: any;
  code: any;
  uid:any;
  data:any;
  expired: boolean;
  param:any;



  constructor(
    private router: Router,
    private aff :AngularFireFunctions,
    private route: ActivatedRoute,
    private afstore: AngularFirestore
  ) { 

  }

  ngOnInit() {

    this.param = this.route.queryParams.subscribe(params=> {
      this.code = params.oobCode
      console.log(this.code)
    })


    // this.code = this.route.snapshot.paramMap.get('code');
    // this.email = this.route.snapshot.paramMap.get('id');

    // this.afstore.firestore.doc(`session/${this.code}`).get().then(doc => {
    //     if (doc.exists){
    //       this.expired = true;
    //       this.router.navigate(['/expired'])
    //       return true;
    //     } else {
    //       try{
    //         this.afstore.doc(`sessions/${this.code}`).set({
    //           session: this.code,
    //         })
    //       } catch (error){
    //         console.log("Cannot store session")
    //       }
    //     }
    // }).then(resp=> {


    //   const profile = this.afstore.collection('profiles');
    //   profile.ref.where("email","==",this.email).get().then(snapshot => {
  
    //     if (snapshot.empty){
    //       console.log("empty")
    //       return;
    //     }
  
  
    //     snapshot.forEach(doc=> {
    //       this.data = doc.data();
    //       this.uid = this.data.uid;
    //       console.log(this.uid)
    //     })
    //   })
  
    //   console.log(this.uid)
    //   const ff = require("firebase/functions")



    // })

    

   
    
  }

  autoPassword(){  

    this.router.navigate(['/auto-generated'],{queryParams: {oobCode: this.code}})
 
  }
  newPassword(){
    this.router.navigate(['/new-password'],{queryParams: {oobCode: this.code}})
  }





  // data="i6GqkKDHxsWIKhx3b2MxNah0E1v1"
  // password = "12345678"
  // var functions = firebase.app().functions('us-central1'); //

  // const callable = functions.httpsCallable('updateUser');

  // const obs = callable({ uid: data, password: password }).then(resp=> {
  //   console.log(resp)
  //   this.router.navigate(['/auto-generated'])
  // })

}
