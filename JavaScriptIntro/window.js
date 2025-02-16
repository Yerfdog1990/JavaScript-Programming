//Using window.alert()
let message1 = "Windows.alert message";
window.alert(message1);
alert('Pause!');

//Using window.prompt()
let message2 = "Windows.prompt message";
let name = window.prompt(message2);
alert("Welcome " +name);

//Using window.confirm()
let message3 = "Windows.confirm message";
let answer = window.confirm(message3);
if (answer) {
    alert("You clicked OK");
} else {
    alert("You clicked Cancel");
}