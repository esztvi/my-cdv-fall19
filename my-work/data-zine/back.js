let w = 1200; //single page
let h = 800;
let projection = d3.geoMercator().translate([w/2 +50, h/2 -100]).scale(200).center([0,40]);
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


let ColorScale = d3.scaleLinear().domain([0,10,30,160,195]).range(["lightgrey","darkgrey","grey","dimgrey","black"]);
// function getColor(d,i){
//   return ColorScale(d.NumberOfMessages);
// }
d3.json("countries.geojson").then(function(CountriesData){
  d3.json("cities.json").then(function(CitiesData){
    viz.selectAll("path")
        .data(CountriesData.features)
        .enter()
        .append("path")
        .attr("id",function(d){return d.properties.FID})
        .attr("class","continent")
        .attr("d", path)

    CitiesData.map((country) => {
      //console.log("Run")
      viz.select("#" + country.Country)
      .attr('fill', ColorScale(country.NumberOfMessages));
    });

  });

});

  // draw map
