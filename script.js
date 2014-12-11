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
		xhr.open('GET', 'http://localhost:3000/wndx.html', true);

		xhr.send();

		xhr.onreadystatechange = function() {
		    if (this.readyState !== 4) return;
		    if (this.status !== 200) return;
		    document.getElementById('wndx-sidebar').innerHTML = this.responseText;

				var head = document.getElementsByTagName('head').item(0);
		    var script = document.createElement('script');
		    script.setAttribute('type', 'text/javascript');
		    script.setAttribute('src', 'http://localhost:3000/wndx.js');
		    head.appendChild(script);

				var link = document.createElement('link');
				link.rel = 'stylesheet';
		    link.href = '//fonts.googleapis.com/css?family=Open+Sans';
		    link.type = 'text/css';
		    head.appendChild(link);

		};

		document.body.appendChild(sidebar);
		sidebarOpen = true;

	}
}