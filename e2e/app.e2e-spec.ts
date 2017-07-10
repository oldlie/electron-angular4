import { RayMkReaderPage } from './app.po';

describe('ray-mk-reader App', () => {
  let page: RayMkReaderPage;

  beforeEach(() => {
    page = new RayMkReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
