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
//250,26,9
// }
function getColor (datapoint,i) {

    console.log(datapoint.location);
    if(datapoint.location == "Hungary")
    { return "rgb(9,130,71)";}
    else if(datapoint.location == "Abroad")
    { return "rgb(250,26,9)";}
};

function getCountry (datapoint,i) {

    console.log(datapoint.country);
    if(datapoint.country == "Hungary")
    { return "rgb(250,26,9)";}
    else if(datapoint.country == "Romania")
    { return "rgb(252,209,21)";}
    else if(datapoint.country == "Ukraine")
    { return "rgb(0, 91, 187)";}
    else if(datapoint.country == "England")
    { return "rgb((0, 36, 125)";}
    else if(datapoint.country == "United States")
    { return "rgb(60, 59, 110)";}
    else if(datapoint.country == "Canada")
    { return "rgb(255, 0, 0)";}
    else if(datapoint.country == "Australia")
    { return "rgb(0, 0, 139)";}
    else if(datapoint.country == "Austria")
    { return "rgb(237, 41, 57)";}
    else if(datapoint.country == "Switzerland")
    { return "rgb(213, 43, 30)";}
    else if(datapoint.country == "Sweden")
    { return "rgb(255, 205, 0)";}
    else if(datapoint.country == "Germany")
    { return "rgb(0, 0, 0)";}
    else if(datapoint.country == "Russia")
    { return "rgb(0, 51, 160)";}
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
function removeTransitions(){
					d3.select("rect").transition().attr("transform", "translate(0)").style("fill", getColor);
				}
        function runTransitions(){

        					var HUCheckboxSelected = d3.select("#HU").property("checked");
        					var OTHERCheckboxSelected = d3.select("#OTHER").property("checked");
        					var bothCheckboxSelected = d3.select("#both").property("checked");

        					if(!HUCheckboxSelected && !OTHERCheckboxSelected && !bothCheckboxSelected){
        						return;
        					}
                  		var rectTransition = d3.select("rect").transition();
                      if(HUCheckboxSelected){
						rectTransition.attr("transform", "translate(150)").duration(1000);
					}
					if(OTHERCheckboxSelected){
						rectTransition.attr("width", "100").attr("height", "100").duration(1000);
					}
					if(bothCheckboxSelected){
						rectTransition.style("fill",getCountry).duration(1000);
					}
        }

d3.json("citycomp.json").then(gotData);
