// A script for animation
// Get the object element by its id
var object = document.getElementById("object");
// Declare variables to store the object's position and speed
var x = 0; // horizontal position
var y = 0; // vertical position
var dx = 5; // horizontal speed
var dy = 5; // vertical speed
// Declare a variable to store the animation interval
var interval;

// Define a function to start the animation
function startAnimation() {
    // Set the interval to call the update function every 20 milliseconds
    interval = setInterval(update, 20);
}

// Define a function to stop the animation
function stopAnimation() {
    // Clear the interval
    clearInterval(interval);
}

// Define a function to update the object's position and style
function update() {
    // Get the container element by its id
    var container = document.getElementById("container");
    // Get the container's width and height
    var width = container.offsetWidth;
    var height = container.offsetHeight;
    
    // Check if the object reaches the left or right edge of the container
    if (x + dx < 0 || x + dx > width - object.offsetWidth) {
        // Reverse the horizontal direction
        dx = -dx;
        // Change the object's color to a random one
        object.style.color = getRandomColor();
    }
    
     // Check if the object reaches the top or bottom edge of the container
     if (y + dy < 0 || y + dy > height - object.offsetHeight) {
        // Reverse the vertical direction
        dy = -dy;
        // Change the object's color to a random one
        object.style.color = getRandomColor();
     }
     
     // Update the object's position by adding the speed values
     x += dx;
     y += dy;
     
     // Update the object's style by setting its left and top properties
     object.style.left = x + "px";
     object.style.top = y + "px";
}

// Define a function to generate a random color in hexadecimal format
function getRandomColor() {
    // Declare a variable to store the color string
    var color = "#";
    // Declare a variable to store the hexadecimal digits
    var digits = "0123456789ABCDEF";
    
    // Loop six times to generate
