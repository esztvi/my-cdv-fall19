let w = 1200; //single page
let h = 800;
let innerRadius = 80;
let outerRadius = Math.min(w, h) / 2;   // the outerRadius goes from the middle of the SVG area to the border
let paddingSide = 200;
let paddingOther = 100;
let padding = 8;
let bandwidth = 20;
/// SO I WANT TO DO THIS CIRCLE BAR GRAPH
//That would be super cool for the cover I think...
//Ideally I want four (like name/freguency, region/frequency, medium/frequency, day/frequency)
//do I need for div's then? Not sure... maybe I do? I'm currently just playing around with the data set

//https://www.d3-graph-gallery.com/circular_barplot

// var margin = {top: 10, right: 10, bottom: 10, left: 10},
//     width = 1200 - margin.left - margin.right,
//     height = 800 - margin.top - margin.bottom,
//     innerRadius = 80,
//     outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object to the body of the page
let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
    ;
  // .append("g")
  //   .attr("transform", "translate(" + width / 2 + "," + ( height/2+100 )+ ")"); // Add 100 on Y translation, cause upper bars are longer
  // let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
  //   .append("g")
  //     .classed("datagroup", true)
  // ;
  // X scale
  let xScale = d3.scaleBand().domain([0,71]).range([0, 2 * Math.PI]);
  function xPosition(d, i){
    return xScale(i);
  }

  function yPosition(d, i){
    return h/2 ; //- d.height
  }

  function getGroupTranslation(d, i){
    return "translate(" + w / 2 + "," + ( h/2+100 )+ ")"; // Add 100 on Y translation, cause upper bars are longer

  }
      // .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      // .align(0)                  // This does nothing ?
      // .domain( data.map(function(d) { return d.Name; }) ); // The domain of the X axis is the list of states.

  // Y scale
  let yScale = d3.scaleRadial().domain([0, 26]).range([innerRadius, outerRadius]);
  function getHeight(d,i){
    return yScale(d.Value) ;

  }
  function getPush(d,i){
    return - yScale(d.Value) ;

  }
      // .range([innerRadius, outerRadius])   // Domain will be define later.
      // .domain([0, 26]); // Domain of Y is from 0 to the max seen in the data
      let ColorScale = d3.scaleLinear().domain([0,10,26]).range(["lightblue","blue","midnightblue"]);
      function getColor(d,i){
      return ColorScale(d.Value);
      }
      function getHeight(d,i){
        return yScale(d.Value) ;

      }
  // Add bars
  function gotData(incomingData){
    console.log(incomingData);

    let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
      .append("g")
        .classed("datagroup", true)
    ;

    let towers = datagroups.append("rect")
    .attr("height",getHeight)
    .attr("fill", getColor)
    .attr("d", d3.arc()     // imagine your doing a part of a donut plot
        .innerRadius(innerRadius)
        .outerRadius(function(d) { return (d.Value); })
        .startAngle(function(d) { return (d.Name); })
        .endAngle(function(d) { return (d.Name) + bandwidth; })
        .padAngle(0.01)
        .padRadius(innerRadius))
        ;
    //     .attr("x", 0)
    //     .attr("y", getPush)
    //     .attr("width", 20)
    //     .attr("height",getHeight)
    //     .attr("fill", getColor)
    // ;

    //
    // let labels = datagroups.append("text")
    //     .text(getName)
    //     .attr("fill", "red")
    //     .attr("transform", "rotate(90)")
    // ;
    //
    // datagroups.attr("transform", getGroupTranslation);

      datagroups.attr("transform", getGroupTranslation);
  }

      // .attr("fill", "#69b3a2")
      // .attr("d", d3.arc()     // imagine your doing a part of a donut plot
      //     .innerRadius(innerRadius)
      //     .outerRadius(function(d) { return y(d.Value); })
      //     .startAngle(function(d) { return x(d.Name); })
      //     .endAngle(function(d) { return x(d.Name) + x.bandwidth(); })
      //     .padAngle(0.01)
      //     .padRadius(innerRadius));

          d3.json("data.json").then(gotData);
