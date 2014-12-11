chrome.extension.onRequest.addListener(toggleSidebar);

var sidebarOpen = false;

function toggleSidebar() {

	if(sidebarOpen) {
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}

	else {
		var sidebar = document.createElement('div');
		sidebar.id = "mySidebar";

		var domainName = document.domain;
		var domain = domainName.replace('www.','');

		// console.log(document.domain);

		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if (httpRequest.readyState == 4 && httpRequest.status == 200) {
				var myArr = JSON.parse(httpRequest.responseText);
				console.log(myArr);
				sidebar.innerHTML = myFunction(myArr);
			}
		};

		console.log(domain);
		httpRequest.open('GET', '//fast-ocean-4567.herokuapp.com/api/notes?domain=' + domain, true);

		// httpRequest.open('GET', '//fast-ocean-4567.herokuapp.com/api/notes', true);
		httpRequest.send();

		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			left:0px;\
			width:20%;\
			height:110%;\
			background:white;\
			z-index:999999;\
		";
		
		document.body.appendChild(sidebar);
		sidebarOpen = true;
	}
}

function myFunction(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i++) {
		out += '<h4>' + arr[i].description + '</h4><br>';
	}
	return out;
}