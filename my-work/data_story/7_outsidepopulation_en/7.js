
  let w = 2500; //single page
  let h = 1200;
  let projection = d3.geoMercator().translate([w/2, h/2]).scale(400).center([0,0]);
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
    d3.csv("coords.csv").then(function(coords){
    // d3.json("cities.json").then(function(CitiesData){
      console.log(coords);
      viz.selectAll("path")
          .data(CountriesData.features)
          .enter()
          .append("path")
          .attr("id",function(d){return d.properties.FID})
          .attr("class","continent")
          .attr("d", path)
          .style("fill","whitesmoke")
          viz.append("g")
                    .selectAll("circle")
                    .data(coords)
                    .enter()
                    .append("circle")

                      .attr("cx", function(d) {
                        // console.log(d);
                        let long=  d.Long.slice(0,7) ;
                        let lat=  d.Lat.slice(0,7) ;
                        // let pixelLoc= projection([lat, long])

                        let pixelLoc= projection([-3.679545, 40.419053])
                        return pixelLoc[0];
                      })
                      .attr("cy", function(d) {
                        // console.log(d);
                        let longa=  d.Long.slice(0,7) ;
                        let lata=  d.Lat.slice(0,7) ;
                        let pixelLoc= projection([-3.679545, 40.419053])
                        return pixelLoc[1];
                      })
                      .attr("r", 20)
                      .style("fill", "69b3a2")
                      .attr("stroke", "#69b3a2")
                      .attr("stroke-width", 3)
                      .attr("fill-opacity", .4)
    //   CitiesData.map((country) => {
    //     //console.log("Run")
    //     viz.select("#" + country.Country)
    //     .attr('fill', ColorScale(country.NumberOfMessages));
    //   });
    //
    // });

  })
})
  ;
