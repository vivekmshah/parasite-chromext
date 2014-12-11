console.log('Starting bg process');

chrome.tabs.getSelected(null, function(tab) {
	chrome.pageAction.show(tab.id);
	console.log('The page action is now visible on tab #' + (tab.index+1));
});

chrome.tabs.onUpdated.addListener(function(tabID) {
	chrome.pageAction.show(tabID);
	console.log('The page action is visible on tab #' + tabID + 'that has just been updated');
});

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id, {callFunction: "toggleSidebar"}, function(){});
		console.log('Sidebar is displayed for' + tab);	
	});
});