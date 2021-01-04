import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  code: any;
  param: any;
  action: any;
  mode: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {


  }

  ngOnInit(){

    this.param = this.route.queryParams.subscribe(params=> {
      this.code = params.oobCode
      console.log(this.code)
    })

    this.action = this.route.queryParams.subscribe(action=> {
      this.mode = action.mode;
      console.log(this.mode)
    })


    console.log(this.mode)

    switch (this.mode){
      case 'resetPassword':
        this.router.navigate(['password-recovery'], {queryParams:{ oobCode: this.code} })
        console.log("1")
        break;
      case 'recoverEmail':
        this.router.navigate(['recovermail'], {queryParams:{ oobCode: this.code} })
        console.log("2")
        break;
      case 'verifyEmail':
        this.router.navigate(['verify-email'], {queryParams:{ oobCode: this.code} })
        console.log("3")
        break;

      default:
        console.log("invalid mode")

    }


    

  }

}
