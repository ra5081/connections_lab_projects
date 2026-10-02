
let count = 0;
let colorButton;
let bgColors = ["#43ef13", "#1062ef", "#ed1936"];
let choice = 0;
//steps required:
// 1. identify and select the button
let button;
button = document.getElementById('button');
console.log(button);

// 2. listen to event 'click on button'
button.addEventListener("click", function () {
    count++;
    document.getElementById('counter').innerHTML = count;
})

//button to change the bg coulor
colorButton = document.getElementById('button-color');
colorButton.addEventListener("click", function () {

    console.log("bruh");
    document.body.style.background = bgColors[choice];
    choice = (choice + 1) % 3;

}
)

// //check for scrolling
// window.addEventListener("scroll", function () {
//     document.body.style.background = "hsl(" + window.scrollY % 360 + "50%,50%)";
// });

//check for scrolling on the window
window.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    document.body.style.background = "hsl(" + window.scrollY% 360 + ",50%,50%)";
});