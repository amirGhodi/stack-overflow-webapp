import { TestBed } from '@angular/core/testing';

import { SearchQuestionService } from './search-question.service';

describe('SearchQuestionService', () => {
  let service: SearchQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
