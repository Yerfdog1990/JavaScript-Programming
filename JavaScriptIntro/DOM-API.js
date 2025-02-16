//Change textContent property in HTML
document.getElementById("paragraph").textContent = "Hello World added by DOM";

//Create a new HTML element programmatically
let newParagraph = document.createElement("p");
newParagraph.textContent = "Third paragraph added by DOM";
document.body.appendChild(newParagraph);