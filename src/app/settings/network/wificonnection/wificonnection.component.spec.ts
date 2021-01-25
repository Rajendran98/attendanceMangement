import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WificonnectionComponent } from './wificonnection.component';

describe('WificonnectionComponent', () => {
  let component: WificonnectionComponent;
  let fixture: ComponentFixture<WificonnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WificonnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WificonnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
