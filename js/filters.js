// Get all checkbox elements for each emotion
const happyBox = document.getElementById('checkboxHappy');
const sadBox = document.getElementById('checkboxSad');
const angryBox = document.getElementById('checkboxAngry');
const surprisedBox = document.getElementById('checkboxSurprised');
const scaredBox = document.getElementById('checkboxScared');
const disgustedBox = document.getElementById('checkboxDisgusted');
const neutralBox = document.getElementById('checkboxNeutral');

// Get all checkbox elements for each gender
let femaleBox = document.getElementById('checkboxFemale');
let maleBox = document.getElementById('checkboxMale');

// Get all checkbox elements for each age range
const age1825Box = document.getElementById('checkbox1825');
const age2635Box = document.getElementById('checkbox2635');
const age3645Box = document.getElementById('checkbox3645');
const age46Box = document.getElementById('checkbox46');

// Define EventListeners emotions

// Listens for events happening on happyBox checkbox
happyBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles and creates new visual
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles from the class happy and creates new visual
        svg.selectAll(".happy").remove();
    }
})

// Listens for events happening on sadBox checkbox
sadBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles and creates new visual
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles from the class sad and creates new visual
        svg.selectAll(".sad").remove();
    }
})


// Listens for events happening on angryBox checkbox
angryBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles and creates new visual
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles from the class angry and creates new visual
        svg.selectAll(".angry").remove();
    }
})

// Listens for events happening on surprisedBox checkbox
surprisedBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles and creates new visual
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles from the class surprised and creates new visual
        svg.selectAll(".surprised").remove();
    }
})

// Listens for events happening on scaredBox checkbox
scaredBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles and creates new visual
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles from the class scared and creates new visual
        svg.selectAll(".scared").remove();
    }
})

// Listens for events happening on disgustedBox checkbox
disgustedBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles and creates new visual
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles from the class disgusted and creates new visual
        svg.selectAll(".disgusted").remove();
    }
})

// Listens for events happening on neutralBox checkbox
neutralBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles and creates new visual
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        // Removes all circles from the class neutral and creates new visual
        svg.selectAll(".neutral").remove();
    }
})

// Define EventListeners genders

// Listens for events happening on femaleBox checkbox
femaleBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();
    }
})

// Listens for events happening on maleBox checkbox
maleBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();
    }
})

// Define EventListeners ages

// Listens for events happening on age1825Box checkbox
age1825Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();
    }
})

// Listens for events happening on age2635Box checkbox
age2635Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();
    }
})

// Listens for events happening on age3645Box checkbox
age3645Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();
    }
})

// Listens for events happening on age46Box checkbox
age46Box.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();

    } else {
        // Removes all circles, loads new data based on filters and creates new visual
        svg.selectAll("circle").remove();
        loadData();
        makeVisual();
    }
})