var messages = [];

function storeMessage(form) {
  messages.push(form.typemsg.value);
  saveMsg(form.typemsg.value);
   //write on a new line in the txtFile
  console.log(form.typemsg.value);
};

var currMsgLength = 0;

function displayMessage() {
  setInterval(function(){
    console.log("current" +currMsgLength);
    console.log("actual" + messages.length);
    loadPrevMsg(function(prevMessages){
      if (currMsgLength != prevMessages.length) {
          $.each(prevMessages, function(i, v) {
            if (i >= currMsgLength - 1) {
              $(".prevMessages").append('<div class = "message">' +
              '<p>' + v + '</p>' +
              '</div>');
              currMsgLength = currMsgLength + 1;
            }
          });
          
        
      }

    })
    
  }, 1000);

};