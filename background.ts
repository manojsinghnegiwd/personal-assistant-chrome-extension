chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    getTabContent(tabId);
  }
});

async function getTabContent(tabId: number) {
  const tab = await chrome.tabs.get(tabId);
  const content = await chrome.scripting.executeScript({
    target: { tabId },
    func: () => document.body.innerText,
  });
  return content;
}