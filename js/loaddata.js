// Define variables for loading the data and storing the processed data
let rawData;
let finalArray = [];
let liveBarChart = [];


// Define function to asynchronically load the data from the csv file
(async function () {
    // Put data from csv into rawData variable
    rawData = await d3.csv("data/data.csv");
    // Load data and make visual for the first time when loading web page
    makeVisual();
    CalculateLiveBarchart();

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

function CalculateLiveBarchart() {
    // Empty live bar chart
    liveBarChart = [];

    let cocktail1 = {
        happy: 0,
        sad: 0,
        angry: 0,
        surprised: 0,
        scared: 0,
        disgusted: 0,
        neural: 0
    };

    let cocktail2 = {
        happy: 0,
        sad: 0,
        angry: 0,
        surprised: 0,
        scared: 0,
        disgusted: 0,
        neural: 0
    };

    let cocktail3 = {
        happy: 0,
        sad: 0,
        angry: 0,
        surprised: 0,
        scared: 0,
        disgusted: 0,
        neural: 0
    };

    for (let i = 0; i < finalArray.length; i++){
        if (finalArray[i].EventMarker == "P1"){
            cocktail1.happy += Number(finalArray[i].Happy);
            cocktail1.sad += Number(finalArray[i].Sad);
            cocktail1.angry += Number(finalArray[i].Angry);
            cocktail1.surprised += Number(finalArray[i].Surprised);
            cocktail1.scared += Number(finalArray[i].Scared);
            cocktail1.disgusted += Number(finalArray[i].disgusted);
            cocktail1.neural += Number(finalArray[i].neural);
        }
        else if (finalArray[i].EventMarker == "P2"){
            cocktail2.happy += Number(finalArray[i].Happy);
            cocktail2.sad += Number(finalArray[i].Sad);
            cocktail2.angry += Number(finalArray[i].Angry);
            cocktail2.surprised += Number(finalArray[i].Surprised);
            cocktail2.scared += Number(finalArray[i].Scared);
            cocktail2.disgusted += Number(finalArray[i].disgusted);
            cocktail2.neural += Number(finalArray[i].neural);
        }
        else if (finalArray[i].EventMarker == "P3"){
            cocktail3.happy += Number(finalArray[i].Happy);
            cocktail3.sad += Number(finalArray[i].Sad);
            cocktail3.angry += Number(finalArray[i].Angry);
            cocktail3.surprised += Number(finalArray[i].Surprised);
            cocktail3.scared += Number(finalArray[i].Scared);
            cocktail3.disgusted += Number(finalArray[i].disgusted);
            cocktail3.neural += Number(finalArray[i].neural);
        }
    }

    let cocktail1total = cocktail1.happy + cocktail1.sad + cocktail1.angry + cocktail1.surprised + cocktail1.scared + cocktail1.disgusted + cocktail1.neural;
    let cocktail2total = cocktail2.happy + cocktail2.sad + cocktail2.angry + cocktail2.surprised + cocktail2.scared + cocktail2.disgusted + cocktail2.neural;
    let cocktail3total = cocktail3.happy + cocktail3.sad + cocktail3.angry + cocktail3.surprised + cocktail3.scared + cocktail3.disgusted + cocktail3.neural;
    console.log(cocktail1total);

    cocktail1 = MakeDivision(cocktail1, cocktail1total);
    cocktail2 = MakeDivision(cocktail2, cocktail2total);
    cocktail3 = MakeDivision(cocktail3, cocktail3total);

    liveBarChart = {cocktail1, cocktail2, cocktail3};
}

function MakeDivision(calcCocktail, Cocktailtotal){
    calcCocktail.happy = calcCocktail.happy / Cocktailtotal * width;
    calcCocktail.sad = calcCocktail.sad / Cocktailtotal * width;
    calcCocktail.angry = calcCocktail.angry / Cocktailtotal * width;
    calcCocktail.surprised = calcCocktail.surprised / Cocktailtotal * width;
    calcCocktail.scared = calcCocktail.scared / Cocktailtotal * width;
    calcCocktail.disgusted = calcCocktail.disgusted / Cocktailtotal * width;
    calcCocktail.neural = calcCocktail.neural / Cocktailtotal * width;
    console.log(calcCocktail)
    return calcCocktail;
}
