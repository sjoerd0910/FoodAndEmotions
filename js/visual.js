let height = 700;
let width = 1500;

let margin = {
    top: 30,
    right: 50,
    left: 50,
    bottom: 30,
    inbetween: 150
};

let svg = d3.select(".scatterplot").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("background", "white");


const xScale = d3.scaleBand()
    .domain(["Cocktail 1", "Cocktail 2", "Cocktail 3"])
    .range([0, width - margin.left - margin.right]);

const yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([height - margin.bottom - margin.top, 0]);

const axisContainer = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

axisContainer.append("g")
    .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
    .style("color", "black")
    .call(d3.axisBottom(xScale));

// axisContainer.append("g")
//     .style("color", "black")
//     .call(d3.axisLeft(yScale));


//essential for hover functionality
let tooltip = d3.select(".scatterplot")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip");


function updateVisual() {
    loadData(value);
    let happy = axisContainer.selectAll(".happy").data(finalArray);
    happy.attr("cy", d => yScale(d.Happy));

    let sad = axisContainer.selectAll(".sad").data(finalArray);
    sad.attr("cy", d => yScale(d.Sad));

    let angry = axisContainer.selectAll(".angry").data(finalArray);
    angry.attr("cy", d => yScale(d.Angry));

    let surprised = axisContainer.selectAll(".surprised").data(finalArray);
    surprised.attr("cy", d => yScale(d.Surprised));

    let scared = axisContainer.selectAll(".scared").data(finalArray);
    scared.attr("cy", d => yScale(d.Scared));

    let disgusted = axisContainer.selectAll(".disgusted").data(finalArray);
    disgusted.attr("cy", d => yScale(d.Disgusted));
}



function makeVisual() {
    let svg = d3.select("svg")

    let enter = axisContainer.selectAll("circle").data(finalArray).enter();

    enter.append("circle")
        .attr("cx", function (d, i) {
            let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
            if (d.EventMarker == "P1") {
                return Math.floor(Math.random() * (individualWidth + 1));

            }
            else if (d.EventMarker == "P2") {
                return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

            }
            else {
                return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
            }

        })
        .attr("cy", d => yScale(d.Happy))
        .attr("r", 4)
        .attr("class", "happy")
        .style("fill", "orange");

    enter.append("circle")
        .attr("cx", function (d, i) {
            let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
            if (d.EventMarker == "P1") {
                return Math.floor(Math.random() * (individualWidth + 1));

            }
            else if (d.EventMarker == "P2") {
                return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

            }
            else {
                return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
            }

        })
        .attr("cy", d => yScale(d.Sad))
        .attr("r", 4)
        .attr("class", "sad")
        .style("fill", "blue");

    enter.append("circle")
        .attr("cx", function (d, i) {
            let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
            if (d.EventMarker == "P1") {
                return Math.floor(Math.random() * (individualWidth + 1));

            }
            else if (d.EventMarker == "P2") {
                return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

            }
            else {
                return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
            }

        })
        .attr("cy", d => yScale(d.Angry))
        .attr("r", 4)
        .attr("class", "angry")
        .style("fill", "red");

    enter.append("circle")
        .attr("cx", function (d, i) {
            let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
            if (d.EventMarker == "P1") {
                return Math.floor(Math.random() * (individualWidth + 1));

            }
            else if (d.EventMarker == "P2") {
                return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

            }
            else {
                return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
            }

        })
        .attr("cy", d => yScale(d.Surprised))
        .attr("r", 4)
        .attr("class", "surprised")
        .style("fill", "green");

    enter.append("circle")
        .attr("cx", function (d, i) {
            let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
            if (d.EventMarker == "P1") {
                return Math.floor(Math.random() * (individualWidth + 1));

            }
            else if (d.EventMarker == "P2") {
                return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

            }
            else {
                return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
            }

        })
        .attr("cy", d => yScale(d.Scared))
        .attr("r", 4)
        .attr("class", "scared")
        .style("fill", "purple");

    enter.append("circle")
        .attr("cx", function (d, i) {
            let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
            if (d.EventMarker == "P1") {
                let number = Math.floor(Math.random() * (individualWidth + 1));
                console.log(number);
                return number;

            }
            else if (d.EventMarker == "P2") {
                return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

            }
            else {
                return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
            }

        })
        .attr("cy", d => yScale(d.Disgusted))
        .attr("r", 4)
        .attr("class", "disgusted")
        .style("fill", "black");



    //essential for hover functionality
    d3.selectAll("circle")
        .on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", 1);

            tooltip.html(`Participant: ${d.Participant} <br/> Gender: ${d.Gender} <br/> Age: ${d.Age} <br/> Drink: ${d.EventMarker}`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        })
        ;


}