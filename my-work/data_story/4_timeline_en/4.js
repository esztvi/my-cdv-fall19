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
};

function getColor(datapoint,i) {

    console.log(datapoint.color);
    if(datapoint.color == "Red")
    { return "rgb(255,22,26)";}
    else if(datapoint.color == "Green")
    { return "whitesmoke";}
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
  let xAxisYPos = h -500;
  xAxisGroup.attr("transform", "translate(0,"+xAxisYPos+")");
  xAxisGroup.call(xAxis);
  // let domain=[minvalue,maxvalue];
  incomingData.forEach(d=>{
    d.x= xScaleYear(timeParse(d.year));
    d.y=h/7

    // xAxisGroupCountry=viz.append("g").attr("class","xaxisgroup").attr("fill","whitesmoke").attr("stroke","whitesmoke").attr("line","whitesmoke");
    // let xAxisCountry=d3.axisBottom(xScaleCountry);
    // let xAxisYPosCountry = h -700;
    // xAxisGroupCountry.attr("transform", "translate(0,"+xAxisYPosCountry+")");
    // xAxisGroupCountry.call(xAxisCountry);
    // // let domain=[minvalue,maxvalue];
    // incomingData.forEach(d=>{
    //   d.x= xScaleCountry(d.country);
    //   d.y=h/4
  })
  // viz.selectAll(".datapoint").data(incomingData).enter().append("circle").attr("class", "datapoint").attr("cx",function(d){return xScaleYear(timeParse(d.year))}).attr("cy",h/2).attr("r",4);

  let simulatiion= d3.forceSimulation(incomingData)
  // .force("forceX",d3.forceX(function(d){
  //   return xScaleYear(timeParse(d.year))
  // }))
  // .force("forceY",d3.forceY(h/2))
  .force("collide",d3.forceCollide(function(d){
    return getSize(d)
  }))
  // .on("tick", simulationRan)
  .on("end",simulationEnded)
    .tick(100)
  ;
  function simulationEnded(){
    // console.log(incomingData);
    incomingData.forEach(function(d){
      d.yearx = d.x;
      d.yeary = d.y;
      d.x= xScaleYear(timeParse(d.year));
      d.y=h/7
    })}
  let simulatiion1= d3.forceSimulation(incomingData)
    .force("collideCount",d3.forceCollide(function(d){
      return getSize(d)
    }))
    .on("end",countryEnded)
      .tick(100)
    ;
    function countryEnded(){
      // console.log(incomingData);
      incomingData.forEach(function(d){
        d.countryx = d.x;
        d.countryy = d.y;
        d.x= xScaleCountry;
        d.y=h/3;
      })}
        let simulatiion2= d3.forceSimulation(incomingData)
      .force("collideMigrate",d3.forceCollide(function(d){
        return getSize(d)
      }))
      .on("end",migrationEnded)
        .tick(100)
      ;
      function migrationEnded(){
        // console.log(incomingData);
        incomingData.forEach(function(d){
          d.migrationx = d.x;
          d.migrationy = d.y;
          d.x= XScalePosNeg;
          d.y=h/1.5;
        })}
    // console.log("just ran");
    // console.log(incomingData[0].x);
    viz.selectAll(".datapoint").data(incomingData).enter().append("circle").attr("cx",function(d){
      return d.x;
    })
    .attr("r",getSize).attr("fill",getColor)
    .attr("cy",function(d){
      return h -500;
    })
    .transition()
    .attr("cy",function(d){
      return d.y;
    })
    ;

  })



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
;
