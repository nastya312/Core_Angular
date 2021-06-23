import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidpageComponent } from './vidpage.component';

describe('VidpageComponent', () => {
  let component: VidpageComponent;
  let fixture: ComponentFixture<VidpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
