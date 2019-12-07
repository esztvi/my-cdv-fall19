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

let tooltip = d3.select("#tooltip")
    .attr("class", "tooltip")
    .attr("width","150px").attr("height","30px")
    .attr("x","100")
    .attr("y","700")
  .style("opacity", 1)
  .style("background-color", "lightgray")
  .style("border", "solid")
  .style("border-width", "5px")
  .style("border-radius", "1px")
  .style("padding", "5px")
  .style("z-index","1")
  .style("position","absolute");
  ;



let hungary_half = viz.append("g")
.attr("class","hungary")
.attr("width", w/2)
.attr("height", h)
.attr("z-index","0")
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
.attr("z-index","0")
;
// other_half.append("rect")
//   .attr("width",w/2)
//   .attr("height", h)
//   .attr("fill", "green")
//
// ;
// let tooltip = viz.append("div")
//     .attr("class", "tooltip")
//     .attr("width","100px").attr("height","30px")
//     .attr("x","100")
//     .attr("y","700")
//   .style("opacity", 1)
//   .style("background-color", "black")
//   .style("border", "solid")
//   .style("border-width", "20px")
//   .style("border-radius", "1px")
//   .style("padding", "5px")
//   .style("z-index","1")
//   .style("position","absolute");
  // ;

d3.json("../8_populationcomp_hu/County/hungary.geojson").then(function(CountriesData){
  d3.csv("data.csv").then(function(CitiesData){
    // d3.json("../8_populationcomp_en/comp/bavaria.geojson").then(function(bavariaData){
    // console.log(bavariaData);
    d3.json("compdataComplete.json").then(function(compData){
      console.log(compData);

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
        console.log(d.properties.correlatedData["City"] + " -> " + d.properties.correlatedData["CorrelatingArea"], d.properties.correlatedData);
        if(d.properties.correlatedData["CorrelatingArea"] == "Bajorország"){
          drawCountry("bavaria")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Ukrajna"){
          drawCountry("ukraine")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Ohio"){
          drawCountry("ohio")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Michigan"){
          drawCountry("michigan")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Florida"){
          drawCountry("florida")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "New York"){
          drawCountry("newyork")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Alberta"){
          drawCountry("alberta")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "New Jersey"){
          drawCountry("newjersey")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Oroszország"){
          drawCountry("russia")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Brit Kolumbia"){
          drawCountry("bc")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Ausztria"){
          drawCountry("austria")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Ausztrália"){
          drawCountry("australia")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Svájc"){
          drawCountry("switzerland")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "London"){
          drawCountry("london")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Pennsylvania"){
          drawCountry("pennsylvania")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Svédország"){
          drawCountry("sweden")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Ontario"){
          drawCountry("ontario")
        }else if(d.properties.correlatedData["CorrelatingArea"] == "Baden-Württemberg"){
            drawCountry("baden")
          }else if(d.properties.correlatedData["CorrelatingArea"] == "Románia"){
              drawCountry("romania")
            }else if(d.properties.correlatedData["CorrelatingArea"] == "Kalifornia"){
                drawCountry("california")}
          // return tooltip.style("hidden", false).html(d.name);
          console.log(d3.event.pageY);
           tooltip.classed("hidden", false)
                 .style("top", (d3.event.pageY) + "px")
                 .style("left", (d3.event.pageX) + "px")
    .html("Magyar Város : "+ d.properties.correlatedData["City"]+ " ~ "+d.properties.correlatedData["Population"] + " ember" + "<br>" + "Összefüggő régió : " + d.properties.correlatedData["CorrelatingArea"] + " ~ " + d.properties.correlatedData["Population2"] + "<br>" + " Megjegyzés: A térképek nem skálázottak" );
    //  + d.properties.correlatedData["City"] + " - " + d.properties.correlatedData["Population"]+" ember"+"<br>"+"Összefüggő régió : "+ d.properties.correlatedData["CorrelatingArea"]+" - "+d.properties.correlatedData["Population2"]+" ember"+"<br>"+ " Megjegyzés: A térképek nem skálázottak"
        })
        .on("mousemove",function(d,i){
          // console.log(d);
          tooltip.classed("hidden", false)
    //              .style("top", (d3.event.pageY) + "px")
    //              .style("left", (d3.event.pageX) + "px")
    // .html("Hungarian City : " +d.properties.correlatedData["City"]+ " - " + d.properties.correlatedData["Population"] + "<br>"+"Correlating Region : " +d.properties.correlatedData["CorrelatingArea"]+ " - " + d.properties.correlatedData["Population2"] +"<br>"+ " Note: Maps Not to Scale" );
          })
        .on("mouseout",function(d,i){
          d3.select(this).attr("fill","white").attr("stroke-width",1);
          tooltip.classed("hidden", true);
        })
      // });




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
