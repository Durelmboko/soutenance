import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmpruntComponent } from './liste-emprunt.component';

describe('ListeEmpruntComponent', () => {
  let component: ListeEmpruntComponent;
  let fixture: ComponentFixture<ListeEmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEmpruntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
