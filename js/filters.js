//checkbox
const happyBox = document.getElementById('checkboxHappy')
happyBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        svg.selectAll(".happy").remove();
    }
})

const sadBox = document.getElementById('checkboxSad')
sadBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        svg.selectAll(".sad").remove();
    }
})

const angryBox = document.getElementById('checkboxAngry')
angryBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        svg.selectAll(".angry").remove();
    }
})

const surprisedBox = document.getElementById('checkboxSurprised')
surprisedBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        svg.selectAll(".surprised").remove();
    }
})

const scaredBox = document.getElementById('checkboxScared')
scaredBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        svg.selectAll(".scared").remove();
    }
})

const disgustedBox = document.getElementById('checkboxDisgusted')
disgustedBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
        svg.selectAll(".disgusted").remove();
    }
})

const neutralBox = document.getElementById('checkboxNeutral')
neutralBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        svg.selectAll("circle").remove();
        makeVisual();

    } else {
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