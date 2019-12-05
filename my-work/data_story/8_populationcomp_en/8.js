let w = 1425;
let h = 800;
let padding = 50;

let viz = d3.select("#container")
.append("svg")
.attr("width", w)
.attr("height", h)
.style("fill", "Whitesmoke")
// .attr("preserveAspectRatio", "xMinYMin meet")
// .attr("viewBox", "0 0 " + w + " " + h)
.classed("svg-content", true);
;



let hungary_half = viz.append("g")
.attr("class","hungary")
.attr("width", w/2)
.attr("height", h)
;
// hungary_half.append("rect")
//   .attr("width", w/2)
//   .attr("height", h)
//   .attr("fill", "lavender")
// ;

let other_half = viz.append("g")
.attr("class","hungary")
.attr("width", w/2)
.attr("height", h)
.attr("transform","translate("+(w/2)+",0)")
;
// other_half.append("rect")
//   .attr("width",w/2)
//   .attr("height", h)
//   .attr("fill", "green")
//
// ;
hungary_half.append("g")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 1)
  // .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "20px")
  .style("border-radius", "1px")
  .style("padding", "5px")
  .style("position","fixed")
  ;

d3.json("../8_populationcomp_en/County/hungary.geojson").then(function(CountriesData){
  d3.csv("data.csv").then(function(CitiesData){
    // d3.json("../8_populationcomp_en/comp/bavaria.geojson").then(function(bavariaData){
    // console.log(bavariaData);
    d3.json("compdataComplete.json").then(function(compData){
      // console.log(compData);

      let projection = d3.geoMercator()
      .translate([w/2/2 , h/2 ])
      // .scale(5000)
      // .center([0,40])
      .fitExtent([ [padding,0], [w/2-padding,h] ],CountriesData )

      ;
      let path = d3.geoPath().projection(projection);

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

      hungary_half.selectAll("path")
      .data(CountriesData.features)
      .enter()
      .append("path")
      .attr("id",function(d){return d.properties.FID})
      .attr("class","continent")
      .attr("d", path)
      .on("mouseover",function(d,i){
        d3.select(this).attr("fill","grey").attr("stroke-width",2);
        // which county are we hovering
        console.log(d.properties.correlatedData["City"] + " -> " + d.properties.correlatedData["Correlating Area"], d.properties.correlatedData);
        if(d.properties.correlatedData["Correlating Area"] == "Bavaria"){
          drawCountry("bavaria")
        }else if(d.properties.correlatedData["Correlating Area"] == "Ukraine"){
          drawCountry("ukraine")
        }else if(d.properties.correlatedData["Correlating Area"] == "Ohio"){
          drawCountry("ohio")
        }else if(d.properties.correlatedData["Correlating Area"] == "Michigan"){
          drawCountry("michigan")
        }else if(d.properties.correlatedData["Correlating Area"] == "Florida"){
          drawCountry("florida")
        }else if(d.properties.correlatedData["Correlating Area"] == "New York"){
          drawCountry("newyork")
        }else if(d.properties.correlatedData["Correlating Area"] == "Alberta"){
          drawCountry("alberta")
        }else if(d.properties.correlatedData["Correlating Area"] == "New Jersey"){
          drawCountry("newjersey")
        }else if(d.properties.correlatedData["Correlating Area"] == "Russia"){
          drawCountry("russia")
        }else if(d.properties.correlatedData["Correlating Area"] == "British Columbia"){
          drawCountry("bc")
        }else if(d.properties.correlatedData["Correlating Area"] == "Austria"){
          drawCountry("austria")
        }else if(d.properties.correlatedData["Correlating Area"] == "Australia"){
          drawCountry("australia")
        }else if(d.properties.correlatedData["Correlating Area"] == "Switzerland"){
          drawCountry("switzerland")
        }else if(d.properties.correlatedData["Correlating Area"] == "London"){
          drawCountry("london")
        }else if(d.properties.correlatedData["Correlating Area"] == "Pennsylvania"){
          drawCountry("pennsylvania")
        }else if(d.properties.correlatedData["Correlating Area"] == "Sweden"){
          drawCountry("sweden")
        }else if(d.properties.correlatedData["Correlating Area"] == "Ontario"){
          drawCountry("ontario")
        }else if(d.properties.correlatedData["Correlating Area"] == "Baden-Württemberg"){
            drawCountry("baden")
          }else if(d.properties.correlatedData["Correlating Area"] == "Romania"){
              drawCountry("romania")
            }else if(d.properties.correlatedData["Correlating Area"] == "California"){
                drawCountry("california")}
          return tooltip.style("hidden", false).html(d.name);
        })
        .on("mousemove",function(CitiesData){
          tooltip.classed("hidden", false)
                 .style("top", (d3.event.pageY+10) + "px")
                 .style("left", (d3.event.pageX + 10) + "px")
    .html("Hungarian City : " +d.City+ " - " + d.Population + "    Correlating Region : " +d.CorrelatingArea+ " - " + d.Population2 + " Note: Maps Not to Scale" );
        })
        .on("mouseout",function(d,i){
          d3.select(this).attr("fill","white").attr("stroke-width",1);
          tooltip.classed("hidden", true);
        })
        ;




        // other_half.append("circle")
        //   .attr("cx", w/4)
        //   .attr("cy", h/2)
        //   .attr("r", 100)
        //   ;
        function drawCountry(name){
          let projectionOther = d3.geoMercator()
          .translate([w/2/2 , h/2 ])
          // .scale(5000)
          // .center([0,40])
          .fitExtent([ [padding,padding], [w/2-padding,h- padding] ],compData[name] )

          ;
          path = d3.geoPath().projection(projectionOther);

          // console.log(CountriesData);
          other_half.selectAll("path").remove("path");
          other_half.selectAll("path")
          .data(compData[name].features)
          .enter()
          .append("path")
          // .attr("features",function(d){return compData.alberta.coordinates})
          // .attr("class","place")
          .attr("d", path)
          ;
        }



        // other_half.selectAll("path")
        //     .data(CitiesData.features)
        //     .enter()
        //     .append("path")
        //     .attr("id",function(d){return d.properties.name})
        //     // .attr("class","continent")
        //     .attr("d", path);
      });


    });
  });
  // });
