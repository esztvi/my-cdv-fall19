let w = 1425;
let h = 700;
let padding = 50;
// let side_padding = ;
// let color= (2,139,211);
function getSize(datapoint,i) {

    console.log(datapoint.size);
    if(datapoint.size == 1)
    { return 5;}
    else if(datapoint.size == 2)
    { return 10;}
    else if(datapoint.size == 3)
    { return 20;}

    return "datapoint.medium";
};
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)

  // .style("background-color", "lavender")
;
let xScaleCountry= d3.scaleBand().range([padding,w-padding]);
let XScalePosNeg= d3.scaleBand().range([padding,w-padding]);
let xScaleYear= d3.scaleTime().range([padding,w-padding]);
d3.json("data.json").then(function(incomingData){
  console.log(incomingData);

  //modify scale
  let timeParse= d3.timeParse("%Y");
  console.log(timeParse(2015));

  let extent=d3.extent(incomingData,function(d){
    return timeParse(d.year);
  })
  console.log(extent);
  xScaleYear.domain(extent);
  let xAxisGroup=viz.append("g").attr("class","xaxisgroup").attr("fill","whitesmoke").attr("stroke","whitesmoke").attr("line","whitesmoke");
  let xAxis=d3.axisBottom(xScaleYear);
  let xAxisYPos = h -50;
  xAxisGroup.attr("transform", "translate(0,"+xAxisYPos+")");
  xAxisGroup.call(xAxis);
  // let domain=[minvalue,maxvalue];
  incomingData.forEach(d=>{
    d.x= xScaleYear(timeParse(d.year));
    d.y=h/2
  })
  // viz.selectAll(".datapoint").data(incomingData).enter().append("circle").attr("class", "datapoint").attr("cx",function(d){return xScaleYear(timeParse(d.year))}).attr("cy",h/2).attr("r",4);

  let simulatiion= d3.forceSimulation(incomingData)
  // .force("forceX",d3.forceX(function(d){
  //   return xScaleYear(timeParse(d.year))
  // }))
  // .force("forceY",d3.forceY(h/2))
  .force("collide",d3.forceCollide(20))
  // .on("tick", simulationRan)
  .on("end",simulationEnded)
    .tick(100)
  ;
  function simulationEnded(){
    // console.log("just ran");
    // console.log(incomingData[0].x);
    viz.selectAll(".datapoint").data(incomingData).enter().append("circle").transition().attr("cx",function(d){
      return d.x;
    })
    .attr("cy",function(d){
      return d.y;
    }).attr("r",getSize).attr("fill","whitesmoke");

  }



  // console.log(incomingData);
  // function simulationRan(){
  //   // console.log("just ran");
  //   console.log(incomingData[0].x);
  //   viz.selectAll(".datapoint").transition().attr("cx",function(d){
  //     return d.x;
  //   })
  //   .attr("cy",function(d){
  //     return d.y;
  //   })
  // }
})
