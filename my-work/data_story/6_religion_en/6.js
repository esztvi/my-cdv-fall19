
var margin = {top: 20, right: 10, bottom: 20, left: 80},
  width = 1425 - margin.left - margin.right,
  height = 800 - margin.top - margin.bottom;


  // append the svg object to the body of the page
  var svg = d3.select("#container")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // Labels of row and columns
  var myGroups = d3.range(1,101).map(d=>String(d));
  var myVars = ["United States", "United Kingdom", "Slovenia", "Slovakia", "Serbia", "Romania", "New Zealand", "Israel", "Hungary", "Germany","Finland", "Croatia", "Chile", "Canada", "Brazil", "Austria","Australia","Argentina"]

  // Build X scales and axis:

  var x = d3.scaleBand()
    .range([ 0, 1315 ])
    .domain(myGroups)
    .padding(0.01)
// .tickValues([]);
  svg.append("g")
    .attr("transform", "translate(0," + (height-30) + ")") //this is the error line
    .call(d3.axisBottom(x))
    .style("color", "rgb(0,0,0,0)")
    .call(g => g.select(".domain")
        .remove())


  // Build Y scales and axis:
  var y = d3.scaleBand()
    .range([ 680, 0 ])
    .domain(myVars)
    .padding(0.01);
  svg.append("g")
    .call(d3.axisLeft(y))
    .attr("fill","whitesmoke")
    .attr("stroke","whitesmoke")
    .attr("line","whitesmoke");


  // Build color scale
  function getColor(datapoint,i) {

      console.log(datapoint.value);
      if(datapoint.value == "1")
      { return "limegreen";}
      else if(datapoint.value == "2")
      { return "maroon";}
      else if(datapoint.value == "3")
      { return "aquamarine";}
      else if(datapoint.value == "4")
      { return "indigo";}
      else if(datapoint.value == "5")
      { return "lightsteelblue";}
      else if(datapoint.value == "6")
      { return "seagreen";}
      else if(datapoint.value == "7")
      { return "red";}
      else if(datapoint.value == "8")
      { return "green";}
      else if(datapoint.value == "9")
      { return "blueviolet";}
      else if(datapoint.value == "10")
      { return "lightgreen";}
      else if(datapoint.value == "11")
      { return "crimson";}
      else if(datapoint.value == "12")
      { return "gray";}
      else if(datapoint.value == "13")
      { return "rgb(0,56,184)";}
      else if(datapoint.value == "14")
      { return "yellow";}
      else if(datapoint.value == "15")
      { return "lavender";}
      else if(datapoint.value == "16")
      { return "silver";}
  };

  //Read the data
  d3.csv("set.csv").then( function(data) {

    // create a tooltip
    var tooltip = d3.select("#container")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("position","fixed")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      tooltip.style("opacity", 1)
    }
    var mousemove = function(d) {
      tooltip
        .html("The religion represented<br>by this cell is: " + d.religion)
        .style("left", (d3.mouse(this)[0]+0) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    }
    var mouseleave = function(d) {
      tooltip.style("opacity", 0)
    }

    // add the squares
    svg.selectAll()
      .data(data, function(d) {return d.group+':'+d.variable;})
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.group) })
        .attr("y", function(d) { return y(d.variable) })
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", getColor )
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
  })
