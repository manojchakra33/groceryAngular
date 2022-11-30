import { Component, OnInit, Output } from '@angular/core';
import Product from '../Product';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  constructor(private util:UtilService) { }

  ngOnInit(): void {
  
  }

}
