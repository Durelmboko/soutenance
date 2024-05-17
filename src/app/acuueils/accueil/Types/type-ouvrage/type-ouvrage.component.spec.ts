import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOuvrageComponent } from './type-ouvrage.component';

describe('TypeOuvrageComponent', () => {
  let component: TypeOuvrageComponent;
  let fixture: ComponentFixture<TypeOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOuvrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
