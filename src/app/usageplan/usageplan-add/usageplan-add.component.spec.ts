import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageplanAddComponent } from './usageplan-add.component';

describe('UsageplanAddComponent', () => {
  let component: UsageplanAddComponent;
  let fixture: ComponentFixture<UsageplanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageplanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageplanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
