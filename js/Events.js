// https://www.w3schools.com/jsref/obj_mouseevent.asp

var keydown = {
    char: "",
    code: "",
    alt: false,
    ctrl: false,
    shift: false,
}
var keypress = {
    char: "",
    code: "",
    alt: false,
    ctrl: false,
    shift: false,
}
var keyup = {
    char: "",
    code: "",
    alt: false,
    ctrl: false,
    shift: false,
}
var mouse = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
}
var mousedown = {
    button: 0,
    buttos: 0,
    which: 0,
}
var mouseup = {
    button: 0,
    buttos: 0,
    which: 0,
}
var mouseX = 0;
var mouseY = 0;

document.onmousemove = Mouse;

function Mouse(e) {
    mouseX = e.screenX;
    mouseY = e.screenY;
    mouse.clientX = e.clientX;
    mouse.clientY = e.clientY;
    mouse.pageX = e.pageX;
    mouse.pageY = e.pageY;
    //console.log(mouse.pageX);
}
document.onmousedown = Mousedown;

function Mousedown(e) {
    mousedown.which = e.which;
    mousedown.button = e.button;
    mousedown.buttons = e.buttons;
    //console.log(e.button);
}
document.onmouseup = Mouseup;

function Mouseup(e) {
    mouseup.which = e.which;
    mouseup.button = e.button;
    mouseup.buttons = e.buttons;
    //console.log(e.button);
}
document.body.onkeydown = Keydown;

function Keydown(e) {
    keypress.code = e.which;
    keypress.char = e.key;
    keypress.alt = e.altKey;
    keypress.shift = e.shiftKey;
    keypress.ctrl = e.ctrlKey;
    console.log(e.key);
}
document.body.onkeypress = Keypress;

function Keypress(e) {
    keypress.code = e.which;
    keypress.char = e.key;
    keypress.alt = e.altKey;
    keypress.shift = e.shiftKey;
    keypress.ctrl = e.ctrlKey;
    //console.log(e.shiftKey);
}
document.body.onkeyup = Keyup;

function Keyup(e) {
    keyup.code = e.which;
    keyup.char = e.key;
    keyup.alt = e.altKey;
    keyup.shift = e.shiftKey;
    keyup.ctrl = e.ctrlKey;
    //console.log(e.ctrlKey);
}
//document.body.onkeydown = "Key(event)";
