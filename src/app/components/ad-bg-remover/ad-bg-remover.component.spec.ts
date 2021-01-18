import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBgRemoverComponent } from './ad-bg-remover.component';

describe('AdBgRemoverComponent', () => {
  let component: AdBgRemoverComponent;
  let fixture: ComponentFixture<AdBgRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBgRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBgRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
