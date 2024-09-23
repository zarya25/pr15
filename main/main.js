"use strict";
document.addEventListener('DOMContentLoaded', function() {
    var colorBlock = document.getElementById('color-block');
    var startBtn = document.getElementById('start-btn');
    var stopBtn = document.getElementById('stop-btn');
  
    var intervalId;
  
    function changeColor() {
      var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      colorBlock.style.backgroundColor = randomColor;
    }
  
    startBtn.addEventListener('click', function() {
      intervalId = setInterval(changeColor, 500);
    });
  
    stopBtn.addEventListener('click', function() {
      clearInterval(intervalId);
    });
  });
  