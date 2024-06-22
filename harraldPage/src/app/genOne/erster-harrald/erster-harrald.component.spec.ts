import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsterHarraldComponent } from './erster-harrald.component';

describe('ErsterHarraldComponent', () => {
  let component: ErsterHarraldComponent;
  let fixture: ComponentFixture<ErsterHarraldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErsterHarraldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErsterHarraldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
