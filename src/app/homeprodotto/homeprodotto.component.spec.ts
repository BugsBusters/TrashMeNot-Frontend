import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprodottoComponent } from './homeprodotto.component';

describe('HomeprodottoComponent', () => {
  let component: HomeprodottoComponent;
  let fixture: ComponentFixture<HomeprodottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeprodottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
