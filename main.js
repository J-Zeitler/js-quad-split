var body = document.getElementById("body");

var W = window.innerWidth;
var H = window.innerHeight;

body.style.width = W + "px";
body.style.height = H + "px";
body.style.background = randomColor();
body.onclick = function() { splitInQuads(body) };
body.className = "quad";

function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function splitInQuads(parent) {
    var child, gandChild;
    parent.onclick = "";

    for(var i = 0; i < 2; ++i) {
        child = document.createElement("div");
        child.className = "quad vertical";

        for(var j = 0; j < 2; ++j) {
            grandChild = document.createElement("div");

            grandChild.style.background = randomColor();
            grandChild.className = "quad";

            grandChild.onclick = function() { var self = this; splitInQuads(self) };
            child.appendChild(grandChild);
        }
        
        parent.appendChild(child);
    }
}