"use strict";
//Function for creating a dynamic CRN number 
function crnNumber() {
    var text = "";
    var possible = "123456789";
    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text + "A";
}
