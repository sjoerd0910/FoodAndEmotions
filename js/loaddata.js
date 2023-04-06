// Define variables for loading the data and storing the processed data
let rawData;
let finalArray = [];


// Define function to asynchronically load the data from the csv file
(async function () {
    // Put data from csv into rawData variable
    rawData = await d3.csv("data/data.csv");
    // Load data and make visual for the first time when loading web page
    loadData();
    makeVisual();

})()

// Define function to load the data every time the sliderValue changes based on its value and filters
function loadData() {
    // Define array to put every range of partticipants per drink
    let participantArray = [];
    
    // Define previous participant for loop
    let previousParticipant;

    // Define previous EventMarker for loop
    let previousEventMarker;

    // Define final array to build the visual scatterplot
    finalArray = [];

    // For each element in rawData
    for (let i = 0; i < rawData.length; i++) {
        // If the current participant is equal to the previous participant and if the current EventMarker is equal to the 
        // previous EventMarker, the current iteration can be added to the participantArray
        if (rawData[i].Participant == previousParticipant && rawData[i].EventMarker == previousEventMarker) {
            if (rawData[i].Gender == "Female" && femaleBox.checked){
                if (parseInt(rawData[i].Age) >= 18 && parseInt(rawData[i].Age) <= 25 && age1825Box.checked){
                    participantArray.push(rawData[i]);
                }
                else if (parseInt(rawData[i].Age) >= 26 && parseInt(rawData[i].Age) <= 35 && age2635Box.checked){
                    participantArray.push(rawData[i]);
                }
                else if (parseInt(rawData[i].Age) >= 36 && parseInt(rawData[i].Age) <= 45 && age3645Box.checked){
                    participantArray.push(rawData[i]);
                }
                else if (parseInt(rawData[i].Age) >= 46 && age46Box.checked){
                    participantArray.push(rawData[i]);
                }
            }
            else if (rawData[i].Gender == "Male" && maleBox.checked){
                if (parseInt(rawData[i].Age) >= 18 && parseInt(rawData[i].Age) <= 25 && age1825Box.checked){
                    participantArray.push(rawData[i]);
                }
                else if (parseInt(rawData[i].Age) >= 26 && parseInt(rawData[i].Age) <= 35 && age2635Box.checked){
                    participantArray.push(rawData[i]);
                }
                else if (parseInt(rawData[i].Age) >= 36 && parseInt(rawData[i].Age) <= 45 && age3645Box.checked){
                    participantArray.push(rawData[i]);
                }
                else if (parseInt(rawData[i].Age) >= 46 && age46Box.checked){
                    participantArray.push(rawData[i]);
                }
            }
            
            // Current participant and EventMarker are set in previous to compare to in the next iteration of the loop
            previousParticipant = rawData[i].Participant;
            previousEventMarker = rawData[i].EventMarker;

        }
        // If the current participant is not equal to the previous participant or the current eventmarker is not equal to
        // the previous eventmarker, the participantArray is filled with every event from one drink from one participant. 
        else {
            if (participantArray.length != 0) {
                // Calculate based on position of the slider which frame in the array needs to be displayed
                let scale = maxValue / participantArray.length;
                let index = Math.floor(sliderValue / scale);

                // Add frame to be displayed to finalArray
                finalArray.push(participantArray[index]);

                // Empty participantArray to use in the next iteration of the loop
                participantArray = [];
            }
            // This is only really used in the first iteration of the loop to set the right previous EventMarker and participant
            participantArray.push(rawData[i]);
            previousParticipant = rawData[i].Participant;
            previousEventMarker = rawData[i].EventMarker;

        }
    }
    // Calculate based on position of the slider which frame in the array needs to be displayed, only used for the last iteration
    if (participantArray != []) {
        let scale = maxValue / participantArray.length;
        let index = Math.floor(sliderValue / scale);
        finalArray.push(participantArray[index]);
    }
    console.log(femaleBox.checked)
}