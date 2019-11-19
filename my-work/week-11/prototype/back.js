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

function gotData(incomingData){
  // console.log(incomingData);
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
// position the group along the x axis (check the inspector tool to see
// what we are doing):
graphGroup.attr("transform", function(d, i){
  return "translate("+ xScale(d.area)+ "," + (h - padding) + ")"
})
};
dataGroups
.append("rect")
.attr("width", function(){
  // the scaleBand we are using
  // allows us to as how thick each band is:
  return xScale.bandwidth();
})
.attr("height", function(d, i){
  // the idea is that we make the bar
  // as high as dictated by the value...
  return yScale(d.population);
})
.attr("y", function(d,i){
  // ...and then push the bar up since it
  // is drawn from top to bottom
  return -yScale(d.population);
})
.attr("fill", "black")
;
d3.json("citycomp.json").then(gotData);
