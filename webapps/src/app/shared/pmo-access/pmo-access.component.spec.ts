import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmoAccessComponent } from './pmo-access.component';

describe('PmoAccessComponent', () => {
  let component: PmoAccessComponent;
  let fixture: ComponentFixture<PmoAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmoAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
