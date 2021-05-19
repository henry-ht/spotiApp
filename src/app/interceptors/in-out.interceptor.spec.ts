import { TestBed } from '@angular/core/testing';

import { InOutInterceptor } from './in-out.interceptor';

describe('InOuInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InOutInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InOutInterceptor = TestBed.inject(InOutInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
