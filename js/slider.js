// Get slider and playbutton
const slider = document.getElementById("timeSlider");
const playButton = document.getElementById("playButton");
const visual = document.getElementById("svgVisual");




// Set the initial value of the slider and its range
const minValue = 0;
const maxValue = 20000;
let sliderValue = minValue;
slider.min = minValue;
slider.max = maxValue;
slider.value = sliderValue;

// Set up a boolean variable to track whether the slider is currently playing
let isPlaying = true;

// Set up a function to toggle for the play/pause 
function togglePlaying(){
    isPlaying = !isPlaying; // Toggle the boolean variable

    if(isPlaying){
        document.getElementById("playpauseButton").src="img/pause.png";
    }
    else{
        document.getElementById("playpauseButton").src="img/play.png";
    }

}




// Define the function to update the slider value
function updateSlider() {
    // Increment the value by 10
    sliderValue += 10; // This can be changed to larger or smaller steps per 10 ms


    // Check if the value has exceeded the maximum value
    if (sliderValue > maxValue) {
        sliderValue = minValue; // Reset the value to the minimum value
    }

    // Update the slider value
    slider.value = sliderValue;

    //update the graph visual
    updateVisual();
}


// Start the interval timer to update the slider every 0.01 second (10ms)
setInterval(function () {
    if (isPlaying) { // Only update the slider if it's currently playing
        updateSlider();
    }
}, 10);

// Define function when user clicks on slider
slider.oninput = function () {
    sliderValue = this.value;

    isPlaying = false; // Set boolean value to false to stop playing

    //update the graph visual
    updateVisual();

}