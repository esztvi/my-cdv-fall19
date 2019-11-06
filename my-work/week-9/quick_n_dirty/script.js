// data we work with
let lowball = [
  { name: "Romania",
    value: 1431807,
  },
  { name: "Slovakia",
    value: 458467,
  },
  { name: "Serbia",
    value: 253899,
  },
  { name: "Ukraine",
    value: 156600,
  },
  { name: "Austira",
    value: 55038,
  },
  { name: "Croatia",
    value: 1055,
  },
  { name: "Slovenia",
    value: 6243,
  },
  { name: "United States",
    value: 1763081,
  },
  { name: "Canada",
    value: 316765,
  },
  { name: "Isreal",
    value: 200000,
  },
  { name: "Germany",
    value: 120000,
  },
  { name: "France",
    value: 6818,
  },
  { name: "Brazil",
    value: 100000,
  },
  { name: "Russia",
    value: 76500,
  },
  { name: "Australia",
    value: 69160,
  },
  { name: "United Kingdom",
    value: 91000,
  },
  { name: "Chile",
    value: 50000,
  },
  { name: "Argentina",
    value: 50000,
  },
  { name: "Sweden",
    value: 16676,
  },
  { name: "Czech Republic",
    value: 9049,
  },
  { name: "Switzerland",
    value: 25000,
  },
  { name: "Turkey",
    value: 6800,
  },
  { name: "Mexico",
    value: 3500,
  },
  { name: "Ireland",
    value: 8648,
  },
  { name: "Finland",
    value: 2283,
  },
  { name: "Poland",
    value: 1718,
  },
  { name: "New Zealand",
    value: 1476,
  },
  { name: "Norway",
    value: 5000,
  },
  { name: "Denmark",
    value: 5525,
  },
  { name: "Italy",
    value: 8181,
  },
  { name: "Belgium",
    value: 6464,
  },
  { name: "Greece",
    value: 2387,
  },
  { name: "Luxemburg",
    value: 1589,
  },
  { name: "Cyprus",
    value: 620,
  },
  { name: "Portugal",
    value: 0,
  },
  { name: "Latvia",
    value: 0,
  },
  { name: "Estonia",
    value: 0,
  },
  { name: "Bulgaria",
    value: 0,
  },
  { name: "Lithuania",
    value: 110,
  },
  { name: "Spain",
    value: 9039,
  }
];
let highball = [
  { name: "Romania",
    value: 1431807,
  },
  { name: "Slovakia",
    value: 458467,
  },
  { name: "Serbia",
    value: 253899,
  },
  { name: "Ukraine",
    value: 156600,
  },
  { name: "Austira",
    value: 92000,
  },
  { name: "Croatia",
    value: 14048,
  },
  { name: "Slovenia",
    value: 6243,
  },
  { name: "United States",
    value: 4000000,
  },
  { name: "Canada",
    value: 316765,
  },
  { name: "Isreal",
    value: 250000,
  },
  { name: "Germany",
    value: 207035,
  },
  { name: "France",
    value: 146000,
  },
  { name: "Brazil",
    value: 1000000,
  },
  { name: "Russia",
    value: 76500,
  },
  { name: "Australia",
    value: 69160,
  },
  { name: "United Kingdom",
    value: 250000,
  },
  { name: "Chile",
    value: 50000,
  },
  { name: "Argentina",
    value: 50000,
  },
  { name: "Sweden",
    value: 33018,
  },
  { name: "Czech Republic",
    value: 19932,
  },
  { name: "Switzerland",
    value: 25000,
  },
  { name: "Turkey",
    value: 6800,
  },
  { name: "Mexico",
    value: 3500,
  },
  { name: "Ireland",
    value: 12000,
  },
  { name: "Finland",
    value: 3000,
  },
  { name: "Poland",
    value: 1500,
  },
  { name: "New Zealand",
    value: 1476,
  },
  { name: "Norway",
    value: 5000,
  },
  { name: "Denmark",
    value: 55000,
  },
  { name: "Italy",
    value: 5000,
  },
  { name: "Belgium",
    value: 6464,
  },
  { name: "Greece",
    value: 2387,
  },
  { name: "Luxemburg",
    value: 1589,
  },
  { name: "Cyprus",
    value: 620,
  },
  { name: "Portugal",
    value: 420,
  },
  { name: "Latvia",
    value: 187,
  },
  { name: "Estonia",
    value: 173,
  },
  { name: "Bulgaria",
    value: 144,
  },
  { name: "Lithuania",
    value: 110,
  },
  { name: "Spain",
    value: 9039,
  }
];
let average = [
  { name: "Romania",
    value: 1431807,
  },
  { name: "Slovakia",
    value: 458467,
  },
  { name: "Serbia",
    value: 253899,
  },
  { name: "Ukraine",
    value: 156600,
  },
  { name: "Austira",
    value: 73519,
  },
  { name: "Croatia",
    value: 7552,
  },
  { name: "Slovenia",
    value: 6243,
  },
  { name: "United States",
    value: 2881541,
  },
  { name: "Canada",
    value: 316765,
  },
  { name: "Isreal",
    value: 225000,
  },
  { name: "Germany",
    value: 163517,
  },
  { name: "France",
    value: 76409,
  },
  { name: "Brazil",
    value: 550000,
  },
  { name: "Russia",
    value: 76500,
  },
  { name: "Australia",
    value: 69160,
  },
  { name: "United Kingdom",
    value: 170500,
  },
  { name: "Chile",
    value: 50000,
  },
  { name: "Argentina",
    value: 50000,
  },
  { name: "Sweden",
    value: 24847,
  },
  { name: "Czech Republic",
    value: 14491,
  },
  { name: "Switzerland",
    value: 25000,
  },
  { name: "Turkey",
    value: 6800,
  },
  { name: "Mexico",
    value: 3500,
  },
  { name: "Ireland",
    value: 10324,
  },
  { name: "Finland",
    value: 2642,
  },
  { name: "Poland",
    value: 1609,
  },
  { name: "New Zealand",
    value: 1476,
  },
  { name: "Norway",
    value: 5000,
  },
  { name: "Denmark",
    value: 27763,
  },
  { name: "Italy",
    value: 8181,
  },
  { name: "Belgium",
    value: 6464,
  },
  { name: "Greece",
    value: 2387,
  },
  { name: "Luxemburg",
    value: 1589,
  },
  { name: "Cyprus",
    value: 620,
  },
  { name: "Portugal",
    value: 210,
  },
  { name: "Latvia",
    value: 94,
  },
  { name: "Estonia",
    value: 87,
  },
  { name: "Bulgaria",
    value: 72,
  },
  { name: "Lithuania",
    value: 110,
  },
  { name: "Spain",
    value: 9039,
  }
];

