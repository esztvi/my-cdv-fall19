let w = 1425;
let h = 800;
let padding = 50;


let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
  .style("background-color", "lavender")
;
d3.json("data.json").then(function(incomingData){
  console.log(incomingData);
});
