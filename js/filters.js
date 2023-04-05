// Get all checkbox elements for each emotion
const happyBox = document.getElementById('checkboxHappy');
const sadBox = document.getElementById('checkboxSad');
const angryBox = document.getElementById('checkboxAngry');
const surprisedBox = document.getElementById('checkboxSurprised');
const scaredBox = document.getElementById('checkboxScared');
const disgustedBox = document.getElementById('checkboxDisgusted');
const neutralBox = document.getElementById('checkboxNeutral');




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

const femaleBox = document.getElementById('checkboxFemale');
let femaleCheck = true;
femaleBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        femaleCheck = true;

        svg.selectAll("circle").remove();

        makeVisual();

    } else {
        femaleCheck = false;

        svg.selectAll(function (d, i) {
            if (d.Gender == Female) {
                svg.selectAll().remove();
            }
        });
    }
})
//