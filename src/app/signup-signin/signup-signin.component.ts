import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Login from '../Login';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-signup-signin',
  templateUrl: './signup-signin.component.html',
  styleUrls: ['./signup-signin.component.css'],
})
export class SignupSigninComponent implements OnInit {
  constructor(private util: UtilService) {}

  ngOnInit(): void {}
  @Output()
  emitter = new EventEmitter<any>();
  username: string = '';
  password: string = '';
  data: any = '';
  login(f: NgForm) {
    let l: Login = new Login(this.username, this.password, '');
    let s = this.util.validateUser(l);
    s.subscribe((data) => {
      if (data == 'admin') {
        this.emitter.emit('admin');
        console.log('admin');
      } else if (data == '') {
        this.emitter.emit(l.userName);
        console.log('user');
      } else {
        alert('invalid');
      }
    });
  }
}
