
 window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/Are sure Close this";
  
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage;                            //Webkit, Safari, Chrome
  });
  
$(function () {
    console.log("insi565de rem");
    
  });
 
  
  $(".dataView").html(localStorage.getItem('yourName'));