import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOuvrageComponent } from './liste-ouvrage.component';

describe('ListeOuvrageComponent', () => {
  let component: ListeOuvrageComponent;
  let fixture: ComponentFixture<ListeOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOuvrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
