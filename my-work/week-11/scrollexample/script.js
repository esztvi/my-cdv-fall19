import currentBox from "./leonScroller.js";
// imports just one function from a different file
// more info, import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// more info, export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

// we don't hardcode w and h this time
// but keep them responsive
// (see adjustVizHeight and resized function
// that are defined at the bottom)
let w, h;
let heightRatio = 1;
let padding = 30;

let viz = d3.select("#visualization")
    .append("svg")
  .style("background-color", "lavender")
;

// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
// (function definition at the bottom)
adjustVizHeight();
function gotData(incomingData){
  console.log(incomingData);
  let countryData = incomingData.map(function(d){return d.gender});

  console.log(countryData);
  let xScale = d3.scaleBand()
  .domain(countryData)
  .range([padding, w-padding])
  .paddingInner(0.1)
  ;
  let xAxis = d3.axisBottom(xScale)
  xAxis.tickFormat(d=>{return incomingData.filter(dd=>dd.gender==d)[0].gender;});
  let xAxisGroup = viz.append("g").classed("xAxis", true);
  xAxisGroup.call(xAxis);
  xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")").style("color", "black").style("stroke-width","2");
  let yMax = d3.max(incomingData, function(d){return d["pubdate-yr"]});
  console.log(d.pubdate_yr);
  let yDomain = [0, yMax];
  let yScale = d3.scaleLinear().domain(yDomain).range([0, h-padding*2]);
  let graphGroup = viz.append("g").classed("graphGroup", true);
  let dataGroups = graphGroup.append("g").classed("dataGroups", true);
}

// your script starts here, e.g. load data here.



// scrolling event listener
// you might move this block into the part of your code
// in which your data is loaded/available
let previousSection;
d3.select("#textboxes").on("scroll", function(){
  // the currentBox function is imported on the
  // very fist line of this script
  currentBox(function(box){
    console.log(box.id);

    if(box.id=="two" && box.id!=previousSection){
      console.log("changing viz");
      // trigger a new transition
      previousSection = box.id;
    }

  })
})






// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
function adjustVizHeight(){
  viz.style("height", function(){
    w = parseInt(viz.style("width"), 10);
    h = w*heightRatio;
    return h;
  })
}
function resized(){
  adjustVizHeight()
}
window.addEventListener("resize", resized);

d3.tsv("translatedbooks.tsv").then(gotData);
