// 1. find *real* data (array containing JS objects) in JSON format
// 2. load data (make it *console.loggable* (what a word!) in our script)



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
        function getColor (datapoint,i) {
          
            console.log(datapoint.color);
            if(datapoint.color == "Monday")
            { return "red";}
            else if(datapoint.color == "Tuesday")
            { return "blue";}
            return "datapoint.color";
        }
            else if(datapoint.color == "Wednesday")
            { return "green";}
        }
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

// 5. concept: functions that "return"
// 6. use function to position circles randomly
// 7. realize "who" calls this function / why is there no `()`?
// 8. concept: "passing value into function"
// 9. let's assume: "D3 passes value into the data function"
// 10. if D3 passes a value, how can we receive it?
// 11. use *real* information to impact the x position
// 12. let's assume: "D3 passes another value!"
// 13. how can we receive that value?
// 14. in which ways is D3 making our live easy?
