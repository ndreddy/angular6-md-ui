
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OpsNavComponent } from './ops-nav.component';

describe('OpsNavComponent', () => {
  let component: OpsNavComponent;
  let fixture: ComponentFixture<OpsNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [OpsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
