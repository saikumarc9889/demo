import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintainceComponent } from './under-maintaince.component';

describe('UnderMaintainceComponent', () => {
  let component: UnderMaintainceComponent;
  let fixture: ComponentFixture<UnderMaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderMaintainceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderMaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
