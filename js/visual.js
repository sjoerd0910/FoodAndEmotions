// Set width and height for the SVG viewBox
let height = 700;
let width = 1500;

// Set margins for the SVG
let margin = {
    top: 30,
    right: 20,
    left: 20,
    bottom: 30,
    inbetween: 100
};

// Create SVG for visual
let svg = d3.select(".scatterplot").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)

// Create x scale in visual
const xScale = d3.scaleBand()
    .domain(["Cocktail 1", "Cocktail 2", "Cocktail 3"])
    .range([0, width - margin.left - margin.right]);

// Create y scale in visual
const yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([height - margin.bottom - margin.top, 0]);

// Create axiscontainer for visual
const axisContainer = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Add x axis line in visual
axisContainer.append("g")
    .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
    .call(d3.axisBottom(xScale));

// Add y axis line in visual, removed because it is not helping the visual
// axisContainer.append("g")
//     .style("color", "black")
//     .call(d3.axisLeft(yScale));


// Create tooltip for hover functionality
let tooltip = d3.select(".scatterplot")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip");

// Define function to update the visual each time the slider valie
function updateVisual() {
    // Reload data to get the right calculations based on the slider value
    loadData();

    // Select all happy classes with data from finalArray and set new y cordinates
    let happy = axisContainer.selectAll(".happy").data(finalArray);
    happy.transition().duration(10).attr("cy", d => yScale(d.Happy));

    // Select all sad classes with data from finalArray and set new y cordinates
    let sad = axisContainer.selectAll(".sad").data(finalArray);
    sad.transition().duration(10).attr("cy", d => yScale(d.Sad));

    // Select all angry classes with data from finalArray and set new y cordinates
    let angry = axisContainer.selectAll(".angry").data(finalArray);
    angry.transition().duration(10).attr("cy", d => yScale(d.Angry));

    // Select all surprised classes with data from finalArray and set new y cordinates
    let surprised = axisContainer.selectAll(".surprised").data(finalArray);
    surprised.transition().duration(10).attr("cy", d => yScale(d.Surprised));

    // Select all scared classes with data from finalArray and set new y cordinates
    let scared = axisContainer.selectAll(".scared").data(finalArray);
    scared.transition().duration(10).attr("cy", d => yScale(d.Scared));

    // Select all disgusted classes with data from finalArray and set new y cordinates
    let disgusted = axisContainer.selectAll(".disgusted").data(finalArray);
    disgusted.transition().duration(10).attr("cy", d => yScale(d.Disgusted));

    // Select all neutral classes with data from finalArray and set new y cordinates
    let neutral = axisContainer.selectAll(".neutral").data(finalArray);
    neutral.transition().duration(10).attr("cy", d => yScale(d.Neutral));
}

// Define function to create visual
function makeVisual() {
    // Get svg and put in variable
    let svg = d3.select("svg")

    // Get all cicles and put in variable with enter functionality
    let enter = axisContainer.selectAll("circle").data(finalArray).enter();

    if (happyBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Happy))
            .attr("r", 4)
            .attr("class", "happy")
    }

    if (sadBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Sad))
            .attr("r", 4)
            .attr("class", "sad")
    }

    if (angryBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Angry))
            .attr("r", 4)
            .attr("class", "angry")
    }

    if (surprisedBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Surprised))
            .attr("r", 4)
            .attr("class", "surprised")
    }

    if (scaredBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Scared))
            .attr("r", 4)
            .attr("class", "scared")
    }

    if (disgustedBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Disgusted))
            .attr("r", 4)
            .attr("class", "disgusted")
    }

    if (neutralBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Neutral))
            .attr("r", 4)
            .attr("class", "neutral")
    }



    // variable necessary to give the participant number to the next html page
    var currentParticipant = "";
    var currentCocktail = "";

    //essential for hover functionality
    d3.selectAll("circle")
        .on("mouseover", function (event, d) {
            d3.select(this)
                .transition()
                .duration(100)
                .attr("r", 8);
            tooltip.transition()
                .duration(200)
                .style("opacity", 1);

            tooltip.html(`Participant: ${d.Participant} <br/> Gender: ${d.Gender} <br/> Age: ${d.Age} <br/> Drink: ${d.EventMarker}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            d3.select(this)
                .transition()
                .duration(100)
                .attr("r", 4);
            tooltip.transition()
                .duration(200)
                .style("opacity", 0);
        })

        // navigating to the next visual
        .on("click", function (event, d) {
            // get the link to the new HTML page
            var link = "uservisual.html";

            // get the current participant to be able to give the participant number to the next html page
            currentParticipant = d.Participant;
            sessionStorage.setItem("currentParticipant", currentParticipant);

            currentCocktail = d.EventMarker;
            sessionStorage.setItem("currentCocktail", currentCocktail);

            // navigate to the new HTML page with the query string
            window.location.href = link;
        })
        ;


}

function getWidth(eventMarker) {
    let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
    if (eventMarker == "P1") {
        return Math.floor(Math.random() * (individualWidth + 1));

    }
    else if (eventMarker == "P2") {
        return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

    }
    else {
        return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
    }
}