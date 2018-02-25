//counter function

var button = document.getElementById('counter');
var counter = 50;
button.onclick = function () {
  
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};