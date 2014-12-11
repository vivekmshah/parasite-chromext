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

		// var container = document.createElement('div');
		// container.id = "wndx-container";

		// sidebar.appendChild(container);

		// var inputBox = document.createElement('input');
		// inputBox.id = "wndx-input";

		// sidebar.appendChild(inputBox);

		// var domainName = document.domain;
		// var domain = domainName.replace('www.','');

		// httpRequest = new XMLHttpRequest();
		// httpRequest.open('GET', '//fast-ocean-4567.herokuapp.com/api/notes?domain=' + domain, true);
		// httpRequest.send();

		// httpRequest.onreadystatechange = function(){
		// 	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
		// 		var myArr = JSON.parse(httpRequest.responseText);
		// 		// console.log(myArr);
		// 		container.innerHTML = stylize(myArr);
		// 	}
		// };

		var xhr = new XMLHttpRequest();
		xhr.open('GET', '//fast-ocean-4567.herokuapp.com/wndx.html', true);
		xhr.send();

		xhr.onreadystatechange = function() {
		    if (this.readyState !== 4) return;
		    if (this.status !== 200) return;
		    document.getElementById('wndx-sidebar').innerHTML = this.responseText;
		};

		sidebar.style.cssText = "\
			position:absolute;\
			top:0px;\
			right:0px;\
			width:400px;\
			height:100%;\
			background:#0e81ad;\
			color: white;\
			font-family: Sans-Serif;\
			z-index:1000000;\
			overflow: auto;\
		";

		document.body.appendChild(sidebar);
		sidebarOpen = true;
	}
}

function stylize(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i++) {
		out += '<h4>' + arr[i].description + '</h4><br>';
	}
	return out;
}