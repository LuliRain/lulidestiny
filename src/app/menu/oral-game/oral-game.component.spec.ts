import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralGameComponent } from './oral-game.component';

describe('OralGameComponent', () => {
  let component: OralGameComponent;
  let fixture: ComponentFixture<OralGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OralGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OralGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
