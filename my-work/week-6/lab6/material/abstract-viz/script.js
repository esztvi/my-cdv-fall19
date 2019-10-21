let w = 1200;
let h = 800;
// let drawViz;
// for convenience
let datafile = "data.json";

let dataArray;

// function to retrieve only the data points
// belonging to one step in time:
function getName(data, name){
  return data.filter(function(datapoint){
    if(datapoint.name == name){
      return true;
    }else{
      return false;
    }
  });
}

function getStep(data, step){
  return data.filter(function(datapoint){
    if(datapoint.step == step){
      return true;
    }else{
      return false;
    }
  });
}

// creating the svg that holds everything else
// we do this outside the gotData function to
// keeps things clean
let viz = d3.select("#container")
  .append('svg')
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "darkcyan")
;


function gotData(incomingData){

  dataArray = incomingData;
  // checking out our data
  console.log(incomingData, "A");
  // testing the filter function defined above
  console.log(getStep(incomingData, "A"));

  let xDomain = d3.extent(incomingData, function(datapoint){
  return datapoint.x;
});
console.log(xDomain);


let yDomain = d3.extent(incomingData, function(datapoint){
  return datapoint.y;
})
console.log(yDomain);

// general padding of our visualization
let padding = 40;
// scale to map from min and max of our x values to the
// boundaries (minus padding) of our svg:
let xScale = d3.scaleLinear().domain(xDomain).range([padding, w-padding]);

// create axis for this scale
let xAxis = d3.axisBottom(xScale);
// create a groyp to gold the axis elements
let xAxisGroup = viz.append("g").attr("class", "xaxis");
// tell d3 to fill the group with the axis elements
xAxisGroup.call(xAxis);
// position the axis at the bottom of the svg
xAxisGroup.attr("transform", "translate(0, "+ (h-padding) +")");

// note how we flip the orientation (in the range) of our y scale
// to make sure that low y values are at the bottom of the graph
let yScale = d3.scaleLinear().domain(yDomain).range([h-padding, padding]);
let yAxis = d3.axisLeft(yScale);
let yAxisGroup = viz.append("g").attr("class", "yaxis");
yAxisGroup.call(yAxis);
yAxisGroup.attr("transform", "translate("+padding+",0)");

// let step = 140;
// drawViz();
// setInterval(function(){
//  step += 10;
// },1000);
// ;



function drawViz(name){
console.log('drawViz runs');
let data = getName(dataArray, name);
// console.log(data);
// d3.shuffle(data);
// console.log(data);
let vizgroup= viz.append("g").attr("class","vizgroup");

let datagroups = vizgroup.selectAll(".datagroup").data(data,function(d){
  return d.step;
})

datagroups.transition().attr("transform", function (d, i) {
  return "translate(" + xScale(d.x) + ", " + yScale(d.y) + ")"
});
let enteringDataGroup = datagroups.enter()
.append("g")
.attr("class", "datagroup")
;
enteringDataGroup.append("circle")
    .attr("r", 5)
.attr("fill", "WhiteSmoke")
;

// enteringDataGroup.append("text")
//     .text(function(d,i){
//       console.log(d);
//       return d.name;
    // })
// .attr("x",8)
// .attr("y",5)
// .attr("fill", "whitesmoke")
    // ;
// ;
enteringDataGroup.attr("transform", function(d, i){
  return "translate("+ xScale(d.x) + ", " + yScale(d.y) + ")"
});

}
drawViz("A");

}





d3.json(datafile).then(gotData);
