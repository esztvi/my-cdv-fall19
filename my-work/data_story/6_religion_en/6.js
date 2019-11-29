// let w = 1425;
// let h = 800;
// let padding = 50;
// set the dimensions and margins of the graph
var margin = {top: 20, right: 10, bottom: 20, left: 80},
  width = 1425 - margin.left - margin.right,
  height = 800 - margin.top - margin.bottom;
// let side_padding = ;
// let color= (2,139,211);
// let viz = d3.select("#container").append("svg")
//     .style("width", w)
//     .style("height", h)
//     .style("border","black")
//   .style("background-color", "black")


  // append the svg object to the body of the page
  var svg = d3.select("#container")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // Labels of row and columns
  var myGroups = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19","20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30","31", "32", "33", "34", "35", "36", "37", "38", "39", "40","41", "42", "43", "44", "45", "46", "47", "48", "49", "50","51", "52", "53", "54", "55", "56", "57", "58", "59", "60","61", "62", "63", "64", "65", "66", "67", "68", "69", "70","71", "72", "73", "74", "75", "76", "77", "78", "79", "80","81", "82", "83", "84", "85", "86", "87", "88", "89", "90","91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
  var myVars = ["United States", "United Kingdom", "Slovenia", "Slovakia", "Serbia", "Romania", "New Zealand", "Israel", "Hungary", "Germany","Finland", "Croatia", "Chile", "Canada", "Brazil", "Aurtia","Australia","Argentina"]

  // Build X scales and axis:

  var x = d3.scaleBand()
    .range([ 0, 1315 ])
    .domain(myGroups)
    .padding(0.01);

  svg.append("g")
    .attr("transform", "translate(0," + height-30 + ")") //this is the error line
    .call(d3.axisBottom(x))
    .call(g => g.select(".domain")
        .remove())

  // Build X scales and axis:
  var y = d3.scaleBand()
    .range([ 680, 0 ])
    .domain(myVars)
    .padding(0.01);
  svg.append("g")
    .call(d3.axisLeft(y));


  // Build color scale
  function getColor(datapoint,i) {

      console.log(datapoint.value);
      if(datapoint.value == "1")
      { return "lime green";}
      else if(datapoint.value == "2")
      { return "hot pink";}
      else if(datapoint.value == "3")
      { return "lawn green";}
      else if(datapoint.value == "4")
      { return "indigo";}
      else if(datapoint.value == "5")
      { return "light steel blue";}
      else if(datapoint.value == "6")
      { return "spring green";}
      else if(datapoint.value == "7")
      { return "pale violet red";}
      else if(datapoint.value == "8")
      { return "green";}
      else if(datapoint.value == "9")
      { return "blue violet";}
      else if(datapoint.value == "10")
      { return "light green";}
      else if(datapoint.value == "11")
      { return "deep pink";}
      else if(datapoint.value == "12")
      { return "marroon";}
      else if(datapoint.value == "13")
      { return "dodger blue";}
      else if(datapoint.value == "14")
      { return "yellow";}
      else if(datapoint.value == "15")
      { return "crimson";}
      else if(datapoint.value == "16")
      { return "silver";}
  };

  //Read the data
  d3.csv("set.csv", function(data) {

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

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      tooltip.style("opacity", 1)
    }
    var mousemove = function(d) {
      tooltip
        .html("The religion represented<br>by this cell is: " + d.religion)
        .style("left", (d3.mouse(this)[0]+70) + "px")
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
