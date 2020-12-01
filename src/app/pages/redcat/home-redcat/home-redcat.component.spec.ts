import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRedcatComponent } from './home-redcat.component';

describe('HomeRedcatComponent', () => {
  let component: HomeRedcatComponent;
  let fixture: ComponentFixture<HomeRedcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRedcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRedcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
