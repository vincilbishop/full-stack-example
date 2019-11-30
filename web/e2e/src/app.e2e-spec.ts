import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async (done) => {
    await page.navigateTo();
    expect(page.getTitleText()).toEqual('SpaceX Launches');
    done();
  });

  // TODO: Finish e2e tests

  xit('should refresh data', () => {

    /*
    Data Refresh
    Clicking the REFRESH icon should re-fetch the data set from the API according
    to the selected filters, and update the list
    */

  });

  xit('should filter "Land Success"', () => {

    /*
    “Land Success” if that property is truthy on the data object
    */

  });

  xit('should filter "Reused"', () => {

    /*
    “Reused” if the data object indicates any reused elements
    */

  });

  xit('should filter "With Reddit"', () => {

    /*
    “With Reddit” if the data object contains any non-null property of the
    convention “reddit_[something]”
    */

  });

  xit('should display Link Outs', () => {

    /*
    If the data object contains a URL to an external article, clicking the LINK icon on
    the corresponding row should open that article in a new tab
    */

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
