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
    .style("fill", "Whitesmoke")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + w + " " + h)
    .classed("svg-content", true);
;
d3.json("../8_populationcomp_en/County/hungary.geojson").then(function(CountriesData){
  d3.csv("data.csv").then(function(CitiesData){
    console.log(CitiesData);


    CountriesData.features.forEach(gjd=>{
      // console.log(gjd.properties.name);
      let nameToFind = gjd.properties.name;
      let correlated = CitiesData.filter(element=>element.Name == nameToFind)[0];
      // console.log(correlated);
      // console.log(gjd);
      gjd.properties.correlatedData = correlated;
      // console.log("-----");
    })
    // console.log(CountriesData);

    viz.selectAll("path")
        .data(CountriesData.features)
        .enter()
        .append("path")
        .attr("id",function(d){return d.properties.FID})
        .attr("class","continent")
        .attr("d", path)
        .on("mouseover",function(d,i){
          d3.select(this).attr("fill","grey").attr("stroke-width",2);
          // which county are we hovering
          console.log(d.properties.correlatedData[" City"] + " -> " + d.properties.correlatedData[" Correlating Area"]);
          // return tooltip.style("hidden", false).html(d.name);
        })
        .on("mousemove",function(d){
            // tooltip.classed("hidden", false)
            //        .style("top", (d3.event.pageY) + "px")
            //        .style("left", (d3.event.pageX + 10) + "px")
            //        .html(d.name);
        })
        .on("mouseout",function(d,i){
            d3.select(this).attr("fill","white").attr("stroke-width",1);
            // tooltip.classed("hidden", true);
        })
    ;

    //     viz.selectAll("path")
    //         .data(CitiesData.features)
    //         .enter()
    //         .append("path")
    //         .attr("id",function(d){return d.properties.FID})
    //         .attr("class","continent")
    //         .attr("d", path)
    // });
    function ready(CitiesData) {
      if (error) throw error;
      var countries1 = geojson.feature(world, world.objects.countries).features;
      countries = countries1.filter(function(d) {
        return names.some(function(n) {
          if (d.name == n.name) return n.city;
        });
      });
    }


  });
});
