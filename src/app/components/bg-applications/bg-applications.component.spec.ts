import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgApplicationsComponent } from './bg-applications.component';

describe('BgApplicationsComponent', () => {
  let component: BgApplicationsComponent;
  let fixture: ComponentFixture<BgApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
