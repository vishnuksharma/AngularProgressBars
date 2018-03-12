import { AngularProgressBarsPage } from './app.po';

describe('angular-progress-bars App', () => {
  let page: AngularProgressBarsPage;

  beforeEach(() => {
    page = new AngularProgressBarsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
