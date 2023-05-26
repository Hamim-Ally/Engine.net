var before = document.getElementById("before");
var liner = document.getElementById("liner");
var terminal = document.getElementById("terminal");
var sidebar = document.getElementById("left-sidebar");

// window.addEventListener("keyup", enterKey);

function openNav() {
    document.getElementById("left-sidebar").style.width = "242px";
    document.getElementById("main-window").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("left-sidebar").style.width = "0";
    document.getElementById("main-window").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

