// current participant number given by the previous html page
const currentParticipant = sessionStorage.getItem("currentParticipant");
const currentCocktail = sessionStorage.getItem("currentCocktail");
const currentGender = sessionStorage.getItem("currentGender"); 
const currentAge = sessionStorage.getItem("currentAge");

// Get and set text
document.getElementById("participantTitle").innerHTML = `Participant ${currentParticipant} through time`;
document.getElementById("cocktailTitle").innerHTML = cocktail;
document.getElementById("cocktailVariable").innerHTML =`Gender: ${currentGender} &nbsp &nbsp Age: ${currentAge}`;

// Set current cocktail name in variable
let cocktail;
if (currentCocktail == "P1") {
    cocktail = "Cocktail 1 - Regular";
}
else if (currentCocktail == "P2") {
    cocktail = "Cocktail 2 - Sweet";
}
else if (currentCocktail == "P3") {
    cocktail = "Cocktail 3 - Bitter";
}

// Set sizes for viewBox
let height = 500;
let width = 1500;

// Set margins for the SVG
let margin = {
    top: 30,
    right: 20,
    left: 40, //aangepast
    bottom: 30,
    inbetween: 100
};

// Create SVG for visual
let svg = d3.select(".uservisual").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)

// Create x scale in visual
const xScale = d3.scaleBand()
    .domain(["Time"])
    .range([0, width - margin.left - margin.right]);

// Create y scale in visual
const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom - margin.top, 0]);

// Create axiscontainer for visual
const axisContainer = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Add x axis line in visual
axisContainer.append("g")
    .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
    .call(d3.axisBottom(xScale));

// Add y axis line in visual
axisContainer.append("g")
    .style("color", "white")
    .call(d3.axisLeft(yScale));

//essential for hover functionality
let tooltip = d3.select(".uservisual")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip");

// Create array to put final data in
let finalArrayParticipant = [];

// Define async function which loads when page is loaded
(async function () {
    // Put data from csv into rawData variable
    let rawData = await d3.csv("data/data.csv");
    // Load data and make visual for the first time when loading web page
    for (let i = 0; i < rawData.length; i++) {
        if (rawData[i].Participant == currentParticipant && rawData[i].EventMarker == currentCocktail) {
            finalArrayParticipant.push(rawData[i]);
        }
    }
    // Create scale to create width size
    let scale = (width - margin.left - margin.right) / finalArrayParticipant.length;
    // Set scaled elements in finalArrayParticipant
    for (let j = 0; j < finalArrayParticipant.length; j++) {
        finalArrayParticipant[j].VideoTime = j * scale;
        finalArrayParticipant[j].Happy = finalArrayParticipant[j].Happy * 100;
        finalArrayParticipant[j].Sad = finalArrayParticipant[j].Sad * 100;
        finalArrayParticipant[j].Angry = finalArrayParticipant[j].Angry * 100;
        finalArrayParticipant[j].Surprised = finalArrayParticipant[j].Surprised * 100;
        finalArrayParticipant[j].Scared = finalArrayParticipant[j].Scared * 100;
        finalArrayParticipant[j].Disgusted = finalArrayParticipant[j].Disgusted * 100;
        finalArrayParticipant[j].Neutral = finalArrayParticipant[j].Neutral * 100;
    }

    // Create variable to set lines
    let enter = svg.selectAll(".userline").data(finalArrayParticipant).enter();

    // Define 1st width point
    let x1 = function (d, i) {
        return d.VideoTime + margin.left;
    };

    // Define 2nd width point
    let x2 = function (d, i) {
        if (i < (finalArrayParticipant.length - 1)) {
            return finalArrayParticipant[(i + 1)].VideoTime + margin.left;
        }
        else {
            return d.VideoTime + margin.left;
        }
    };

    // Create happy lines
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Happy) + margin.top;
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Happy) + margin.top;
            }
            else {
                return yScale(d.Happy) + margin.top;
            }
        })
        .attr("class", "userline")
        .attr("class", "happy");


    // Create sad lines
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Sad) + margin.top;
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Sad) + margin.top;
            }
            else {
                return yScale(d.Sad) + margin.top;
            }
        })
        .attr("class", "userline")
        .attr("class", "sad");

    // Create angry lines
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Angry) + margin.top;
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Angry) + margin.top;
            }
            else {
                return yScale(d.Angry) + margin.top;
            }
        })
        .attr("class", "userline")
        .attr("class", "angry");

    // Create surprised lines
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Surprised) + margin.top;
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Surprised) + margin.top;
            }
            else {
                return yScale(d.Surprised) + margin.top;
            }
        })
        .attr("class", "userline")
        .attr("class", "surprised");

    // Create scared lines
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Scared) + margin.top;
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Scared) + margin.top;
            }
            else {
                return yScale(d.Scared) + margin.top;
            }
        })
        .attr("class", "userline")
        .attr("class", "scared");

    // Create disgusted lines
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Disgusted) + margin.top;
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Disgusted) + margin.top;
            }
            else {
                return yScale(d.Disgusted) + margin.top;
            }
        })
        .attr("class", "userline")
        .attr("class", "disgusted");

    // Create neutral lines
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Neutral) + margin.top;
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Neutral) + margin.top;
            }
            else {
                return yScale(d.Neutral) + margin.top;
            }
        })
        .attr("class", "userline")
        .attr("class", "neutral")
        .style("stroke-width", "3px");


    // Create hover functionality on mouseover
    d3.selectAll("line")
        .on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", 1);

            tooltip.html(`Happy: ${d.Happy} <br/> Sad: ${d.Sad} <br/> Angry: ${d.Angry} <br/> Surprised: ${d.Surprised} <br/> Scared: ${d.Scared} <br/> Disgusted: ${d.Disgusted} <br/> Neutral: ${d.Neutral}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", 0);
        })
})()

