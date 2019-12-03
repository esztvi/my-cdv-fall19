// let w = 1425;
// let h = 800;
// let padding = 50;
// let side_padding = ;
// let color= (2,139,211);
// let viz = d3.select("#container").append("svg")
//     .style("width", w)
//     .style("height", h)
//     .style("border","black")
//   .style("background-color", "black")

  let w = 1425; //single page
  let h = 1000;
  let projection = d3.geoMercator().translate([w/2, h/2]).scale(325).center([0,40]);
  let path = d3.geoPath().projection(projection);

  let viz = d3.select("#container")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
      // .style("background-color", "White")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + w + " " + h)
      .classed("svg-content", true);
  ;



  // function getColor(d,i){
  //   return ColorScale(d.NumberOfMessages);
  // }
  d3.json("map.geojson").then(function(CountriesData){
    // d3.json("cities.json").then(function(CitiesData){
      viz.selectAll("path")
          .data(CountriesData.features)
          .enter()
          .append("path")
          .attr("id",function(d){return d.properties.FID})
          .attr("class","continent")
          .attr("d", path)
          .style("fill","whitesmoke")
          viz.append("g")
              .attr("class", "bubble")
            .selectAll("circle")
              .data(CountriesData.feature(path, sovereignt.CountriesData).features)
            .enter().append("circle")
              .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
              .attr("r", 1.5);

    //   CitiesData.map((country) => {
    //     //console.log("Run")
    //     viz.select("#" + country.Country)
    //     .attr('fill', ColorScale(country.NumberOfMessages));
    //   });
    //
    // });

  });
