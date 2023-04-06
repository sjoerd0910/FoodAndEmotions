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
                if (inAgeRange(rawData[i].Age)){
                    participantArray.push(rawData[i]);
                }
            }
            else if (rawData[i].Gender == "Male" && maleBox.checked){
                if (inAgeRange(rawData[i].Age)){
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

            if (rawData[i].Gender == "Female" && femaleBox.checked){
                if (inAgeRange(rawData[i].Age)){
                    participantArray.push(rawData[i]);
                }
            }
            else if (rawData[i].Gender == "Male" && maleBox.checked){
                if (inAgeRange(rawData[i].Age)){
                    participantArray.push(rawData[i]);
                }
            }
            
            // Current participant and EventMarker are set in previous to compare to in the next iteration of the loop
            previousParticipant = rawData[i].Participant;
            previousEventMarker = rawData[i].EventMarker;
            
        }
    }
    // Calculate based on position of the slider which frame in the array needs to be displayed, only used for the last iteration
    if (participantArray.length != 0) {
        let scale = maxValue / participantArray.length;
        let index = Math.floor(sliderValue / scale);
        finalArray.push(participantArray[index]);
    }

}

function inAgeRange(age)
{
    if (parseInt(age) >= 18 && parseInt(age) <= 25 && age1825Box.checked){
        return true;
    }
    else if (parseInt(age) >= 26 && parseInt(age) <= 35 && age2635Box.checked){
        return true;
    }
    else if (parseInt(age) >= 36 && parseInt(age) <= 45 && age3645Box.checked){
        return true;
    }
    else if (parseInt(age) >= 46 && age46Box.checked){
        return true;
    }
    else{
        return false;
    }
}