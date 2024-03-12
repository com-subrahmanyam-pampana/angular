import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeOtherPageComponent } from './some-other-page.component';

describe('SomeOtherPageComponent', () => {
  let component: SomeOtherPageComponent;
  let fixture: ComponentFixture<SomeOtherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeOtherPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeOtherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
