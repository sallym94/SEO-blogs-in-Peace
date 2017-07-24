
window.onload = setTimeout(function() { 
	console.log("yep");
	document.body.className = document.body.className.replace("layout-hellobar","");

	var iframes = document.querySelectorAll('iframe.HB-Bar');
	for (var i = 0; i < iframes.length; i++) {
	    iframes[i].parentNode.removeChild(iframes[i]);
	}

}, 1000);
	