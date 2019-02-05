import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPosterSliderComponent } from './movies-poster-slider.component';

describe('MoviesPosterSliderComponent', () => {
  let component: MoviesPosterSliderComponent;
  let fixture: ComponentFixture<MoviesPosterSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPosterSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPosterSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
