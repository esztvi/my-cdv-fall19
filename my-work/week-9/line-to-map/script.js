let w = 1200;
let h = 800;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "lavender")
;
//
//
// // IMPORT DATA
d3.json("ghana.geojson").then(function(geoData){
  console.log(geoData);
//
//   // PRINT DATA
//   console.log(incomingData);
let projection =d3.geoEquirectangular().center([-1.07, 8.17]).translate([w/2,h/2]).fitExtent([[0,0],[w,h]],geoData);
//   // SCALES (to translate data values to pixel values)
//   let xDomain = d3.extent(incomingData, function(d){ return Number(d.year); })
//   let xScale = d3.scaleLinear().domain(xDomain).range([padding,w-padding]);
//   let yDomain = d3.extent(incomingData, function(d){ return Number(d.birthsPerThousand); })
//   let yScale = d3.scaleLinear().domain(yDomain).range([h-padding,padding]);
//
//
//   // PATH (line) MAKER - gets points, returns one of those complicated looking path strings
let pathMaker = d3.geoPath(projection);
//   let lineMaker = d3.line()
//       .x(function(d){
//         return xScale(Number(d.year));
//       })
//       .y(function(d){
//         return yScale(Number(d.birthsPerThousand));
//       })
//   ;
//
//   // CREATE SHAPES ON THE PAGE!
viz.datum(geoData)
    .append("path")
      // .attr("class", "line")
      .attr("d", pathMaker)
      // .attr("fill", "none")
      // .attr("stroke", "black")
      // .attr("stroke-width", 8)
  ;
//
//
//
//
})
//)
