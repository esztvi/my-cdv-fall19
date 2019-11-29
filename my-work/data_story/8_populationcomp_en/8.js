let w = 1425;
let h = 800;
let padding = 50;
let projection = d3.geoMercator().translate([w/2-2000 , h/2 +900 ]).scale(5000).center([0,40]);
let path = d3.geoPath().projection(projection);
// let side_padding = ;
// let color= (2,139,211);
// let viz = d3.select("#container").append("svg")
//     .style("width", w)
//     .style("height", h)
//     .style("border","black")
//   .style("background-color", "black")
let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "White")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + w + " " + h)
    .classed("svg-content", true);
;
d3.json("../8_populationcomp_en/County/hungary.geojson").then(function(CountriesData){
  d3.json("../8_populationcomp_en/County/01-budapest.geojson").then(function(CitiesData){
    viz.selectAll("path")
        .data(CountriesData.features)
        .enter()
        .append("path")
        .attr("id",function(d){return d.properties.FID})
        .attr("class","continent")
        .attr("d", path)

        viz.selectAll("path")
            .data(CitiesData.features)
            .enter()
            .append("path")
            .attr("id",function(d){return d.properties.FID})
            .attr("class","continent")
            .attr("d", path)
    });

  });

// });
