let w = 1200;
let h = 800;
let padding = 50;
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
  // check it:
  console.log(allAreas);
  let xScale = d3.scaleBand()
  .domain(allAreas)
  .range([padding, w-padding])
  .paddingInner(0.1)
  ;
  let xAxis = d3.axisBottom(xScale)
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.area==d)[0].area;});
  // let xScale = d3.scaleBand().domain(incomingData.map(function(d) {return d.area})).range([100, 1100]);
  // console.log(xScale);
  let yScale = d3.scaleBand().domain([22205,1757618]).range([100, 800]);
  let ChartGroup = viz.append("g")
    .classed("ChartGroup",true)
    // .attr("transform",getGroupTranslation)

    // let towers = datagroups
      // .append("path")
      // .classed("arcSlice", true)
      // .attr("height",getHeight)
      // .attr("fill", getColor)
      // .attr("d", arcFunction)
    // ;



  function getIndustry (d) {
    return (d.industry)
  }
}
d3.json("citycomp.json").then(gotData);
