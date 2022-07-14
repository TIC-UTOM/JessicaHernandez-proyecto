import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinombreComponent } from './minombre.component';

describe('MinombreComponent', () => {
  let component: MinombreComponent;
  let fixture: ComponentFixture<MinombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
