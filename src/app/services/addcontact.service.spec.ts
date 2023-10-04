import { TestBed } from '@angular/core/testing';

import { AddcontactService } from './addcontact.service';

describe('AddcontactService', () => {
  let service: AddcontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
