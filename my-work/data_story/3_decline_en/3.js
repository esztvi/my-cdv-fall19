// set the dimensions and margins of the graph
let margin = {top: 20, right: 40, bottom: 30, left: 50},
    width = 1425 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;
    // width1 = 1425 - margin.left- margin.right-12,

// parse the date / time
let parseTime = d3.timeParse("%Y");

// set the ranges
let x = d3.scaleTime().range([0, width]);
let y0 = d3.scaleLinear().range([height, 0]);
let y1 = d3.scaleLinear().range([height, 0]);
let y2 = d3.scaleLinear().range([height, 0]);

// define the 1st line
let valueline = d3.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y0(d.population); });

// define the 2nd line
let valueline2 = d3.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y1(d.fertilityRate); });

    // define the 3rd line
    let valueline3 = d3.line()
        .x(function(d) { return x(d.year); })
        .y(function(d) { return y2(d.medianAge); });


// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin

let svg = d3.select("#container").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.json("data.json").then(function(data) {
console.log(data);
  // format the data
  data.forEach(function(d) {
      d.year = parseTime(d.year);
      d.population = +d.population;
      d.fertilityRate = +d.fertilityRate;
      d.medianAge = +d.medianAge;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.year; }));
  y0.domain([0, d3.max(data, function(d) {return Math.max(d.population);})]);
  y1.domain([0, d3.max(data, function(d) {return Math.max(d.fertilityRate); })]);
  y2.domain([0, d3.max(data, function(d) {return Math.max(d.medianAge); })]);
  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

  // Add the valueline2 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "red")
      .attr("d", valueline2);

      // Add the valueline3 path.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .style("stroke", "green")
          .attr("d", valueline3);

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y0 Axis
  svg.append("g")
      .attr("class", "axisSteelBlue")
      .call(d3.axisLeft(y).ticks(8, "$.0f"))
      .call(g => g.select(".domain").remove());
  // Add the Y1 Axis
  svg.append("g")
      .attr("class", "axisRed")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(y1))
      .call(g => g.select(".domain").remove());
      // Add the Y2 Axis
      svg.append("g")
          .attr("class", "axisGreen")
          .attr("transform", "translate( " + width + ", 0 )")
          .call(d3.axisRight(y2))
          .call(g => g.select(".domain").remove());
});
