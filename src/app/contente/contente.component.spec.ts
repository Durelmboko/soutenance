import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenteComponent } from './contente.component';

describe('ContenteComponent', () => {
  let component: ContenteComponent;
  let fixture: ComponentFixture<ContenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
