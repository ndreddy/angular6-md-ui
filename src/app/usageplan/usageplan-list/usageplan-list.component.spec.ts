import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageplanListComponent } from './usageplan-list.component';

describe('UsageplanListComponent', () => {
  let component: UsageplanListComponent;
  let fixture: ComponentFixture<UsageplanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageplanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
