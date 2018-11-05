import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDebugComponent } from './player-debug.component';

describe('PlayerDebugComponent', () => {
  let component: PlayerDebugComponent;
  let fixture: ComponentFixture<PlayerDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
