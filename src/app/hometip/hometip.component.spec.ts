import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometipComponent } from './hometip.component';

describe('HometipComponent', () => {
  let component: HometipComponent;
  let fixture: ComponentFixture<HometipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
