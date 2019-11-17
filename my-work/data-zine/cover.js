let w = 1200; //single page
let h = 800;
let innerRadius = 80;
let outerRadius = Math.min(w, h) / 2;   // the outerRadius goes from the middle of the SVG area to the border
let paddingSide = 200;
let paddingOther = 100;
let padding = 8;


// append the svg object to the body of the page
let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

// .range([innerRadius, outerRadius])   // Domain will be define later.
// .domain([0, 26]); // Domain of Y is from 0 to the max seen in the data
let ColorScale = d3.scaleLinear().domain([0,10,26]).range(["lightblue","blue","midnightblue"]);
function getColor(d,i){
  return ColorScale(d.Value);
}

function getGroupTranslation(d, i){
  return "translate(" + w / 2 + "," + ( h/2 - 10)+ ")"; // Add 100 on Y translation, cause upper bars are longer

}

  // Add bars
function gotData(incomingData){
  console.log(incomingData);


  let xScale = d3.scaleBand().domain(incomingData.map(function(d) {return d.Name})).range([0, 2 * Math.PI]);
  // Y scale
  let yScale = d3.scaleBand().domain([0, 26]).range([innerRadius, outerRadius]);

  let circleChartGroup = viz.append("g")
    .classed("circleChartGroup",true)
    .attr("transform",getGroupTranslation)

  ;
let title = circleChartGroup
.append("text")
  .attr("x", -10)
  .attr("y", -350)
  .attr("text-anchor", "left")
  .style("font-size", "20px")
  .attr("font-family", "zapfino")
  .style("fill","midnightblue")
  .style("text-decoration", "underline")
  .text("Incoming Messages Over the Course of Five Days")
  ;
  let subtitle = circleChartGroup
  .append("text")
    .attr("x", 300)
    .attr("y", -300)
    .attr("text-anchor", "left")
    .style("font-size", "15px")
    .attr("font-family", "zapfino")
    .style("fill","midnightblue")
    .style("text-decoration", "underline")
    .text("(September 10 - September 15)")
    ;
  let datagroups = circleChartGroup.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .classed("datagroup", true)

  ;

function getName (d) {
  return (d.Name)
}

  let arcFunction = d3.arc()     // imagine your doing a part of a donut plot
    .innerRadius(innerRadius)
    .outerRadius(function(d){
      return yScale(d.Value)
    })
    .startAngle(function(d){
      return xScale(d.Name)
    })
    .endAngle(function(d){
      return xScale(d.Name) + xScale.bandwidth();
    })
    .padAngle(0.01)
  ;

  let towers = datagroups
    .append("path")
    .classed("arcSlice", true)
    // .attr("height",getHeight)
    .attr("fill", getColor)
    .attr("d", arcFunction)
  ;

  let labels = datagroups
  .append("g")
  .attr("text-anchor", function(d) { return (xScale(d.Name) + xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
  .attr("transform", function(d) { return "rotate(" + ((xScale(d.Name) + xScale.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (yScale(d['Value'])+10) + ",0)"; })
  .append("text")
  .text(getName)
  .attr("transform", function(d) { return (xScale(d.Name) + xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
      .attr("alignment-baseline", "middle")
      ;

  // .attr("x",xScale)

  // datagroups.attr("transform", getGroupTranslation);
}

d3.json("data.json").then(gotData);
