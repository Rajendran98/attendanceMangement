import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  products: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
   this.httpClient.get("assets/faq.json").subscribe(data1 =>{
    console.log(data1);
    this.products = data1;
  })
  
  }

}
