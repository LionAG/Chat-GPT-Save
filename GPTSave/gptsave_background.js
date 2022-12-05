browser.browserAction.onClicked.addListener((tab) =>
{
    browser.tabs.executeScript({
      file: "gptsave.js"
    });
});