console.log('🚀 shorten-amazon-url background script has been loaded.');

chrome.action.onClicked.addListener(async (tab) => {
  console.log('Extension icon clicked!');

  if (!tab.id) {
    console.error('Tab ID is undefined!');
    return;
  }

  chrome.tabs.sendMessage(tab.id, {action: "shortenUrl"}, function(response) {
    console.log('Response from content script:', response);
  });
});
