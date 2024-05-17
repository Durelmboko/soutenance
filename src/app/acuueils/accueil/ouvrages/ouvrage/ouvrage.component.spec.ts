import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvrageComponent } from './ouvrage.component';

describe('OuvrageComponent', () => {
  let component: OuvrageComponent;
  let fixture: ComponentFixture<OuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
