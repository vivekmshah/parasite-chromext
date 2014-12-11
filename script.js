chrome.extension.onRequest.addListener(toggleSidebar);

var sidebarOpen = false;

function toggleSidebar() {

	if(sidebarOpen) {
		var el = document.getElementById('wndx-sidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}

	else {
		var sidebar = document.createElement('div');
		sidebar.id = "wndx-sidebar";

		var xhr = new XMLHttpRequest();
		// xhr.open('GET', '//fast-ocean-4567.herokuapp.com/wndx.html', true);
		xhr.open('GET', '//localhost:3000/wndx.html', true);

		xhr.send();

		xhr.onreadystatechange = function() {
		    if (this.readyState !== 4) return;
		    if (this.status !== 200) return;
		    document.getElementById('wndx-sidebar').innerHTML = this.responseText;

				var head = document.getElementsByTagName('head').item(0);
		    var script = document.createElement('script');
		    script.setAttribute('type', 'text/javascript');
		    script.setAttribute('src', '//localhost:3000/wndx.js');
		    head.appendChild(script);
		};

		document.body.appendChild(sidebar);
		sidebarOpen = true;

	}
}