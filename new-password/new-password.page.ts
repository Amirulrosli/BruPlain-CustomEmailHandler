import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from '../firebase';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {


  password: string =""
  isSubmitted = false;
  passwordForm: FormGroup
  code: any;
  param: any;

  public errorMessages = {

    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: 'Password should be at least 8 characters and includes one Uppercase, one lower case, one non-alphanumeric and one special case!' }
    ],


  }

  constructor(
    private formBuilder: FormBuilder,
    private alert: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {

    this.param = this.route.queryParams.subscribe(params=> {
      this.code = params.oobCode
      console.log(this.code)
    })

    this.passwordForm = this.formBuilder.group({

      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#$%^&()+/<>~`"^={}\\_-]).{8,}')
      ]],

    })

    
  }

  back(){
    this.location.back();
  }

  submit(){

    this.isSubmitted = true;

    if(!this.passwordForm.valid) {
      this.showAlert("Error","Please Check your details again!")
      return;

    } else {

     

      var auth = firebase.auth();

      const password = this.passwordForm.value.password;


      try{

        var accountEmail;
  
        auth.verifyPasswordResetCode(this.code).then(email => {
          accountEmail = email
    
          auth.confirmPasswordReset(this.code, password).then(resp=> {
            this.showAlert("Success","New Password has been updated!")
            this.router.navigate(['/success'])
            console.log("success")
          }).catch(error=> {
            console.log("error",error)
          });
        }).catch(error=> {
          this.showAlert("Session Expired","Plase try again")
          this.router.navigate(['/expired'])
          console.log(error)
        })
  
      } catch (error) {
        this.showAlert("Session Expired","Plase try again")
        this.router.navigate(['/expired'])
        console.log(error)
      }
      


    }

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
