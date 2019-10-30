// data we work with
let data = [
  {
    "laughs": 0,
    "mood": 0
  },
  {
    "laughs": 3,
    "mood": 6
  },
  {
    "laughs": 4,
    "mood": 3
  },
  {
    "laughs": 8,
    "mood": 9
  }
];

 function getX(d){
   return d.laughs *50;
 }

 function getY(d){
return d.mood *50;
 }

let w = 900;
let h = 500;
let circleData;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;

viz.selectAll("viz").data(data).enter().append("circle")
                                          .attr("cx", getX)
                                          .attr("cy", getY)
                                          .attr("r", 20)
;
