import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionStatsComponent } from './conversion-stats.component';

describe('ConversionStatsComponent', () => {
  let component: ConversionStatsComponent;
  let fixture: ComponentFixture<ConversionStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
