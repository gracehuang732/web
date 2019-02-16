// JavaScript Document
function hover() {
	$(".box").hover(function(txtFile){
		$(this).children(".description").show();
	}, function() {
		$(this).children(".description").hide();
	});
};
function loadFiles(txtFile) {
	var xmlhttp, filetxt;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			filetxt = xmlhttp.responseText;
			var lines = filetxt.split("\n");
			$.each(lines, function(i, v) {
				imgDesc = v.split(", ");
				$(".imageGallery").append(
					'<div class = "box">' +
					// '<figure class = "tint">' +
				'<a href="' + imgDesc[1] +
				'" data-lightbox="' + imgDesc[0] + '" data-title="' + 	imgDesc[2] + '">' +
				'<img class = "' + imgDesc[0] + '" src = "' + 
				imgDesc[1] + '">' + "\n" + '</a>' +
				// '</figure>' + 
				'<p class = "description">' + 
				imgDesc[2] + '</p>' +
				'</div>');
				
				
			});
		}
		hover();
	}
	xmlhttp.open("GET", txtFile, true);
	xmlhttp.send();
}
function loadVideoFiles(txtFile) {
	var xmlhttp, filetxt;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			filetxt = xmlhttp.responseText;
			var lines = filetxt.split("\n");
			$.each(lines, function(i, v) {
				imgDesc = v.split(", ");
				$(".imageGallery").append('<div class = "box">' +
				'<a href = "' + imgDesc[3] + '">' +
				'<figure class = "tint">' +
				'<img class = "' + imgDesc[0] + '" src = "' + 
				imgDesc[1] + '">' + "\n" +
				'</figure>' + 
				'</a>' +
				'<p class = "description">' + 
				imgDesc[2] + '</p>' +
				'</div>');
			});
		}
		hover();
	}
	xmlhttp.open("GET", txtFile, true);
	xmlhttp.send();
}

function loadCodeFiles(txtFile) {
	var xmlhttp, filetxt;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			filetxt = xmlhttp.responseText;
			var lines = filetxt.split("\n");
			$.each(lines, function(i, v) {
				imgDesc = v.split("; ");

								

				$(".imageGallery").append('<div class = "codeEntry ' + imgDesc[1] +
				'"><div class = "box ' + imgDesc[1] +
				'">' +
				'<a href = "' + imgDesc[4] + '">' +
				'<img class = "' + imgDesc[0] + '" src = "' + 
				imgDesc[2] + '">' + "\n" +
				'</a>' +
				'<div class = "descriptionTitle">' + 
				imgDesc[3] + '</div>' + '</div>' + 
				'<div class = "codeTitle"><h1>' + 
				imgDesc[3] + 
				'</h1><div class = "codeDescription"><p>' + 
				imgDesc[5] + '</p></div>' + '<div class = "codeLangs"><p>' + 
				imgDesc[6] + '</p></div>' +
				'</div>');
			});
		}
		hover();
	}
	xmlhttp.open("GET", txtFile, true);
	xmlhttp.send();
}