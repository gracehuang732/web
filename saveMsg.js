function saveMsg($msg) {
    $.ajax({
    	type: "POST",
        url: "writeTxt.php",
        data: {"message": ($msg + "\n")},
        success: function (response, status) {
          console.log(response);
  		},
     	 error: function () {
          $('#output').html('Bummer: there was an error!');
     	 }
    });
 }



function loadPrevMsg(callback) {

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
			console.log("AYYAY");
			var messages = [];
			var lines = filetxt.split("\n");
			$.each(lines, function(i, v) {
				messages.push(v);
				console.log(v);
			});
			return callback(messages);
		}
	}
	xmlhttp.open("GET", "message1.txt", true);
	xmlhttp.send();
}