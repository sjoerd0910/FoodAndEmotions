// Define variables for all emotions

let happyBox = true;
let sadBox = true;
let angryBox = true;
let surprisedBox = true;
let scaredBox = true;
let disgustedBox = true;
let neutralBox = false;

// Get all checkbox elements for each gender
let femaleBox = document.getElementById('checkboxFemale');
let maleBox = document.getElementById('checkboxMale');

// Get all checkbox elements for each age range
const age1825Box = document.getElementById('checkbox1825');
const age2635Box = document.getElementById('checkbox2635');
const age3645Box = document.getElementById('checkbox3645');
const age46Box = document.getElementById('checkbox46');


// Define toggle functions emotions

// Define toggle function for the happy checkbox
function ToggleHappy(){
    happyBox = !happyBox //toggles happyBox variable to true or false
    if (happyBox) {
        // Removes all circles and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

        //Makes button green and text black
        document.getElementById("checkboxHappy").style.backgroundColor = "#008000";
        document.getElementById("checkboxHappy").style.color = "#000000";

    } else {
        // Removes all circles from the class happy and creates new visual
        scatterplot.selectAll(".happy").remove();

        //Makes button grey and text white
        document.getElementById("checkboxHappy").style.backgroundColor = "#3f3e3e";
        document.getElementById("checkboxHappy").style.color = "#F1F1F1";
    }
}


// Define toggle function for the sad checkbox
function ToggleSad(){
    sadBox = !sadBox //toggles sadBox variable to true or false
    if (sadBox) {
        // Removes all circles and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

        //Makes button blue and text black
        document.getElementById("checkboxSad").style.backgroundColor = "#2d36d6";
        document.getElementById("checkboxSad").style.color = "#000000";

    } else {
        // Removes all circles from the class sad and creates new visual
        scatterplot.selectAll(".sad").remove();

        //Makes button grey and text white
        document.getElementById("checkboxSad").style.backgroundColor = "#3f3e3e";
        document.getElementById("checkboxSad").style.color = "#F1F1F1";
    }
}

// Define toggle function for the angry checkbox
function ToggleAngry(){
    angryBox = !angryBox //toggles angryBox variable to true or false
    if (angryBox) {
        // Removes all circles and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

        //Makes button red and text black
        document.getElementById("checkboxAngry").style.backgroundColor = "#d62d2d";
        document.getElementById("checkboxAngry").style.color = "#000000";

    } else {
        // Removes all circles from the class sad and creates new visual
        scatterplot.selectAll(".angry").remove();

        //Makes button grey and text white
        document.getElementById("checkboxAngry").style.backgroundColor = "#3f3e3e";
        document.getElementById("checkboxAngry").style.color = "#F1F1F1";
    }
}

// Define toggle function for the surprised checkbox
function ToggleSurprised(){
    surprisedBox = !surprisedBox //toggles surprisedBox variable to true or false
    if (surprisedBox) {
        // Removes all circles and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

        //Makes button yellow and text black
        document.getElementById("checkboxSurprised").style.backgroundColor = "#eded2d";
        document.getElementById("checkboxSurprised").style.color = "#000000";

    } else {
        // Removes all circles from the class sad and creates new visual
        scatterplot.selectAll(".surprised").remove();

        //Makes button grey and text white
        document.getElementById("checkboxSurprised").style.backgroundColor = "#3f3e3e";
        document.getElementById("checkboxSurprised").style.color = "#F1F1F1";
    }
}

// Define toggle function for the scared checkbox
function ToggleScared(){
    scaredBox = !scaredBox //toggles scaredBox variable to true or false
    if (scaredBox) {
        // Removes all circles and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

        //Makes button orange and text black
        document.getElementById("checkboxScared").style.backgroundColor = "#d68a2d";
        document.getElementById("checkboxScared").style.color = "#000000";

    } else {
        // Removes all circles from the class sad and creates new visual
        scatterplot.selectAll(".scared").remove();

        //Makes button grey and text white
        document.getElementById("checkboxScared").style.backgroundColor = "#3f3e3e";
        document.getElementById("checkboxScared").style.color = "#F1F1F1";
    }
}

// Define toggle function for the disgusted checkbox
function ToggleDisgusted(){
    disgustedBox = !disgustedBox //toggles disgustedBox variable to true or false
    if (disgustedBox) {
        // Removes all circles and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

        //Makes button purple and text black
        document.getElementById("checkboxDisgusted").style.backgroundColor = "#800080";
        document.getElementById("checkboxDisgusted").style.color = "#000000";

    } else {
        // Removes all circles from the class sad and creates new visual
        scatterplot.selectAll(".disgusted").remove();

        //Makes button grey and text white
        document.getElementById("checkboxDisgusted").style.backgroundColor = "#3f3e3e";
        document.getElementById("checkboxDisgusted").style.color = "#F1F1F1";
    }
}

// Define toggle function for the neutral checkbox
function ToggleNeutral(){
    neutralBox = !neutralBox //toggles neutralBox variable to true or false
    if (neutralBox) {
        // Removes all circles and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

        //Makes button purple and text black
        document.getElementById("checkboxNeutral").style.backgroundColor = "#8f8f8f";
        document.getElementById("checkboxNeutral").style.color = "#000000";

    } else {
        // Removes all circles from the class sad and creates new visual
        scatterplot.selectAll(".neutral").remove();

        //Makes button grey and text white
        document.getElementById("checkboxNeutral").style.backgroundColor = "#3f3e3e";
        document.getElementById("checkboxNeutral").style.color = "#F1F1F1";
    }
}



// Define EventListeners genders

// Listens for events happening on femaleBox checkbox
femaleBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();
    }
})

// Listens for events happening on maleBox checkbox
maleBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();
    }
})

// Define EventListeners ages

// Listens for events happening on age1825Box checkbox
age1825Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();
    }
})

// Listens for events happening on age2635Box checkbox
age2635Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();
    }
})

// Listens for events happening on age3645Box checkbox
age3645Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();
    }
})

// Listens for events happening on age46Box checkbox
age46Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        scatterplot.selectAll("circle").remove();
        makeVisual();
    }
})