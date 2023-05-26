var before = document.getElementById("before");
var liner = document.getElementById("liner");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
var commands = [];

function newTab(link) {setTimeout(function () {window.open(link, "_blank");}, 500);}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;
        var before = document.getElementById("before");
        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

function BtnCmd(cmd) {
    terminal.innerHTML = '<a id="before"></a>';
    commands.push(cmd);
    git = commands.length;
    shell(cmd.toLowerCase());
}