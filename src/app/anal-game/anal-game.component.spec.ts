import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalGameComponent } from './anal-game.component';


describe('AnalGameComponent', () => {
  let component: AnalGameComponent;
  let fixture: ComponentFixture<AnalGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
