import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosEnglishComponent } from './projetos-english.component';

describe('ProjetosEnglishComponent', () => {
  let component: ProjetosEnglishComponent;
  let fixture: ComponentFixture<ProjetosEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
