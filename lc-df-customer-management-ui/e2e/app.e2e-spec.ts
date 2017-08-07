import { LcDfCustomerManagementUiPage } from './app.po';

describe('lc-df-customer-management-ui App', () => {
  let page: LcDfCustomerManagementUiPage;

  beforeEach(() => {
    page = new LcDfCustomerManagementUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
