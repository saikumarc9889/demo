import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmoLoginComponent } from './pmo-login.component';

describe('PmoLoginComponent', () => {
  let component: PmoLoginComponent;
  let fixture: ComponentFixture<PmoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
