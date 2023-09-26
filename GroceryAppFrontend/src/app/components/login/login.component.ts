import { Component } from '@angular/core';
import{FormBuilder,FormControl,Validators,FormGroup,ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  textMess='';
  alertClass='';
  userModel=new User();

   constructor(private fb: FormBuilder,public authSer:AuthGuardService,public router:Router){
 
    }

   loginForm=this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(6)]]
   })
   
  
   get email(){
    return this.loginForm.get('email')
   }
   get password(){
    return this.loginForm.get('password')
   }
   
   loginHandler(){
  this.userModel.Email=this.email!.value!;
  this.userModel.Password=this.password!.value!;
  this.authSer.login(this.userModel).subscribe(
    (res: any) => {
      if(res.status=="success"){
     
      this.textMess = res.message;
      this.alertClass = "alert alert-success";
      localStorage.setItem('token', res.user.id);
      localStorage.setItem('user', JSON.stringify(res.user));
         this.router.navigateByUrl('/home');
      }else{
        this.textMess=res.message;
        this.alertClass="alert alert-danger";
      }
        },
        (error) => {
          this.textMess="Invalid Username or Password";
          this.alertClass = "alert alert-danger";
        }
      );
    } 
}
