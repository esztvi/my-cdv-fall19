let w = 2400; //double page
let h = 800;


let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;
let paddingSide = 8;
let xScale = d3.scaleLinear().domain([0,100]).range([paddingSide,(w - paddingSide)]);
function xPosition(d, i){
  return xScale(i);
}

function yPosition(d, i){
  return h/2 ; //- d.height
}

function getGroupTranslation(d, i){
  return "translate(" + xPosition(d,i) + "," + yPosition(d,i) + ")";
}

function getName(d, i){
  return d.name + " - " + d.height
}
// let yScale;
let paddingTop = 8;
let yScale = d3.scaleLinear().domain([0,828]).range([0,(h/2 - paddingTop)]);
function getHeight(d,i){
  return yScale(d.height) ;

}
function getPush(d,i){
  return - yScale(d.height) ;

}
let ColorScale = d3.scaleLinear().domain([0,700,828]).range(["orange","blue","blueviolet"]);
function getColor(d,i){
return ColorScale(d.height);
}

function gotData(incomingData){
  console.log(incomingData);

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .classed("datagroup", true)
  ;

  let towers = datagroups.append("rect")
      .attr("x", 0)
      .attr("y", getPush)
      .attr("width", 20)
      .attr("height",getHeight)
      .attr("fill", getColor)
  ;

  let labels = datagroups.append("text")
      .text(getName)
      .attr("fill", "red")
      .attr("transform", "rotate(90)")
  ;

  datagroups.attr("transform", getGroupTranslation);

}

d3.json("buildings.json").then(gotData);
