import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteaboutComponent } from './componenteabout.component';

describe('ComponenteaboutComponent', () => {
  let component: ComponenteaboutComponent;
  let fixture: ComponentFixture<ComponenteaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
