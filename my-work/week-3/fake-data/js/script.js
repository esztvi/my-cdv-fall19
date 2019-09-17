function randomNumber(){
  return Math.random()*800; //returns a random number between 0 and 800;
}

let viz = d3.select("#viz-container")
                  .append("svg")
                    .attr("id","viz")
                    // .attr("class", "something")
                    .attr("width","800")
                    .attr("height","800")
;
//
// // current selction <svg> </svg>
//
// viz.attr("height", 500);
//
// let myCircle = viz.append("rect")
//             .attr("x", 200)
//             .attr("y", 100)
//             .attr("width", 50)
//             .attr("height", 50)
// ;
//
// myCircle.attr("fill", "lavender");
//
let myData = [2,57,96,34,19];

viz.selectAll("circle").data(myData).enter().append("circle")
                                          .attr("cx", randomNumber)
                                          .attr("cy", 400)
                                          .attr("r", 20)
;
