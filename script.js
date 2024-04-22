// These variables will capture the window size
let width = window.innerWidth;
let height = window.innerHeight;

const body = document.querySelector('body');

body.addEventListener("mousemove", function (e) {
    console.log("Mouse Moving!");
    console.log(`This is the type of event ${e.type}`);
    console.log(e);
    console.log(`This is the x: ${e.x}`);
    console.log(`This is the y: ${e.y}`);

    // Update the viewport width and height
    width = window.innerWidth;
    height = window.innerHeight;
    console.log(`Width: ${width} / Height: ${height}`);


    // Change the body's backgound color using the mouse position
    body.style.backgroundColor = `rgb(${Math.round(e.x * 255 / width)},0, ${Math.round(e.y * 255 / height)})`;

});
