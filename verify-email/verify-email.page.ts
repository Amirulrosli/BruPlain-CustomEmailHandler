import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from '../firebase';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  param: any;
  code: any;
  show: any = false;
  details = "Verifying Your Email...";

  

  constructor(
    private route: ActivatedRoute,
    private alert: AlertController,
    private router: Router
  ) { }

  ngOnInit() {

    this.param = this.route.queryParams.subscribe(params=> {
      this.code = params.oobCode
      console.log(this.code)
    })

    this.verifyEmail();

  }

  verifyEmail(){

    var app = firebase.initializeApp(config)
    var auth = app.auth();

    auth.applyActionCode(this.code).then(resp=> {

      this.details = "Email Verified";

      this.showAlert("Successful","Successfully verify your email");
      this.router.navigate(['/success'])
      this.show = true;

    }).catch(error=> {
      this.show = false;
      this.details = "Error Encountered When Verifying Your Email";

      this.showAlert("Error",error);

      this.router.navigate(['/expired']);
      

    })


  }



  async showAlert(header:string, message:string){
    const alert = await this.alert.create({

      header,
      message,
      buttons: ["Ok"]

    })

    await alert.present()
    

  }


}
