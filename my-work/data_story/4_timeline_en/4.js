let w = 1425;
let h = 700;
let padding = 75;
// let side_padding = ;
// let color= (2,139,211);
function getSize(datapoint,i) {

    // console.log(datapoint.size);
    if(datapoint.size == 1)
    { return 5;}
    else if(datapoint.size == 2)
    { return 10;}
    else if(datapoint.size == 3)
    { return 20;}
};

function getColor(datapoint,i) {

    // console.log(datapoint.color);
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
let placement= d3.range(500,700);
let xScaleCountry= d3.scaleBand().range([padding,w-padding]);
let xScalePosNeg= d3.scaleBand().range([padding,w-padding]);
let xScaleYear= d3.scaleTime().range([padding,w-padding]);
//modify scale
let timeParse= d3.timeParse("%Y");
// console.log(timeParse(2015));


d3.json("data.json").then(function(incomingData){
  // console.log(incomingData);
  incomingData.forEach(d=>{
    d.parsedDate = timeParse(d.year);
    d.eventType = d.color=="Green"?"Positive":"Negative";
  })


  let extent=d3.extent(incomingData,function(d){
    return d.parsedDate;
  })
  // console.log(extent);
  xScaleYear.domain(extent);
  // console.log( xScaleYear( incomingData[12].parsedDate ) );
  let boxYear= viz.append("rect")
    .attr("class","box1")
    .attr("x", 50)
    .attr("y", 0)
    .attr("width", 1300)
    .attr("height", 200)
    .attr("fill","rgb(1,1,1,0)")
    .style("cursor","pointer")
    .on(
          "click", changeToYearGraph
        );

  let xAxisYearGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisYear=d3.axisBottom(xScaleYear);
  let xAxisYearYPos = h -500;
  xAxisYearGroup.attr("transform", "translate(0,"+xAxisYearYPos+")");
  function createYearAxis(){
    xAxisYearGroup.call(xAxisYear);
  }

  let countries = d3.nest().key(d=>d.country).entries(incomingData).map(d=>d.key);
  // console.log(countries);
  xScaleCountry.domain(countries);
  // console.log( xScaleCountry( incomingData[9].country ) );
  let boxCountry= viz.append("rect")
    .attr("class","box2")
    .attr("x", 50)
    .attr("y", 200)
    .attr("width", 1300)
    .attr("height", 200)
    .style("cursor","pointer")
    .attr("fill","rgb(1,1,1,0)")
    .on(
          "click", changeToCountryGraph
        );
  let xAxisCountryGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisCountry=d3.axisBottom(xScaleCountry);

  let xAxisCountryYPos = h -300;
  xAxisCountryGroup.attr("transform", "translate(0,"+xAxisCountryYPos+")");
  function createCountryAxis(){
    xAxisCountryGroup.call(xAxisCountry);
  }






  xScalePosNeg.domain( ["Positive", "Negative"] )
  console.log( xScalePosNeg( incomingData[17].eventType ) );
  let boxPosNeg= viz.append("rect")
    .attr("class","box3")
    .attr("x", 50)
    .attr("y", 400)
    .attr("width", 1300)
    .style("cursor","pointer")
    .attr("height", 200)
    .attr("fill","rgb(1,1,1,0)")
    .on(
          "click", changeToPosNegGraph
        );
  let xAxisPosNegGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisPosNeg=d3.axisBottom(xScalePosNeg);
  let xAxisPosNegYPos = h -50;
  xAxisPosNegGroup.attr("transform", "translate(0,"+xAxisPosNegYPos+")");
  function createPosNegAxis(){
    xAxisPosNegGroup.call(xAxisPosNeg);
  }

  incomingData.forEach(d=>{
    d.x= xScaleYear(d.parsedDate);
    d.y=h/7
  })

  let simulationYear = d3.forceSimulation(incomingData)
    .force("collide",d3.forceCollide(function(d){
      return getSize(d)
    }))
    .force("x",d3.forceX(function(d){return xScaleYear(d.parsedDate)}))
    .force("y",d3.forceY(function(d){return h/7}))
    .on("end",simulationYearEnded)
    .tick(100)
  ;
  function simulationYearEnded(){
    console.log("calculated year");
    // creating axis
    createYearAxis();


    incomingData.forEach(function(d){
      d.yearx = d.x;
      d.yeary = d.y;
      d.x= xScaleCountry(d.country)+ xScalePosNeg.bandwidth()/24;
      d.y=h/7*3;
    });

    initGraph();

    let simulationCountry = d3.forceSimulation(incomingData)
      .force("collide",d3.forceCollide(function(d){
        return getSize(d)}))
        .force("x",d3.forceX(function(d){return xScaleCountry(d.country)+ xScalePosNeg.bandwidth()/24}))
      .force("y",d3.forceY(function(d){return h/7*3}))
      .on("end",simulationCountryEnded)
      .tick(100)
    ;
  }

  function simulationCountryEnded(){
    console.log("calculated country");
    // creating axis
    createCountryAxis();

    incomingData.forEach(function(d){
      d.countryx = d.x;
      d.countryy = d.y;
      d.x= xScalePosNeg(d.eventType) + xScalePosNeg.bandwidth()/2;
      d.y=h/7*5.5;
    });
    // changeToCountryGraph();

    let simulationPosNeg = d3.forceSimulation(incomingData)
      .force("collide",d3.forceCollide(function(d){
        return getSize(d)
      }))
      .force("x",d3.forceX(function(d){return xScalePosNeg(d.eventType) + xScalePosNeg.bandwidth()/2}))
    .force("y",d3.forceY(function(d){return h/7*5.5}))
      .on("end",simulationPosNegEnded)
      .tick(100)
    ;
  }
  function simulationPosNegEnded(){
    console.log("calculated posneg");
    // creating axis
    createPosNegAxis();
    incomingData.forEach(function(d){
      d.posnegx = d.x;
      d.posnegy = d.y;
    });
  }

  // console.log(incomingData);
  var tooltip = d3.select("#container")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

  // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  function showTooltip(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html(d.year+ " : " + d.country + " - " + d.event)
      .style("left", (d3.mouse(this)[0]+0) + "px")
      .style("top", (d3.mouse(this)[1]+0) + "px")
      .style("position","fixed")
  };
  function moveTooltip(){
    tooltip
      .style("left", (d3.mouse(this)[0]+0) + "px")
      .style("top", (d3.mouse(this)[1]+0) + "px")
  };
  function hideTooltip(){
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  };

  function initGraph(){
      viz.selectAll(".datapoint").data(incomingData).enter()
      .append("circle")
      .attr("class", "datapoint")
      .attr("cx",function(d){
        console.log(d);
        return d.yearx;
      })
      .attr("r",getSize).attr("fill",getColor)
      .on("mouseover", showTooltip )
      .on("mousemove", moveTooltip )
      .on("mouseleave", hideTooltip )
      .attr("cy",function(d){
        return h -500;
      })
      .transition()
      .attr("cy",function(d){
        return d.yeary;
      })
      ;
  }
  function changeToYearGraph(){
    viz.selectAll(".datapoint")
    .transition()
    .attr("cx",function(d){
      return d.yearx;
    })
    .attr("cy",function(d){
      return d.yeary;
    })
    ;
  }
  function changeToCountryGraph(){
    viz.selectAll(".datapoint")
    .transition()
    .attr("cx",function(d){
      return d.countryx;
    })
    .attr("cy",function(d){
      return d.countryy;
    })
    ;
  }
  function changeToPosNegGraph(){
    viz.selectAll(".datapoint")
    .transition()
    .attr("cx",function(d){
      return d.posnegx;
    })
    .attr("cy",function(d){
      return d.posnegy;
    })
    ;
  }


  });
