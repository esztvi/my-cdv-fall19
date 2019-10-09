let w = 1200; //single page
let h = 800;
let projection = d3.geoMercator().translate([w/2, h/2]).scale(200).center([0,40]);
let path = d3.geoPath().projection(projection);

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "White")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + w + " " + h)
    .classed("svg-content", true);
;

d3.json("countries.geojson").then(function(CountriesData){
  d3.json("cities.json").then(function(CitiesData){
    let ColorScale = d3.scaleLinear().domain([0,10,30,160,195]).range(["LightGray","DarkGray","Gray","DimGrey", "Black"]);
    function getColor(d,i){
      return ColorScale(d.NumberOfMessages);
    }

    viz.selectAll("path")
        .data(CountriesData.features)
        .enter()
        .append("path")
        .attr("class","continent")
        .attr("d", path)
        .attr("fill", getColor)
    //     .attr("x", function(d) {return projection([d.Longitude, d.Lattitude])[0] + 5;})
    // .attr("y", function(d) {return projection([d.Longitude, d.Lattitude])[1] + 15;})
    // .attr("class","labels");
  });

});

  // draw map