let data = lowball;

// global variables that we need at various spots:
let w = 1800;
let h = 600;
let xpadding = 150;
let ypadding = 80;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid crimson")
;


// X scale & axis
let xDomain = [0, data.length-1]; //this means our scale expects numbers between 0 and... data.length-1 as and input
let xRange = [xpadding, w-xpadding] //... and will return values between xpadding and w-xpadding as an output
let xScale = d3.scaleLinear().domain(xDomain).range(xRange);
let xAxis = d3.axisBottom(xScale);
let xAxisGroup = viz.append("g").attr("class", "xaxis");
xAxisGroup.call(xAxis);
xAxisGroup.attr("transform", "translate(0,"+(h-ypadding)+")");

// Y scale & axis
let yMax = d3.max(data, function(d){
  // this function returns the value inside each datapoint
  // of which we are looking for the maximum across the dataset.
  return d.value;
});
let yScale = d3.scaleLinear().domain([0, yMax]).range([h-ypadding, ypadding]);
let yAxis = d3.axisLeft(yScale);
let yAxisGroup = viz.append("g").attr("class", "yaxis");
yAxisGroup.call(yAxis);
yAxisGroup.attr("transform", "translate("+xpadding/2+", 0)");


// Group for graph
let graphgroup = viz.append("g").attr("class", "graphgroup");

// Bind data
function keyFunction(d){
  // return a feature of the datapoints that makes them
  // uniquely identifiable
  return d.name;
}
let theSituation = graphgroup.selectAll(".datapoint").data(data, keyFunction);

// Deal with entering data
// create groups for each datapoint and position them
let enteringGroups = theSituation.enter()
  .append("g")
    .attr("class", "datapoint")
    .attr("transform", function(d, i){
      let xPos = xScale(i); //i is the datapoints position in this dataset. our scale expects values between 0 and data.length
      let yPos = yScale(d.value); //our yScale expects the data points value as an input
      return "translate("+xPos+","+yPos+")"
    })
;
// append a circle to each group
enteringGroups
  .append("circle")
    .attr("r", 5)
;
enteringGroups
  .append("text")
    .text(function(d){return d.name})
    .attr("fill", "light green")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
  ;


