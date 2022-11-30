import { Component, Output } from '@angular/core';
import Login from './Login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Grocery';
  regCategoryFlag: Boolean = false;
  regProductFlag: Boolean = false;

  mycartflag: boolean = false;
  homeflag: boolean = true;
  adminflag: boolean = false;
  signupsignin: boolean = false;

  @Output()
  LoggedUserName: any = '';

  activateSignInOrCart(s: string) {
    if (s != '') {
      this.activateCart(s);
    } else {
      this.homeflag = false;
      this.signupsignin = true;
    }
  }
  authenticate(s: any) {
    this.homeflag = true;
    this.signupsignin = false;
    this.LoggedUserName = s;
    console.log(this.LoggedUserName);
  }

  @Output()
  usernameforcart: string = '';
  activateCart(username: any) {
    this.mycartflag = true;
    this.homeflag = false;
    this.usernameforcart = username;
  }
}
