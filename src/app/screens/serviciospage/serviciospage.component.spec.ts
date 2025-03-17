import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciospageComponent } from './serviciospage.component';

describe('ServiciospageComponent', () => {
  let component: ServiciospageComponent;
  let fixture: ComponentFixture<ServiciospageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciospageComponent]
    });
    fixture = TestBed.createComponent(ServiciospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
