const contextMenuItem =
{
  id: 'context-menu-save-gpt-chat',
  title: 'Save GPT Chat',
  contexts: ['all']
};

browser.contextMenus.create(contextMenuItem);

browser.contextMenus.onClicked.addListener((info, tab) =>
{
  if(info.menuItemId === 'context-menu-save-gpt-chat')
  {
    browser.tabs.executeScript({
      file: "gptsave.js"
    });
  }
});

browser.browserAction.onClicked.addListener((tab) =>
{
    browser.tabs.executeScript({
      file: "gptsave.js"
    });
});