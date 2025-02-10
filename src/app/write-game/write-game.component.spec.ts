import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteGameComponent } from './write-game.component';

describe('WriteGameComponent', () => {
  let component: WriteGameComponent;
  let fixture: ComponentFixture<WriteGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
