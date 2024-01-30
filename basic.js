
const title_techs = [
    "Technology",
    "Electronics",
    "Internet",
    "AI",
    "Mixed Reality",
    "__________",
    "Computer",
    "Coding",
    "Arduino",
    "Micro Controller",
    "Media",
    "Degital Image",
    "Data",
    "Interaction",
    "Screen",
];

let tech_span = document.getElementById("tech-span");
let mouse_offset = 0;
window.addEventListener('mousemove', function (e) {
    x = Math.abs(event.movementX);
    y = Math.abs(event.movementY);
    mouse_offset += x + y;

    // console.log(mouseOffset);
    if (mouse_offset > 200) {
        rand_techs = title_techs[Math.floor(Math.random()*title_techs.length)];
        tech_span.innerHTML = rand_techs;
        mouse_offset = 0;
    }
});

let touch_e_count = 0;
window.addEventListener('touchmove', function (e) {
    touch_e_count += 1;
    // console.log(touch_e_count);
    if (touch_e_count > 5) {
        rand_techs = title_techs[Math.floor(Math.random()*title_techs.length)];
        tech_span.innerHTML = rand_techs;
        touch_e_count = 0;
    }
});

var event_tab_btn = document.querySelector('#event-tab');
var event_tab = new bootstrap.Tab(event_tab_btn);
