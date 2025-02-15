import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapeGameComponent } from './gape-game.component';

describe('GapeGameComponent', () => {
  let component: GapeGameComponent;
  let fixture: ComponentFixture<GapeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GapeGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GapeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
