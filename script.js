chrome.extension.onRequest.addListener(toggleSidebar);

var mainOpen = false;

function toggleSidebar() {

	if(mainOpen) {
		var el = document.getElementById('wndx-main');
		el.parentNode.removeChild(el);
		mainOpen = false;
	}

	else {
		console.log(window.location.href);
		var href = window.location.href;

		var regex = /:\/\/(.[^/]+)/;
		var domain = href.match(regex)[1]

		var sidebar = document.createElement('div');
		sidebar.id = "wndx-main";

		sidebar.innerHTML = "<iframe style ='position: fixed;right: 0;width:390px;height: 100%;' src='//fast-ocean-4567.herokuapp.com/notes?domain="+domain+"'>";
		
		sidebar.style.cssText = "\
			position:fixed!important;\
			top:0px!important;\
			right:0px!important;\
			width:auto!important;\
			height:100%!important;\
			z-index:999999!important;\
		";		

		document.body.appendChild(sidebar);

		mainOpen = true;

		};

	}