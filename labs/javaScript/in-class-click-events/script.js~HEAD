window.onload = function() {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var info = document.getElementById("information");
     // first event listener:
    button1.addEventListener("click", function(event) {
    alert('you have clicked button one');
  });

  // second event listener:
    button2.addEventListener("click", function(event) {
    // make the node first
        var newPTag = document.createElement("p");
    
    // add the text to that node via the innerHTML method
        newPTag.innerHTML = "A click event is essentially tying a function (as a callback) to an element and " +
    "specifying what action needs to happen to trigger or call/invoke that function (" +
    "callback).";

    // append that node to the div
        info.appendChild(newPTag);
  });

    button3.addEventListener("click", function(event) {
    // find node to remove
        var pToRemove = document.querySelector("p");

    // use removeChild method to take it out of the information div
        info.removeChild(pToRemove); 
  });
}