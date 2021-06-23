import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpageComponent } from './serpage.component';

describe('SerpageComponent', () => {
  let component: SerpageComponent;
  let fixture: ComponentFixture<SerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
