import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgNgLibraryComponent } from './wg-ng-library.component';

describe('WgNgLibraryComponent', () => {
  let component: WgNgLibraryComponent;
  let fixture: ComponentFixture<WgNgLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WgNgLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WgNgLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
