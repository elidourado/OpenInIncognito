document.addEventListener('DOMContentLoaded', function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    
    chrome.windows.create({"url": tab.url, "incognito": true});

  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
	
    chrome.windows.create({"url": tab.url, "incognito": true});
  
  });

});


chrome.contextMenus.create({
  id: 'openInIncognito',
  title: "Open In Incognito",
  contexts: ['page'],
});