import { TestBed } from '@angular/core/testing';

import { WgNgLibraryService } from './wg-ng-library.service';

describe('WgNgLibraryService', () => {
  let service: WgNgLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WgNgLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
