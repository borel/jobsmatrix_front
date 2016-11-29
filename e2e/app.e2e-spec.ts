import { JobsmatrixFrontPage } from './app.po';

describe('jobsmatrix-front App', function() {
  let page: JobsmatrixFrontPage;

  beforeEach(() => {
    page = new JobsmatrixFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