function update(newdata){

  data = newdata;
  //the data changed


  //                _                __             _
  //  ___  ___ __ _| | ___  ___     / /   __ ___  _(_)___
  // / __|/ __/ _` | |/ _ \/ __|   / /   / _` \ \/ / / __|
  // \__ \ (_| (_| | |  __/\__ \  / /   | (_| |>  <| \__ \
  // |___/\___\__,_|_|\___||___/ /_/     \__,_/_/\_\_|___/
  //
  //update xscale (not "let" needed here, we just update the details that changed with new data)
  xDomain = [0, data.length-1];
  xScale.domain(xDomain); //here we adjust the scale that already exists (-> no "let" needed)
  // update yaxis
  xAxis = d3.axisBottom(xScale);
  // xAxisGroup.call(xAxis); //finally bring the updated axis onto the page
  xAxisGroup.transition().duration(1000).call(xAxis); // modified above line to transition from old to new axis

  // update yscale
  yMax = d3.max(data, function(d){ return d.value;}); // detailed description above
  yScale.domain([0, yMax]);
  //update yAxis
  yAxis = d3.axisLeft(yScale);
  yAxisGroup.transition().duration(1000).call(yAxis);

  //deal with the graph

  //  _     _           _                             _       _
  // | |__ (_)_ __   __| |  _ __   _____      __   __| | __ _| |_ __ _
  // | '_ \| | '_ \ / _` | | '_ \ / _ \ \ /\ / /  / _` |/ _` | __/ _` |
  // | |_) | | | | | (_| | | | | |  __/\ V  V /  | (_| | (_| | || (_| |
  // |_.__/|_|_| |_|\__,_| |_| |_|\___| \_/\_/    \__,_|\__,_|\__\__,_|
  //
  // bind the new data
  theSituation = graphgroup.selectAll(".datapoint").data(data, keyFunction);
  console.log("theSituation: ", theSituation);


  //             _
  //   ___ _ __ | |_ ___ _ __
  //  / _ \ '_ \| __/ _ \ '__|
  // |  __/ | | | ||  __/ |
  //  \___|_| |_|\__\___|_|
  //
  //deal with INCOMING elements:
  // create groups for incoming
  enteringGroups = theSituation.enter()
    .append("g")
  ;
  //append circle to group
  enteringGroups
    .append("circle")
      .attr("r", 5)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  ;
  enteringGroups
    .append("text")
      .text(function(d){return d.name})
      .attr("fill", "teal")
      .attr("font-size", 10)
      .attr("font-family", "sans-serif")
    ;
  //position the group (and animate it)
  enteringGroups.attr("class", "datapoint")

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+",0)";  // position BEFORE transition
    })

    .transition() // transition
    .duration(1000) // transition duration

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+","+yScale(d.value)+")"; // position AFTER transition
    })
  ;

  //
  //            _ _
  //   _____  _(_) |_
  //  / _ \ \/ / | __|
  // |  __/>  <| | |_
  //  \___/_/\_\_|\__|
  //
  // deal with EXITING elements:
  exitingGroups = theSituation.exit();
  //animate exiting elements positions and remove them in the end:
  exitingGroups

    // the element has a certain position on the page aka position BEFORE transition

    .transition() // transition
    .duration(1000) // transition duration

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+","+h+")"; // position AFTER transition
    })
    .remove() // ultimately the group element is removed from the page
  ;



  //                  _       _
  //  _   _ _ __   __| | __ _| |_ ___
  // | | | | '_ \ / _` |/ _` | __/ _ \
  // | |_| | |_) | (_| | (_| | ||  __/
  //  \__,_| .__/ \__,_|\__,_|\__\___|
  //       |_|
  //
  //deal with updating elements:
  theSituation

    .transition() // transition
    .duration(1000) // transition duration

    .attr("transform", function(d, i){
      return "translate("+xScale(i)+","+yScale(d.value)+")"; // position AFTER transition
    })
  ;
  theSituation
    .select("text")
      .text(function(d){return d.name})
      .attr("fill", "purple")
      .attr("font-size", 10)
      .attr("font-family", "sans-serif")
    ;

  updateButtons();
}

function handleMouseOver(d, i) {  // Add interactivity

      // Use D3 to select element, change color and size
      circle
        .attr("fill", "red")
        .attr("r", 10)
      ;

      // Specify where to put label of text
      circle.append("text").attr({
         id: "t" + d.x + "-" + d.y + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
          x: function() { return xScale(d.x) - 30; },
          y: function() { return yScale(d.y) - 15; }
      })
      .text(function() {
        return [d.x, d.y];  // Value of the text
      });
    }

function handleMouseOut(d, i) {
      // Use D3 to select element, change color back to normal
circle
        .attr("fill", "black")
        .attr("r", 5)
  ;

      // Select text by id and then remove
      d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
    }

function updateButtons(){
  d3.descending(lowball);
  document.getElementById("data1button");


  d3.descending(highball);
  document.getElementById("data2button");

  d3.descending(average);
  document.getElementById("data3button");
}
updateButtons();
document.getElementById("data1button").addEventListener("click", function(){
  update(lowball);
});
document.getElementById("data2button").addEventListener("click", function(){
  update(highball);
});
document.getElementById("data3button").addEventListener("click", function(){
  update(average);
});
