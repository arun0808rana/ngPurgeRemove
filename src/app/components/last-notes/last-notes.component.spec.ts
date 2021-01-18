import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNotesComponent } from './last-notes.component';

describe('LastNotesComponent', () => {
  let component: LastNotesComponent;
  let fixture: ComponentFixture<LastNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
