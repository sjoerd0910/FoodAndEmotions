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

let svg = d3.select(".scatterplot").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)


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
    loadData();
    let happy = axisContainer.selectAll(".happy").data(finalArray);
    happy.transition().duration(10).attr("cy", d => yScale(d.Happy));

    let sad = axisContainer.selectAll(".sad").data(finalArray);
    sad.transition().duration(10).attr("cy", d => yScale(d.Sad));

    let angry = axisContainer.selectAll(".angry").data(finalArray);
    angry.transition().duration(10).attr("cy", d => yScale(d.Angry));

    let surprised = axisContainer.selectAll(".surprised").data(finalArray);
    surprised.transition().duration(10).attr("cy", d => yScale(d.Surprised));

    let scared = axisContainer.selectAll(".scared").data(finalArray);
    scared.transition().duration(10).attr("cy", d => yScale(d.Scared));

    let disgusted = axisContainer.selectAll(".disgusted").data(finalArray);
    disgusted.transition().duration(10).attr("cy", d => yScale(d.Disgusted));

    let neutral = axisContainer.selectAll(".neutral").data(finalArray);
    neutral.transition().duration(10).attr("cy", d => yScale(d.Neutral));
}



function makeVisual() {
    let svg = d3.select("svg")

    let enter = axisContainer.selectAll("circle").data(finalArray).enter();

    if (happyBox.checked) {
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
    }

    if (sadBox.checked) {
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
    }

    if (angryBox.checked) {
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
    }

    if (surprisedBox.checked) {
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
    }

    if (scaredBox.checked) {
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
    }

    if (disgustedBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
                if (d.EventMarker == "P1") {
                    let number = Math.floor(Math.random() * (individualWidth + 1));
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
    }

    if (neutralBox.checked) {
        enter.append("circle")
            .attr("cx", function (d, i) {
                let individualWidth = (width - margin.inbetween - margin.inbetween - margin.left - margin.right) / 3;
                if (d.EventMarker == "P1") {
                    let number = Math.floor(Math.random() * (individualWidth + 1));
                    return number;

                }
                else if (d.EventMarker == "P2") {
                    return Math.floor(Math.random() * ((individualWidth * 2 + margin.inbetween) - (individualWidth + margin.inbetween) + 1) + (individualWidth + margin.inbetween));

                }
                else {
                    return Math.floor(Math.random() * ((individualWidth * 3 + margin.inbetween * 2) - (individualWidth * 2 + margin.inbetween * 2) + 1) + (individualWidth * 2 + margin.inbetween * 2));
                }

            })
            .attr("cy", d => yScale(d.Neutral))
            .attr("r", 4)
            .attr("class", "neutral")
    }





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
                .duration(200)
                .style("opacity", 0);
        })
        ;


}