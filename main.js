// alert("what the fuck?!");

// var match = document.querySelectorAll(".box");

var newElemnt = document.createElement("a");
// newElemnt.textContent = "Hello_World";
newElemnt.setAttribute("class", "box");
// Create the text node for anchor element.
var link = document.createTextNode("Google");
// Append the text node to anchor element.
newElemnt.appendChild(link);
// Set the title.
// newElemnt.title = "Go";
// Set the href property.
newElemnt.href = "https://www.google.com";
// Append the anchor element to the body.
document.body.appendChild(newElemnt);
