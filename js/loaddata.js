// Define variables for loading the data and storing the processed data
let rawData;
let finalArray = [];
let barchartArray = [];


// Define function to asynchronically load the data from the csv file
(async function () {
    // Put data from csv into rawData variable
    rawData = await d3.csv("data/data.csv");
    // Load data and make visuals for the first time when loading web page
    makeVisual();
    MakeBarchart();

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
            if (rawData[i].Gender == "Female" && femaleBox.checked) {
                if (inAgeRange(rawData[i].Age)) {
                    participantArray.push(rawData[i]);
                }
            }
            else if (rawData[i].Gender == "Male" && maleBox.checked) {
                if (inAgeRange(rawData[i].Age)) {
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

            // if current participants' gender is checked put in participantArray
            if (rawData[i].Gender == "Female" && femaleBox.checked) {
                if (inAgeRange(rawData[i].Age)) {
                    participantArray.push(rawData[i]);
                }
            }
            else if (rawData[i].Gender == "Male" && maleBox.checked) {
                if (inAgeRange(rawData[i].Age)) {
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

// Define function to check if person is in checked age range
function inAgeRange(age) {
    if (parseInt(age) >= 18 && parseInt(age) <= 25 && age1825Box.checked) {
        return true;
    }
    else if (parseInt(age) >= 26 && parseInt(age) <= 35 && age2635Box.checked) {
        return true;
    }
    else if (parseInt(age) >= 36 && parseInt(age) <= 45 && age3645Box.checked) {
        return true;
    }
    else if (parseInt(age) >= 46 && age46Box.checked) {
        return true;
    }
    else {
        return false;
    }
}

// Define function to calculate the values for the bar chart
function CalculateBarchart() {
    // Empty bar chart array
    barchartArray = [];

    // Define cocktail arrays with numbers for emotions
    let cocktail1 = {
        happy: 0,
        sad: 0,
        angry: 0,
        surprised: 0,
        scared: 0,
        disgusted: 0,
        neutral: 0
    };

    let cocktail2 = {
        happy: 0,
        sad: 0,
        angry: 0,
        surprised: 0,
        scared: 0,
        disgusted: 0,
        neutral: 0
    };

    let cocktail3 = {
        happy: 0,
        sad: 0,
        angry: 0,
        surprised: 0,
        scared: 0,
        disgusted: 0,
        neutral: 0
    };

    // Define array to put every range of partticipants per drink
    let participantArray = [];

    // Define previous participant for loop
    let previousParticipant;

    // Define previous EventMarker for loop
    let previousEventMarker;


    // For each element in rawData
    for (let i = 0; i < rawData.length; i++) {
        // If the current participant is equal to the previous participant and if the current EventMarker is equal to the 
        // previous EventMarker, the current iteration can be added to the participantArray
        if (rawData[i].Participant == previousParticipant && rawData[i].EventMarker == previousEventMarker) {
            if (rawData[i].Gender == "Female" && femaleBox) {
                if (inAgeRange(rawData[i].Age)) {
                    participantArray.push(rawData[i]);
                }
            }
            else if (rawData[i].Gender == "Male" && maleBox) {
                if (inAgeRange(rawData[i].Age)) {
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
                // Set participants' emotions with GetAverage function
                if (previousEventMarker == "P1") {
                    cocktail1.happy += GetAverage(participantArray).happy;
                    cocktail1.sad += GetAverage(participantArray).sad;
                    cocktail1.angry += GetAverage(participantArray).angry;
                    cocktail1.surprised += GetAverage(participantArray).surprised;
                    cocktail1.scared += GetAverage(participantArray).scared;
                    cocktail1.disgusted += GetAverage(participantArray).disgusted;
                    cocktail1.neutral += GetAverage(participantArray).neutral;
                }
                else if (previousEventMarker == "P2") {
                    cocktail2.happy += GetAverage(participantArray).happy;
                    cocktail2.sad += GetAverage(participantArray).sad;
                    cocktail2.angry += GetAverage(participantArray).angry;
                    cocktail2.surprised += GetAverage(participantArray).surprised;
                    cocktail2.scared += GetAverage(participantArray).scared;
                    cocktail2.disgusted += GetAverage(participantArray).disgusted;
                    cocktail2.neutral += GetAverage(participantArray).neutral;
                }
                else if (previousEventMarker == "P3") {
                    cocktail3.happy += GetAverage(participantArray).happy;
                    cocktail3.sad += GetAverage(participantArray).sad;
                    cocktail3.angry += GetAverage(participantArray).angry;
                    cocktail3.surprised += GetAverage(participantArray).surprised;
                    cocktail3.scared += GetAverage(participantArray).scared;
                    cocktail3.disgusted += GetAverage(participantArray).disgusted;
                    cocktail3.neutral += GetAverage(participantArray).neutral;
                }

                // Empty participantArray to use in the next iteration of the loop
                participantArray = [];
            }
            
            // if current participants' gender is checked put in participantArray
            if (rawData[i].Gender == "Female" && femaleBox) {
                if (inAgeRange(rawData[i].Age)) {
                    participantArray.push(rawData[i]);
                }
            }
            else if (rawData[i].Gender == "Male" && maleBox) {
                if (inAgeRange(rawData[i].Age)) {
                    participantArray.push(rawData[i]);
                }
            }

            // Current participant and EventMarker are set in previous to compare to in the next iteration of the loop
            previousParticipant = rawData[i].Participant;
            previousEventMarker = rawData[i].EventMarker;

        }
    }
    // Set participants' emotions with GetAverage function, only used for the last iteration
    if (participantArray.length != 0) {
        if (previousEventMarker == "P1") {
            cocktail1.happy += GetAverage(participantArray).happy;
            cocktail1.sad += GetAverage(participantArray).sad;
            cocktail1.angry += GetAverage(participantArray).angry;
            cocktail1.surprised += GetAverage(participantArray).surprised;
            cocktail1.scared += GetAverage(participantArray).scared;
            cocktail1.disgusted += GetAverage(participantArray).disgusted;
            cocktail1.neutral += GetAverage(participantArray).neutral;
        }
        else if (previousEventMarker == "P2") {
            cocktail2.happy += GetAverage(participantArray).happy;
            cocktail2.sad += GetAverage(participantArray).sad;
            cocktail2.angry += GetAverage(participantArray).angry;
            cocktail2.surprised += GetAverage(participantArray).surprised;
            cocktail2.scared += GetAverage(participantArray).scared;
            cocktail2.disgusted += GetAverage(participantArray).disgusted;
            cocktail2.neutral += GetAverage(participantArray).neutral;
        }
        else if (previousEventMarker == "P3") {
            cocktail3.happy += GetAverage(participantArray).happy;
            cocktail3.sad += GetAverage(participantArray).sad;
            cocktail3.angry += GetAverage(participantArray).angry;
            cocktail3.surprised += GetAverage(participantArray).surprised;
            cocktail3.scared += GetAverage(participantArray).scared;
            cocktail3.disgusted += GetAverage(participantArray).disgusted;
            cocktail3.neutral += GetAverage(participantArray).neutral;
        }
    }

    // Add all emotions value for total
    let cocktail1total = cocktail1.happy + cocktail1.sad + cocktail1.angry + cocktail1.surprised + cocktail1.scared + cocktail1.disgusted + cocktail1.neutral;
    let cocktail2total = cocktail2.happy + cocktail2.sad + cocktail2.angry + cocktail2.surprised + cocktail2.scared + cocktail2.disgusted + cocktail2.neutral;
    let cocktail3total = cocktail3.happy + cocktail3.sad + cocktail3.angry + cocktail3.surprised + cocktail3.scared + cocktail3.disgusted + cocktail3.neutral;

    // Calculate new values for position/ size of the bar with MakeDivision function
    cocktail1 = MakeDivision(cocktail1, cocktail1total);
    cocktail2 = MakeDivision(cocktail2, cocktail2total);
    cocktail3 = MakeDivision(cocktail3, cocktail3total);

    barchartArray = { cocktail1, cocktail2, cocktail3 };
}

// Define function to make divisions
function MakeDivision(calcCocktail, Cocktailtotal) {
    calcCocktail.happy = calcCocktail.happy / Cocktailtotal * (width - margin.right - margin.barchartleft);
    calcCocktail.sad = calcCocktail.sad / Cocktailtotal * (width - margin.right - margin.barchartleft);
    calcCocktail.angry = calcCocktail.angry / Cocktailtotal * (width - margin.right - margin.barchartleft);
    calcCocktail.surprised = calcCocktail.surprised / Cocktailtotal * (width - margin.right - margin.barchartleft);
    calcCocktail.scared = calcCocktail.scared / Cocktailtotal * (width - margin.right - margin.barchartleft);
    calcCocktail.disgusted = calcCocktail.disgusted / Cocktailtotal * (width - margin.right - margin.barchartleft);
    calcCocktail.neutral = calcCocktail.neutral / Cocktailtotal * (width - margin.right - margin.barchartleft);
    return calcCocktail;
}

// Define function to get average from array
function GetAverage(participantArray) {
    let total = {
        happy: 0,
        sad: 0,
        angry: 0,
        surprised: 0,
        scared: 0,
        disgusted: 0,
        neutral: 0,
        counter: 0
    };
    for (let i = 0; i < participantArray.length; i++) {
        total.happy += Number(participantArray[i].Happy);
        total.sad += Number(participantArray[i].Sad);
        total.angry += Number(participantArray[i].Angry);
        total.surprised += Number(participantArray[i].Surprised);
        total.scared += Number(participantArray[i].Scared);
        total.disgusted += Number(participantArray[i].Disgusted);
        total.neutral += Number(participantArray[i].Neutral);
        total.counter++;
    }

    total.happy = total.happy / total.counter;
    total.sad = total.sad / total.counter;
    total.angry = total.angry / total.counter;
    total.surprised = total.surprised / total.counter;
    total.scared = total.scared / total.counter;
    total.disgusted = total.disgusted / total.counter;
    total.neutral = total.neutral / total.counter;

    return total;
}


