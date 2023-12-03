import { TestBed } from '@angular/core/testing';

import { MessagePopupService } from './message-popup.service';

describe('MessagePopupService', () => {
  let service: MessagePopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagePopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
