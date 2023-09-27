import { formatDate } from '@angular/common';
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

  userModel = new User();
  textMess = '';
  alertClass = '';
  num: Number = 1;

  constructor(private authService: AuthGuardService, private router: Router) { }
  //Register Function
  onSubmitHandle() {
      if (this.CalculateAge()) {
      this.authService.register(this.userModel).subscribe((res: any) => {
        if (res.status == "success") {
          this.alertClass = 'alert alert-success';
          this.textMess = "Registered Successfully";
          this.router.navigateByUrl("/login");
        }
        else {
          this.alertClass = 'alert alert-danger';
          this.textMess = res.message;
        }
      }, (error: any) => {
        this.alertClass = 'alert alert-danger';
        this.textMess = error.message;
      })
    }
    else {
      this.alertClass = 'alert alert-danger';
      this.textMess = "User must be above 18 years old";
    }
  }

  //To check whether the user is above 18 years of age
  CalculateAge() {
    var dob = String(this.userModel.DateOfBirth);
    var currentDate = new Date();
    const cValue = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
    var year = dob.slice(0, 4);
    var month = dob.slice(5, 7);
    var day = dob.slice(8, 10);
    var PYr = cValue.slice(0, 4);
    var Pmonth = cValue.slice(5, 7);
    var Pday = cValue.slice(8, 10);
    var age = Number.parseInt(PYr) - Number.parseInt(year);
    var age_month = Number.parseInt(Pmonth) - Number.parseInt(month);
    var age_day = Number.parseInt(Pday) - Number.parseInt(day);

    if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
      return false;
    }
    return true;

  }


}

