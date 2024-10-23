// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "editable_page.html" });
  });
