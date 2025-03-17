import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetslistComponent } from './petslist.component';

describe('PetslistComponent', () => {
  let component: PetslistComponent;
  let fixture: ComponentFixture<PetslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetslistComponent]
    });
    fixture = TestBed.createComponent(PetslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
