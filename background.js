function saveWorkspace(workspaceName, tabs) {
  chrome.storage.local.set({ [workspaceName]: { tabs: tabs} });
}

function loadWorkspace(workspaceName) {
  chrome.storage.local.get([workspaceName], function(result) {
    if (result[workspaceName]) {
      result[workspaceName].tabs.forEach(tab => {
        chrome.tabs.create({ url: tab.url });
      });
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveWorkspace") {
    chrome.tabs.query({}, function(tabs) {
      saveWorkspace(request.workspaceName, tabs);
    });
  } else if (request.action === "loadWorkspace") {
    loadWorkspace(request.workspaceName);
  }
});