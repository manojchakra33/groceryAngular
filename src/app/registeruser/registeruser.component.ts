import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Address from '../Address';
import Login from '../Login';
import User from '../User';
import UserForRegister from '../UserForRegister';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
})
export class RegisteruserComponent implements OnInit {
  constructor(private util: UtilService) {}

  emitter = new EventEmitter<String>();

  name: any;
  mobilenumber: any;
  addressline1: any;
  addressline2: any;
  city: any;
  state: any;
  country: any;
  zipcode: any;
  username: any;
  password: any;
  user: any;
  role: any;
  address: any;
  login: any;
  registerarray: any;

  response: any = '';

  ngOnInit(): void {}

  regForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z]{1,20}'),
    ]),
    mobilenumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{1,10}'),
    ]),
    addressline1: new FormControl('', [Validators.required]),
    addressline2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{1,6}'),
    ]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  register(f: NgForm) {
    let mobileNumber: string = this.mobilenumber.toString();
    let zipCode: string = this.zipcode.toString();

    console.log(typeof mobileNumber);
    let User: UserForRegister = new UserForRegister(
      0,
      this.name,
      mobileNumber,
      new Address(
        this.addressline1,
        this.addressline2,
        this.city,
        this.state,
        this.country,
        zipCode
      ),
      new Login(this.username, this.password, this.role)
    );
    console.log(User);
    let s = this.util.registerUser(User);
    s.subscribe((data) => {
      this.response = data;
      console.log(this.response);
      if (this.response === 'true') {
        alert('success');
      } else {
        alert('something wrong');
      }
    });
  }
}
