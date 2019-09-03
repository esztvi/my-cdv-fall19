document.getElementById('ed').innerHTML = "Homework 1!";
// var box = document.createElement("div");   // Create a <button> element
// box.className = "box";                   // Insert text
// document.body.appendChild(box);               // Append <button> to <body>

document.getElementById("myBtn").addEventListener("click", createThreeBoxes );

function test() {
  var box = document.createElement("div");   // Create a <button> element
  box.className = "box";                   // Insert text
  document.body.appendChild(box);   // Append <button> to <body>
}

function createThreeBoxes() {
var input_value = document.getElementById('data').value;
for (var i = 0; i < input_value; i++) {
  test();
}

}
