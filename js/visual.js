// Set width and height for the SVG viewBox
let height = 600;
let width = 1500;

// Set margins for the SVG
let margin = {
    top: 30,
    right: 20,
    left: 20,
    bottom: 30,
    inbetween: 100,
    barchartleft: 170
};

// Create SVG for visual
let scatterplot = d3.select(".scatterplotContainer").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("class", "scatterplot")

// Create x scale in visual
const xScale = d3.scaleBand()
    .domain(["Cocktail 1 - Regular", "Cocktail 2 - Sweet", "Cocktail 3 - Bitter"])
    .range([0, width - margin.left - margin.right]);

// Create y scale in visual
const yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([height - margin.bottom - margin.top, 0]);

// Create axiscontainer for visual
const axisContainer = scatterplot.append("g")
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
let tooltip = d3.select(".scatterplotContainer")
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
    // Load new data
    loadData();

    // Get svg and put in variable
    let svg = d3.select(".scatterplot")

    // Get all cicles and put in variable with enter functionality
    let enter = axisContainer.selectAll("circle").data(finalArray).enter();

    if (happyBox) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Happy))
            .attr("r", 4)
            .attr("class", "happy");
    }

    if (sadBox) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Sad))
            .attr("r", 4)
            .attr("class", "sad");
    }

    if (angryBox) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Angry))
            .attr("r", 4)
            .attr("class", "angry");
    }

    if (surprisedBox) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Surprised))
            .attr("r", 4)
            .attr("class", "surprised");
    }

    if (scaredBox) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Scared))
            .attr("r", 4)
            .attr("class", "scared");
    }

    if (disgustedBox) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Disgusted))
            .attr("r", 4)
            .attr("class", "disgusted");
    }

    if (neutralBox) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                return getWidth(d.EventMarker);
            })
            .attr("cy", d => yScale(d.Neutral))
            .attr("r", 4)
            .attr("class", "neutral");
    }


    //essential for hover functionality
    d3.selectAll("circle")
        .on("mouseover", function (event, d) {
            let cocktail = "";
            if (d.EventMarker == "P1") {
                cocktail = "Cocktail 1 - Regular";
            }
            else if (d.EventMarker == "P2") {
                cocktail = "Cocktail 2 - Sweet";
            }
            else if (d.EventMarker == "P3") {
                cocktail = "Cocktail 3 - Bitter";
            }
            d3.select(this)
                .transition()
                .duration(100)
                .attr("r", 8)
                .style("cursor", "pointer");
            tooltip.transition()
                .duration(200)
                .style("opacity", 1);

            tooltip.html(`Participant: ${d.Participant} <br/> Gender: ${d.Gender} <br/> Age: ${d.Age} <br/> Drink: ${cocktail}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            d3.select(this)
                .transition()
                .duration(100)
                .attr("r", 4)
                .style("cursor", "default");
            tooltip.transition()
                .duration(200)
                .style("opacity", 0);
        })

        // navigating to the next visual
        .on("click", function (event, d) {
            // get the link to the new HTML page
            const link = "uservisual.html";

            // get the current participant to be able to give the participant number to the next html page
            sessionStorage.setItem("currentParticipant", d.Participant);

            sessionStorage.setItem("currentCocktail", d.EventMarker);

            sessionStorage.setItem("currentGender", d.Gender); 
            
            sessionStorage.setItem("currentAge", d.Age);

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



// Create SVG for visual
let barchart = d3.select(".barchartContainer").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("class", "barchart");

// Create x scale in visual
const barxScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width - margin.barchartleft - margin.right]);

// Create y scale in visual
const baryScale = d3.scaleBand()
    .domain(["Cocktail 3 - Bitter", "Cocktail 2 - Sweet", "Cocktail 1 - Regular"])
    .range([height - margin.bottom - margin.top, 0]);

// Create axiscontainer for visual
const baraxisContainer = barchart.append("g")
    .attr("transform", `translate(${margin.barchartleft}, ${margin.top})`);

// Add x axis line in visual
baraxisContainer.append("g")
    .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
    .call(d3.axisBottom(barxScale));

// Add y axis line in visual
baraxisContainer.append("g")
    .style("color", "white")
    .call(d3.axisLeft(baryScale));



function MakeBarchart() {
    // Load new data
    CalculateBarchart();

    // Get svg and put in variable
    let barsvg = d3.select(".barchart")

    let enter = baraxisContainer.selectAll("rect").data(barchartArray).enter();

    // cocktail 1
    barchart.append("rect")
        .attr("x", margin.barchartleft)
        .attr("y", 75)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail1.happy)
        .attr("class", "happy");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail1.happy)
        .attr("y", 75)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail1.sad)
        .attr("class", "sad");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail1.happy + barchartArray.cocktail1.sad)
        .attr("y", 75)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail1.angry)
        .attr("class", "angry");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail1.happy + barchartArray.cocktail1.sad + barchartArray.cocktail1.angry)
        .attr("y", 75)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail1.surprised)
        .attr("class", "surprised");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail1.happy + barchartArray.cocktail1.sad + barchartArray.cocktail1.angry + barchartArray.cocktail1.surprised)
        .attr("y", 75)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail1.scared)
        .attr("class", "scared");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail1.happy + barchartArray.cocktail1.sad + barchartArray.cocktail1.angry + barchartArray.cocktail1.surprised + barchartArray.cocktail1.scared)
        .attr("y", 75)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail1.disgusted)
        .attr("class", "disgusted");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail1.happy + barchartArray.cocktail1.sad + barchartArray.cocktail1.angry + barchartArray.cocktail1.surprised + barchartArray.cocktail1.scared + barchartArray.cocktail1.disgusted)
        .attr("y", 75)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail1.neutral)
        .attr("class", "neutral");


    //cocktail 2
    barchart.append("rect")
        .attr("x", margin.barchartleft)
        .attr("y", 250)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail2.happy)
        .attr("class", "happy");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail2.happy)
        .attr("y", 250)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail2.sad)
        .attr("class", "sad");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail2.happy + barchartArray.cocktail2.sad)
        .attr("y", 250)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail2.angry)
        .attr("class", "angry");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail2.happy + barchartArray.cocktail2.sad + barchartArray.cocktail2.angry)
        .attr("y", 250)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail2.surprised)
        .attr("class", "surprised");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail2.happy + barchartArray.cocktail2.sad + barchartArray.cocktail2.angry + barchartArray.cocktail2.surprised)
        .attr("y", 250)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail2.scared)
        .attr("class", "scared");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail2.happy + barchartArray.cocktail2.sad + barchartArray.cocktail2.angry + barchartArray.cocktail2.surprised + barchartArray.cocktail2.scared)
        .attr("y", 250)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail2.disgusted)
        .attr("class", "disgusted");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail2.happy + barchartArray.cocktail2.sad + barchartArray.cocktail2.angry + barchartArray.cocktail2.surprised + barchartArray.cocktail2.scared + barchartArray.cocktail2.disgusted)
        .attr("y", 250)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail2.neutral)
        .attr("class", "neutral");

    //cocktail 3
    barchart.append("rect")
        .attr("x", margin.barchartleft)
        .attr("y", 425)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail3.happy)
        .attr("class", "happy");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail3.happy)
        .attr("y", 425)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail3.sad)
        .attr("class", "sad");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail3.happy + barchartArray.cocktail3.sad)
        .attr("y", 425)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail3.angry)
        .attr("class", "angry");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail3.happy + barchartArray.cocktail3.sad + barchartArray.cocktail3.angry)
        .attr("y", 425)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail3.surprised)
        .attr("class", "surprised");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail3.happy + barchartArray.cocktail3.sad + barchartArray.cocktail3.angry + barchartArray.cocktail3.surprised)
        .attr("y", 425)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail3.scared)
        .attr("class", "scared");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail3.happy + barchartArray.cocktail3.sad + barchartArray.cocktail3.angry + barchartArray.cocktail3.surprised + barchartArray.cocktail3.scared)
        .attr("y", 425)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail3.disgusted)
        .attr("class", "disgusted");

    barchart.append("rect")
        .attr("x", margin.barchartleft + barchartArray.cocktail3.happy + barchartArray.cocktail3.sad + barchartArray.cocktail3.angry + barchartArray.cocktail3.surprised + barchartArray.cocktail3.scared + barchartArray.cocktail3.disgusted)
        .attr("y", 425)
        .attr("height", 100)
        .attr("width", barchartArray.cocktail3.neutral)
        .attr("class", "neutral");


}

