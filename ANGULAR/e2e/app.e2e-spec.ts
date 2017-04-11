import { CrmPrototypeAngularPage } from './app.po';

describe('crm-prototype-angular App', function() {
  let page: CrmPrototypeAngularPage;

  beforeEach(() => {
    page = new CrmPrototypeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
