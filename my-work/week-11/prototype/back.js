let w = 1200;
let h = 800;
let padding = 50;
// let side_padding = ;
// let color= (2,139,211);
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color","(2,139,211)")
    // .style("background-color", #028bd3)
;
// function getGroupTranslation(d, i){
//   return "translate(" + w / 2 + "," + ( h/2)+ ")"; // Add 100 on Y translation, cause upper bars are longer
//
// }
function getColor (datapoint,i) {

    console.log(datapoint.location);
    if(datapoint.location == "Hungary")
    { return "rgb(250,26,9)";}
    else if(datapoint.location == "Abroad")
    { return "rgb(9,130,71)";}
};
function gotData(incomingData){
  console.log(incomingData);
  let allAreas = incomingData.map(function(d){return d.area});

  console.log(allAreas);
  let xScale = d3.scaleBand()
  .domain(allAreas)
  .range([padding, w-padding])
  .paddingInner(0.1)
  ;
  let xAxis = d3.axisBottom(xScale)
  xAxis.tickFormat(d=>{return incomingData.filter(dd=>dd.area==d)[0].area;});
  let xAxisGroup = viz.append("g").classed("xAxis", true);
  xAxisGroup.call(xAxis);
  xAxisGroup.selectAll("line").remove();
  xAxisGroup.selectAll("text").remove();
  xAxisGroup.append("text").text("Area");
  xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")").style("color", "whitesmoke").style("stroke-width","11");
let yMax = d3.max(incomingData, function(d){return d.population});
yDomain = [0, yMax];
let yScale = d3.scaleLinear().domain(yDomain).range([0, h-padding*2]);
let graphGroup = viz.append("g").classed("graphGroup", true);
let dataGroups = graphGroup.append("g").classed("dataGroups", true);
// position the group along the x axis (check the inspector tool to see
// what we are doing):
dataGroups.selectAll('.rect').data(incomingData).enter().append("rect").attr("width", function(){
  return xScale.bandwidth();
}).attr("height", function(d, i){
  console.log(d.population);
  return yScale(d.population);
}).attr("y", function(d,i){
  return -yScale(d.population);
}).attr("fill", getColor).attr("transform", function(d, i){
  return "translate("+ xScale(d.area)+ "," + (h - padding) + ")"
  ;
})
d3.select(".dataGroups")
  .selectAll('.rect')
    .data(incomingData.sort(function(a, b){return b-a}))
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
};


d3.json("citycomp.json").then(gotData);
