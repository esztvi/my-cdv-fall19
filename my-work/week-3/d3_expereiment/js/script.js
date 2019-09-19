d3.json("data.json").then(gotData);

// 3. concept: data and datapoint
// 4. make one circle for each datapoint (size and position doesn't matter)
//create svg
d3.select("body")
    .append("svg")
        .attr("width",500)
        .attr("height",500)

        ;
        function randomNumber(datapoint, i)
        {
console.log(datapoint);
// console.log(whatsthesecond);
console.log(i);
            // return Math.random()*500;
            return i * 80;
        }
        function getColor (medium,i) {

            console.log(datapoint.medium);
            if(datapoint.medium == "Viber")
            { return "purple";}
            else if(datapoint.medium == "Snapchat")
            { return "yellow";}
            return "datapoint.color";
        }
            else if(datapoint.medium == "Instagram")
            { return "magenta";}
    {
            else if(datapoint.medium == "WeChat")
            { return "lime";}
        };
        function gotData(incomingData) {
            console.log(incomingData)

    viz.selectAll("circle").data(incomingData)
        .enter()
        .append("circle")
        .attr("cx",randomNumber)
        .attr("cy", 200)
        .attr("r", 20)
        .attr("fill", getColor)
        ;
}
