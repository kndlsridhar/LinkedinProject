import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedaccessComponent } from './unauthorizedaccess.component';

describe('UnauthorizedaccessComponent', () => {
  let component: UnauthorizedaccessComponent;
  let fixture: ComponentFixture<UnauthorizedaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedaccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
