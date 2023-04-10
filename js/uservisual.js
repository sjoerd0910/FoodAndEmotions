// current participant number given by the previous html page
var currentParticipant = sessionStorage.getItem("currentParticipant");
var currentCocktail = sessionStorage.getItem("currentCocktail");

let cocktail;
if (currentCocktail == "P1") {
    cocktail = "Cocktail 1 - Regular";
}
else if (currentCocktail == "P2") {
    cocktail = "Cocktail 2 - Sour";
}
else if (currentCocktail == "P3") {
    cocktail = "Cocktail 3 - Bitter";
}

document.getElementById("participantTitle").innerHTML = `Participant ${currentParticipant} trough time`;
document.getElementById("cocktailTitle").innerHTML = cocktail;

let height = 600;
let width = 1500;

// Set margins for the SVG
let margin = {
    top: 30,
    right: 20,
    left: 25, //aangepast
    bottom: 30,
    inbetween: 100
};

let svg = d3.select(".uservisual").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)


const xScale = d3.scaleBand()
    .domain(["Time"])
    .range([0, width - margin.left - margin.right]);

const yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([height - margin.bottom - margin.top, 0]);

const axisContainer = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

axisContainer.append("g")
    .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
    .call(d3.axisBottom(xScale));

axisContainer.append("g")
    .style("color", "white")
    .call(d3.axisLeft(yScale));


//essential for hover functionality
let tooltip = d3.select(".uservisual")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip");


let finalArrayParticipant = [];



(async function () {
    // Put data from csv into rawData variable
    let rawData = await d3.csv("data/data.csv");
    // Load data and make visual for the first time when loading web page
    for (let i = 0; i < rawData.length; i++) {
        if (rawData[i].Participant == currentParticipant && rawData[i].EventMarker == currentCocktail) {
            finalArrayParticipant.push(rawData[i]);
        }
    }
    let scale = (width - margin.left - margin.right) / finalArrayParticipant.length;
    for (let j = 0; j < finalArrayParticipant.length; j++) {
        finalArrayParticipant[j].VideoTime = j * scale;
    }

    console.log(finalArrayParticipant);

    let enter = svg.selectAll(".userline").data(finalArrayParticipant).enter();


    let x1 = function (d, i) {
        return d.VideoTime + margin.left;
    };

    let x2 = function (d, i) {
        if (i < (finalArrayParticipant.length - 1)) {
            return finalArrayParticipant[(i + 1)].VideoTime + margin.left;
        }
        else {
            return d.VideoTime + margin.left;
        }
    };

    //Happy
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Happy);
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Happy);
            }
            else {
                return yScale(d.Happy);
            }
        })
        .attr("class", "userline")
        .attr("class", "happy");


    //Sad
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Sad);
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Sad);
            }
            else {
                return yScale(d.Sad);
            }
        })
        .attr("class", "userline")
        .attr("class", "sad");

    //Angry
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Angry);
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Angry);
            }
            else {
                return yScale(d.Angry);
            }
        })
        .attr("class", "userline")
        .attr("class", "angry");

    //Surprised
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Surprised);
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Surprised);
            }
            else {
                return yScale(d.Surprised);
            }
        })
        .attr("class", "userline")
        .attr("class", "surprised");

    //Scared
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Scared);
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Scared);
            }
            else {
                return yScale(d.Scared);
            }
        })
        .attr("class", "userline")
        .attr("class", "scared");

    //Disgusted
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Disgusted);
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Disgusted);
            }
            else {
                return yScale(d.Disgusted);
            }
        })
        .attr("class", "userline")
        .attr("class", "disgusted");

    //Neutral
    enter.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", function (d, i) {
            return yScale(d.Neutral);
        })
        .attr("y2", function (d, i) {
            if (i < (finalArrayParticipant.length - 1)) {
                return yScale(finalArrayParticipant[(i + 1)].Neutral);
            }
            else {
                return yScale(d.Neutral);
            }
        })
        .attr("class", "userline")
        .attr("class", "neutral")
        .style("stroke-width", "3px");


    //essential for hover functionality
    d3.selectAll("line")
        .on("mouseover", function (event, d) {
            // hier willen we de lijn nog dikker maken bij een hover
            // d3.selectAll(`${this.attr("class")}`)
            //     .transition()
            //     .duration(100)
            //     .style("stroke-width", "3px");

            tooltip.transition()
                .duration(200)
                .style("opacity", 1);

            tooltip.html(`Gender: ${d.Gender} <br/> Age: ${d.Age} <br/> Drink: ${cocktail} <br/> Happy: ${d.Happy} <br/> Sad: ${d.Sad} <br/> Angry: ${d.Angry} <br/> Surprised: ${d.Surprised} <br/> Scared: ${d.Scared} <br/> Disgusted: ${d.Disgusted} <br/> Neutral: ${d.Neutral}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            // d3.select(this)
            //     .transition()
            //     .duration(100)
            //     .style("stroke-width", "1px");

            tooltip.transition()
                .duration(200)
                .style("opacity", 0);
        })
})()
