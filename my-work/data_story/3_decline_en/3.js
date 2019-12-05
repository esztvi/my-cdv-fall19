// set the dimensions and margins of the graph
var glines;
var mouseG;
var tooltip;
let margin = {top: 50, right: 40, bottom: 250, left: 50},
    width = 1425 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;
    // width1 = 1425 - margin.left- margin.right-12,

    function getColor(datapoint,i) {

        console.log(datapoint.value);
        if(datapoint.population)
        { return "whitesmoke";}
        else if(datapoint.fertilityRate)
        { return "rgb(255, 22, 26)";}
        else if(datapoint.medianAge)
        { return "rgb(9,130,71)";}
      }
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
        console.log(d.population);
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
      .style("stroke", "whitesmoke")
      .style("stroke-width","10")
      .attr("d", valueline);

  // Add the valueline2 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "rgb(255, 22, 26)")
      .style("stroke-width","10")
      .attr("d", valueline2);

  // Add the valueline3 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "rgb(9,130,71)")
      .style("stroke-width","10")
      .attr("d", valueline3)
      ;

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke)");


  // Add the Y0 Axis
  svg.append("g")
      .attr("class", "axisSteelBlue")
      // .call(d3.axisLeft(y).ticks(8, "$.0f"))
      .call(g => g.select(".domain").remove());
  // Add the Y1 Axis
  svg.append("g")
      .attr("class", "axisRed")
      .attr("transform", "translate( " + width+100 + ", 0 )")
      .call(d3.axisRight(y1))
      .call(g => g.select(".domain").remove());
      // Add the Y2 Axis
      svg.append("g")
          .attr("class", "axisGreen")
          .attr("transform", "translate( " + width+100 + ", 0 )")
          .call(d3.axisRight(y2))
          .call(g => g.select(".domain").remove());

// append a g for all the mouse over nonsense
var mouseG = svg.append("g")
  .attr("class", "mouse-over-effects");

// this is the vertical line
mouseG.append("path")
  .attr("class", "mouse-line")
    .attr('height', height+100)
  .style("stroke", "black")
  .style("stroke-width", "5px")
  .style("opacity", "0");

// keep a reference to all our lines
var lines = document.getElementsByClassName('line');

// here's a g for each circle and text on the line
var mousePerLine = mouseG.selectAll('.mouse-per-line')
  .data(data)
  .enter()
  .append("g")
  .attr("class", "mouse-per-line")

// the circle
mousePerLine.append("circle")
  .attr("r", 7)
  .style("stroke", function(d) {
    return getColor;
  })
  .style("fill", "none")
  .style("stroke-width", "3px")
  .style("opacity", "0");

// the text
mousePerLine.append("text")
  .attr("id", function(d, i) {return "text" + i})
  .attr("transform", "translate(10,3)");

// rect to capture mouse movements
mouseG.append('svg:rect')
  .attr('width', width)
  .attr('height', height)
  .attr('fill', 'none')
  .attr('pointer-events', 'all')
  .on('mouseout', function() { // on mouse out hide line, circles and text
    d3.select(".mouse-line")
      .style("opacity", "0");
    d3.selectAll(".mouse-per-line circle")
      .style("opacity", "0");
    d3.selectAll(".mouse-per-line text")
      .style("opacity", "0");
  })
  .on('mouseover', function() { // on mouse in show line, circles and text
    d3.select(".mouse-line")
      .style("opacity", "1");
    d3.selectAll(".mouse-per-line circle")
      .style("opacity", "1");
    d3.selectAll(".mouse-per-line text")
      .style("opacity", "1");
  })
  .on('mousemove', function() { // mouse moving over canvas
    var mouse = d3.mouse(this);

    // move the vertical line
    d3.select(".mouse-line")
      .attr("d", function() {
        var d = "M" + mouse[0] + "," + height;
        d += " " + mouse[0] + "," + 0;
        return d;
      });

    // position the circle and text
    d3.selectAll(".mouse-per-line")
      .attr("transform", function(d, i) {
        console.log(width/mouse[0])
        var xDate = x.invert(mouse[0]),
            bisect = d3.bisector(function(d) { return d.year; }).right;
            idx = bisect(d.population);

        // since we are use curve fitting we can't relay on finding the points like I had done in my last answer
        // this conducts a search using some SVG path functions
        // to find the correct position on the line
        // from http://bl.ocks.org/duopixel/3824661
        var beginning = 0,
            end = lines[i].getTotalLength(),
            target = null;

        while (true){
          target = Math.floor((beginning + end) / 2);
          pos = lines[i].getPointAtLength(target);
          if ((target === end || target === beginning) && pos.x !== mouse[0]) {
              break;
          }
          if (pos.x > mouse[0])      end = target;
          else if (pos.x < mouse[0]) beginning = target;
          else break; //position found
        }

        // update the text with y value
        d3.select(this).select('#text0')
          .text(y0.invert(pos.y).toFixed(0))
                    // d3.format(".4r")
          ;

          d3.select(this).select('#text1')
            .text(y1.invert(pos.y).toFixed(2));
            d3.select(this).select('#text2')
              .text(y2.invert(pos.y).toFixed(2));

        // return position
        return "translate(" + mouse[0] + "," + pos.y +")";
      });
  });

        });
