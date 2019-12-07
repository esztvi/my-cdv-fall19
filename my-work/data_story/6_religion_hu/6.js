
var margin = {top: 20, right: 10, bottom: 10, left: 80},
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
  var myVars = ["Egyesült Államok", "Egyesült Királyság", "Szlovénia", "Szlovákia", "Szerbia", "Románia", "Új-Zéland", "Izrael", "Magyarország", "Németország", "Finnország", "Horvátország" ,"Chile","Kanada","Brazília","Ausztria","Ausztrália","Argentína"]

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
      { return "rgb(206,16,16)";}
      else if(datapoint.value == "2")
      { return "rgb(146,0,0)";}
      else if(datapoint.value == "3")
      { return "rgb(230,0,0)";}
      else if(datapoint.value == "4")
      { return "rgb(239,70,70)";}
      else if(datapoint.value == "5")
      { return "rgb(255,170,170)";}
      else if(datapoint.value == "6")
      { return "rgb(206,72,72)";}
      else if(datapoint.value == "7")
      { return "rgb(104,6,6)";}
      else if(datapoint.value == "8")
      { return "rgb(206,30,30)";}
      else if(datapoint.value == "9")
      { return "rgb(239,100,70)";}
      else if(datapoint.value == "10")
      { return "rgb(182,20,20)";}
      else if(datapoint.value == "11")
      { return "rgb(200,56,20)";}
      else if(datapoint.value == "12")
      { return "rgb(220,114,114)";}
      else if(datapoint.value == "13")
      { return "rgb(47,0,0)";}
      else if(datapoint.value == "14")
      { return "rgb(77,0,0)";}
      else if(datapoint.value == "15")
      { return "rgb(255,193,193)";}
      else if(datapoint.value == "16")
      { return "rgb(255,255,255)";}
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
        .html("A vallás ami ebben:<br>a rubrikonban van: " + d.religion)
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
