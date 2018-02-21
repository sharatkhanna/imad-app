console.log('Loaded!');
//change the text contents

var element = document.getElementById('main-text');

element.innerHTML = "New Value";

var img = document.getElementById('madi');
var marginLeft = 0;
var moveRight = function() {
  marginLeft += 10;
  img.style.marginLeft = marginLeft + 'px';
};
    madi.onclick = function () {
    var interval = setInterval(moveRight, 100);  
};