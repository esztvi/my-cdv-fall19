let w = 1425;
let h = 1400;
let padding = 50;


let viz = d3.select("#container").append("svg")
.style("width", w)
.style("height", h)
// .style("background-color", "lavender")
;
d3.json("data.json").then(function(incomingData){
  // create a tooltip

  console.log(incomingData);
  incomingData.forEach(d=>{
    // d.visible = true
    if(Math.random()>0.5){
       d.visible = true;
     }else{
       d.visible = false;
     }
  })
  let xScale= d3.scaleLinear().range([padding, w-padding]);
  let boxHeight = 50;
  // Yscale= d3.scaleBand().range([extent]);
  let industries = viz.selectAll(".industries").data(incomingData).enter()
    .append('g')
    .attr("class", "industryGroup")
    .attr("transform", function(d, i){
      return "translate("+w/2+","+(i*boxHeight)+")"
    })
  ;
  // industries.append("rect")
  //   .attr("width", w/4)
  //   .attr("height", boxHeight-2)
  //   ;
  let graphgroups = industries.append("g").attr("class", "graphgroup")
  graphgroups.append("rect")
    .attr("x", 0)
    .attr("height", boxHeight)
    .attr("width", 0)
    .attr("class", "Románia")
    .selectAll("text")
            .data(incomingData)
            .enter()
            .append("text")
            .text(function (d) { return d.Románia; })
            .attr("x", function (d) { return xScale(d.Románia); })
            .style("fill", "white")
  ;
  graphgroups.append("rect")
    .attr("x", 0)
    .attr("height", boxHeight)
    .attr("width", 0)
    .attr("class", "Ausztria")
    .selectAll("text")
            .data(incomingData)
            .enter()
            .append("text")
            .text(function (d) { return d.Ausztria; })
            .attr("x", function (d) { return -xScale(d.Ausztria); })
            .style("fill", "white")
  ;
// graphgroups.selectAll("text")
//         .data(data)
//         .enter()
//         .append("text")
//         .text(function (d) { return d.Ausztria; })
//         .attr("x", function (d) { return xScale(d.sightingYear) + xScale.bandwidth() / 2; })
//         .attr("y", function (d) { return yScale(d.sightingCount) + 12; })
//         .style("fill", "white");

  let names = industries.append("g")
    .append("text")
    .text(function(d){
      return d.industry
    })
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .attr("y", boxHeight/2)
    .on("click",function(d){
        d.visible = !d.visible;
        updateGraph();
    })
    .style("cursor", "pointer")
  ;


  function updateGraph(){
    let visibleIndustries = incomingData.filter(d=>d.visible);
    let employmentNumbers = visibleIndustries.reduce((acc, d)=>{
      if(d.Ausztria!=null){
        acc.push(d.Ausztria)
      }
      if(d.Románia!=null){
        acc.push(d.Románia)
      }
      return acc
    }, [])
    console.log(employmentNumbers);
    let extent = d3.extent(employmentNumbers)
    console.log(extent);
    xScale.domain(extent);

    graphgroups.select(".Románia")
      .transition()
      .attr("width", function(d){
        if(!d.visible){
          return 0;
        }else{
          return xScale(d.Románia)
        }
      })
      .attr("fill","rgb(106, 7, 8)");
      graphgroups.select(".Ausztria")
        .transition()
        .attr("x", function(d){
          if(!d.visible){
            return 0;
          }else{
            return -xScale(d.Ausztria);
          }
        })
        .attr("width", function(d){
          if(!d.visible){
            return 0;
          }else{
            return xScale(d.Ausztria)
          }
        })
        .attr("fill","rgb(237, 41, 57)");
    // let theSituationVisible = graphgroups.selectAll(".bar").data(d=>{
    //   return [
    //     {"visible": d.visible, "country":"Románia", "data":d.Románia},
    //     {"visible": d.visible, "country":"Ausztria", "data":d.Ausztria}]}
    //   , d=>d.industry)
    // console.log(theSituationVisible);
    // let enteringVisible = theSituationVisible.enter();
    //
    // enteringVisible
    //   .append("rect")
    //   .attr("x", 0)
    //   .attr("height", boxHeight)
    //   .transition()
    //   .attr("x", function(d){
    //     if(!d.visible){
    //       return 0;
    //     }
    //     if(d.country == "Románia"){
    //       return 0;
    //     }else{
    //       return -xScale(d.data);
    //     }
    //   })
    //   .attr("width", function(d){
    //     if(!d.visible){
    //       return 0;
    //     }
    //       return xScale(d.data);
    //   })
    // ;
    //
    // theSituationVisible.selectAll("rect")
    //   .transition()
    //   .attr("fill", "red")
    //   .attr("x", function(d){
    //     if(!d.visible){
    //       return 0;
    //     }
    //     if(d.country == "Románia"){
    //       return 0;
    //     }else{
    //       return -xScale(d.data);
    //     }
    //   })
    //   .attr("width", function(d){
    //     if(!d.visible){
    //       return 0;
    //     }
    //       return xScale(d.data);
    //   })


  }
  updateGraph();


  // let boxAg= viz.append("rect")
  // .attr("class","boxAg")
  // .attr("x", 50)
  // .attr("y", 0)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rgb(0)")
  // .style("cursor", "pointer")
  // .on(
  //   "click", revealAg
  // );
  // let xAxisAgGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxFor= viz.append("rect")
  // .attr("class","boxFor")
  // .attr("x", 50)
  // .attr("y", 100)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rgb(255,255,0)")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealFor
  // // );
  // let xAxisForGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxFI= viz.append("rect")
  // .attr("class","boxFi")
  // .attr("x", 50)
  // .attr("y", 200)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rgb(0,255,255)")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealFi
  // // );
  // let xAxisFIGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxMin= viz.append("rect")
  // .attr("class","boxMin")
  // .attr("x", 50)
  // .attr("y", 300)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rgb(255,0,255)")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealMin
  // // );
  // let xAxisMinGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxProc= viz.append("rect")
  // .attr("class","boxProc")
  // .attr("x", 50)
  // .attr("y", 400)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rgb(255,0,0)")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealProc
  // // );
  // let xAxisProcGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxEn= viz.append("rect")
  // .attr("class","boxEn")
  // .attr("x", 50)
  // .attr("y", 500)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rgb(0,255,0)")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealEn
  // // );
  // let xAxisEnGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxBuild= viz.append("rect")
  // .attr("class","boxBuild")
  // .attr("x", 50)
  // .attr("y", 600)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rgb(0,0,255)")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealBuild
  // // );
  // let xAxisBuildGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxTrade= viz.append("rect")
  // .attr("class","boxTr")
  // .attr("x", 50)
  // .attr("y", 700)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","lavender")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealTrade
  // // );
  // let xAxisTradeGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxHR= viz.append("rect")
  // .attr("class","boxHR")
  // .attr("x", 50)
  // .attr("y", 800)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","tomato")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealHR
  // // );
  // let xAxisHRGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxTransp= viz.append("rect")
  // .attr("class","boxTransp")
  // .attr("x", 50)
  // .attr("y", 900)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","gold")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealTransp
  // // );
  // let xAxisTranspGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxPC= viz.append("rect")
  // .attr("class","boxPC")
  // .attr("x", 50)
  // .attr("y", 1000)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","maroon")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealPC
  // // );
  // let xAxisPCGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxFIR= viz.append("rect")
  // .attr("class","boxFIR")
  // .attr("x", 50)
  // .attr("y", 1100)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","midnightblue")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealFI
  // // );
  // let xAxisFIRGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxRE= viz.append("rect")
  // .attr("class","boxRE")
  // .attr("x", 50)
  // .attr("y", 1200)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","teal")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealRE
  // // );
  // let xAxisREGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxPA= viz.append("rect")
  // .attr("class","boxPA")
  // .attr("x", 50)
  // .attr("y", 1300)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","coral")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealPA
  // // );
  // let xAxisPAGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxEd= viz.append("rect")
  // .attr("class","boxEd")
  // .attr("x", 50)
  // .attr("y", 1400)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","blueviolet")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealEd
  // // );
  // let xAxisEdGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxHSA= viz.append("rect")
  // .attr("class","boxHSA")
  // .attr("x", 50)
  // .attr("y", 1500)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","green")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealHSA
  // // );
  // let xAxisHSAGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxServ= viz.append("rect")
  // .attr("class","boxServ")
  // .attr("x", 50)
  // .attr("y", 1600)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","lawngreen")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealServ
  // // );
  // let xAxisServGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxSAA= viz.append("rect")
  // .attr("class","boxSAA")
  // .attr("x", 50)
  // .attr("y", 1700)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","powderblue")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealSAA
  // // );
  // let xAxisSAAGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxOrg= viz.append("rect")
  // .attr("class","boxOrg")
  // .attr("x", 50)
  // .attr("y", 1800)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","gray")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealOrg
  // // );
  // let xAxisOrgGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxUn= viz.append("rect")
  // .attr("class","boxUn")
  // .attr("x", 50)
  // .attr("y", 1900)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","white")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealUn
  // // );
  // let xAxisUnGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxGS= viz.append("rect")
  // .attr("class","boxGS")
  // .attr("x", 50)
  // .attr("y", 2000)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","hotpink")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealGS
  // // );
  // let xAxisGSGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxPaint= viz.append("rect")
  // .attr("class","boxPaint")
  // .attr("x", 50)
  // .attr("y", 2100)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","violet")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealPaint
  // // );
  // let xAxisPaintGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxPCB= viz.append("rect")
  // .attr("class","boxPCB")
  // .attr("x", 50)
  // .attr("y", 2200)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","rebeccapurple")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealPCB
  // // );
  // let xAxisPCBGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxApar= viz.append("rect")
  // .attr("class","boxApar")
  // .attr("x", 50)
  // .attr("y", 2300)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","silver")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealApar
  // // );
  // let xAxisAparGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxFS= viz.append("rect")
  // .attr("class","boxFS")
  // .attr("x", 50)
  // .attr("y", 2400)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","indianred")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealFS
  // // );
  // let xAxisFSGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxRoof= viz.append("rect")
  // .attr("class","boxRoof")
  // .attr("x", 50)
  // .attr("y", 2500)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","olive")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealRoof
  // // );
  // let xAxisRoofGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;
  // let boxWFE= viz.append("rect")
  // .attr("class","boxWFE")
  // .attr("x", 50)
  // .attr("y", 2600)
  // .attr("width", 1300)
  // .attr("height", 100)
  // .attr("fill","khaki")
  // .style("cursor", "pointer")
  // // .on(
  // //   "click", revealWFE
  // // );
  // let xAxisWFEGroup=viz.append("g")
  //     .attr("class","xaxisgroup")
  //     .attr("fill","whitesmoke")
  //     .attr("stroke","whitesmoke")
  //     .attr("line","whitesmoke")
  // ;

});
