import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExtractionComponent } from './subject-extraction.component';

describe('SubjectExtractionComponent', () => {
  let component: SubjectExtractionComponent;
  let fixture: ComponentFixture<SubjectExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectExtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
