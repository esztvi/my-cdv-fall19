let w = 2400; //double page
let h = 800;


let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

// get data
d3.json("stuff.json").then(gotData);
