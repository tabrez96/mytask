import { AssignPage } from './app.po';

describe('assign App', () => {
  let page: AssignPage;

  beforeEach(() => {
    page = new AssignPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
