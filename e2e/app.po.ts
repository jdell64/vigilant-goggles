export class TestProjPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-proj-app h1')).getText();
  }
}
