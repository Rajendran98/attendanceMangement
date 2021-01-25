import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {

  public emergency = false;
  constructor() { }

  ngOnInit(): void {
  }

  Enable()
  {
    this.emergency = true;
  }

  Disable()
  {
    this.emergency = false;
  }

}
