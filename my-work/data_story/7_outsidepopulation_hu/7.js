
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
//rgb(9,130,71)

  // function getColor(d,i){
  //   return ColorScale(d.NumberOfMessages);
  // }
  d3.json("map.geojson").then(function(CountriesData){
    let ColorScale = d3.scaleLinear().domain([0,5000,1000000,4000000]).range(["rgb(201,246,225)","rgb(12,172,98)","rgb(9,130,71)","rgb(5,41,24)"]);
    d3.csv("coords.csv").then(function(coords){
    // d3.json("cities.json").then(function(CitiesData){

    var Tooltip = d3.select("#container")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 1)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("width","300px")
      .style("padding", "5px")
      .style("position","absolute")
      ;

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      Tooltip.style("opacity", 1)
    }
    var mousemove = function(d) {
      console.log(d);
      Tooltip
        .html(d.Country + "<br>" + "Népesség (Felülbecslés): " + d.PopH + "<br>" + "Népesség (Alulbecslés): " + d.PopL)
        .style("left", (d3.mouse(this)[0])+100 + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    }
    var mouseleave = function(d) {
      Tooltip.style("opacity", 0)
    }
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
                        console.log(d.popH);

                        let long=  d.Long;
                        let lat=  d.Lat;
                        // let pixelLoc= projection([lat, long])

                        let pixelLoc= projection([lat, long])
                        return pixelLoc[0];
                      })
                      .attr("cy", function(d) {
                        // console.log(d);
                        let longa=  d.Long;
                        let lata=  d.Lat;
                        let pixelLoca= projection([lata,longa])
                        return pixelLoca[1];
                      })
                      .attr("r", 10)
                      .style("fill", function(d){return ColorScale(d.PopH)})
                      // .attr("stroke", ColorScale)
                      // .attr("stroke-width", 10)
                      // .attr("fill-opacity", .4)
                      .on("mouseover", mouseover)
                      .on("mousemove", mousemove)
                      .on("mouseleave", mouseleave)
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
