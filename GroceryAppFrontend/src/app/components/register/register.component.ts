import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userModel=new User();
  textMess='';
  alertClass='';


  constructor(private authService:AuthGuardService,private router : Router){}
  onSubmitHandle(){
    console.log(this.userModel)
    //this.CalculateAge();
   this.authService.register(this.userModel).subscribe((res:any)=>{
    
   this.alertClass='alert alert-success';
   this.textMess="Registered Successfully";
   this.router.navigateByUrl("/login");
   

   },(error)=>{
     console.log(error);
     this.alertClass='alert alert-danger';
   this.textMess="Failed";
   })
  }
  // CalculateAge() {
  //   var dob = this.userModel.DateOfBirth;
  //    var de = new Date(dob?.toString);
  //   var today = new Date();
  //  console.log(today.toLocaleDateString());
  //  console.log(dob?.toLocaleDateString());
  // //  Date sukj=new Date(today).valueOf() - dob.;
  // //  var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
  //   // return age;
  // }
  

}

