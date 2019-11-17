let w = 1200;
let h = 800;
// let color= (2,139,211);
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "lavender")
;
function getGroupTranslation(d, i){
  return "translate(" + w / 2 + "," + ( h/2)+ ")"; // Add 100 on Y translation, cause upper bars are longer

}

function gotData(incomingData){
  console.log(incomingData);
  let xScale = d3.scaleBand().domain([0, 26]).range([100, 800]);
  // console.log(xScale);
  let yScale = d3.scaleBand().domain(incomingData.map(function(d) {return d.industry})).range([100, 1100]);
  let ChartGroup = viz.append("g")
    .classed("ChartGroup",true)
    .attr("transform",getGroupTranslation)

    let towers = datagroups
      .append("path")
      // .classed("arcSlice", true)
      .attr("height",getHeight)
      .attr("fill", getColor)
      // .attr("d", arcFunction)
    ;



  function getIndustry (d) {
    return (d.industry)
  }
}
d3.json("data.json").then(gotData);
