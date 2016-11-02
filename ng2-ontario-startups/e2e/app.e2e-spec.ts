import { Ng2OntarioStartupsPage } from './app.po';

describe('ng2-ontario-startups App', function() {
  let page: Ng2OntarioStartupsPage;

  beforeEach(() => {
    page = new Ng2OntarioStartupsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
