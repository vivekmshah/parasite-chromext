chrome.extension.onRequest.addListener(toggleSidebar);

var mainOpen = false;

function toggleSidebar() {

	if(mainOpen) {
		var el = document.getElementById('wndx-main');
		el.parentNode.removeChild(el);
		mainOpen = false;
	}

	else {
		var sidebar = document.createElement('div');
		sidebar.id = "wndx-main";
		// sidebar.innerHTML = sidebar.innerHTML.replace("/</div>/",'</div><base target="_blank" href="//fast-ocean-4567.herokuapp.com/"/>');
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '//fast-ocean-4567.herokuapp.com/', true);

		xhr.send();

		xhr.onreadystatechange = function() {
		    if (this.readyState !== 4) return;
		    if (this.status !== 200) return;
		    var wndxInfo = document.getElementById('wndx-main');
		    wndxInfo.innerHTML = this.responseText;

				var head = document.getElementsByTagName('head').item(0);
		    var script = document.createElement('script');
		    script.setAttribute('type', 'text/javascript');
		    script.setAttribute('src', '//fast-ocean-4567.herokuapp.com/wndx.js');
		    head.appendChild(script);

		    var style = document.createElement('link');
		    style.setAttribute('type', 'text/css');
		    style.setAttribute('href', '//fast-ocean-4567.herokuapp.com/wndx.css');
		    style.setAttribute('rel', 'stylesheet');
		    head.appendChild(style);

			};
		
		// sidebar.style.cssText = "\
		// 	position:fixed;\
		// 	top:0px;\
		// 	right:0px;\
		// 	width:30%;\
		// 	height:110%;\
		// 	background:white;\
		// 	box-shadow:inset 0 0 1em black;\
		// 	z-index:999999;\
		// 	overflow:auto;\
		// ";

		document.body.appendChild(sidebar);


		};

		mainOpen = true;
	}
	
