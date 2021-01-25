import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecqurinComponent } from './secqurin.component';

describe('SecqurinComponent', () => {
  let component: SecqurinComponent;
  let fixture: ComponentFixture<SecqurinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecqurinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecqurinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
