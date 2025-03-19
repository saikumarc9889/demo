import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftDetailsComponent } from './nav-left-details.component';

describe('NavLeftDetailsComponent', () => {
  let component: NavLeftDetailsComponent;
  let fixture: ComponentFixture<NavLeftDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLeftDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLeftDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
