const slider = document.getElementById("timeSlider");
const playButton = document.getElementById("playButton");



// Set the initial value of the slider and its range
const minValue = 0;
const maxValue = 20000;
let value = minValue;
slider.min = minValue;
slider.max = maxValue;
slider.value = value;

// Set up a boolean variable to track whether the slider is currently playing
let isPlaying = true;

// Set up a click event listener for the play/pause button
playButton.addEventListener("click", function () {
    isPlaying = !isPlaying; // Toggle the boolean variable

    if (isPlaying) {
        playButton.textContent = "Pause"; // Update the button text to "Pause"
    } else {
        playButton.textContent = "Play"; // Update the button text to "Play"
    }
});



// Define the function to update the slider value
function updateSlider() {
    // Increment the value by 1
    value += 5;


    // Check if the value has exceeded the maximum value
    if (value > maxValue) {
        value = minValue; // Reset the value to the minimum value
    }

    // Update the slider value
    slider.value = value;

    //update the graph visual
    updateVisual();
}


// Start the interval timer to update the slider every 1 second (1000ms)
setInterval(function () {
    if (isPlaying) { // Only update the slider if it's currently playing
        updateSlider();
    }
}, 1);


slider.oninput = function () {
    value = this.value;

    isPlaying = false; // Set boolean value to false to stop playing

    playButton.textContent = "Play"; // Update the button text to "Play"

    //update the graph visual
    updateVisual();

}