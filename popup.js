chrome.tabs.getAllInWindow(null, function(tabList) {
	document.writeln(new Date() + "<br><br>");
	tabList.forEach(function(tab){
		document.writeln(tab.title + "<br>" + tab.url + "<br><br>");
	});
});
