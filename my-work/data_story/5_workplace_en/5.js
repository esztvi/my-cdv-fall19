let w = 1425;
let h = 2700;
let padding = 50;


let viz = d3.select("#container").append("svg")
.style("width", w)
.style("height", h)
// .style("background-color", "lavender")
;
d3.json("data.json").then(function(incomingData){
  console.log(incomingData);
  let xScaleAg= d3.scaleLinear().range([padding,w-padding]);
  let xScaleFor= d3.scaleLinear().range([padding,w-padding]);
  let xScaleFI= d3.scaleLinear().range([padding,w-padding]);
  let xScaleMin= d3.scaleLinear().range([padding,w-padding]);
  let xScaleProc= d3.scaleLinear().range([padding,w-padding]);
  let xScaleEn= d3.scaleLinear().range([padding,w-padding]);
  let xScaleBuild= d3.scaleLinear().range([padding,w-padding]);
  let xScaleTrade= d3.scaleLinear().range([padding,w-padding]);
  let xScaleHR= d3.scaleLinear().range([padding,w-padding]);
  let xScaleTransp= d3.scaleLinear().range([padding,w-padding]);
  let xScalePC= d3.scaleLinear().range([padding,w-padding]);
  let xScaleFIR= d3.scaleLinear().range([padding,w-padding]);
  let xScaleRE= d3.scaleLinear().range([padding,w-padding]);
  let xScalePA= d3.scaleLinear().range([padding,w-padding]);
  let xScaleEd= d3.scaleLinear().range([padding,w-padding]);
  let xScaleHSA= d3.scaleLinear().range([padding,w-padding]);
  let xScaleServ= d3.scaleLinear().range([padding,w-padding]);
  let xScaleSAA= d3.scaleLinear().range([padding,w-padding]);
  let xScaleOrg= d3.scaleLinear().range([padding,w-padding]);
  let xScaleUn= d3.scaleLinear().range([padding,w-padding]);
  let xScaleGS= d3.scaleLinear().range([padding,w-padding]);
  let xScalePaint= d3.scaleLinear().range([padding,w-padding]);
  let xScalePCB= d3.scaleLinear().range([padding,w-padding]);
  let xScaleApar= d3.scaleLinear().range([padding,w-padding]);
  let xScaleFS= d3.scaleLinear().range([padding,w-padding]);
  let xScaleRoof= d3.scaleLinear().range([padding,w-padding]);
  let xScaleWFE= d3.scaleLinear().range([padding,w-padding]);


  let boxAg= viz.append("rect")
  .attr("class","boxAg")
  .attr("x", 50)
  .attr("y", 0)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rgb(12,10,100,0)");
  // .on(
  //   "click", revealAg
  // );
  let xAxisAgGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisAg=d3.axisBottom(xScaleAg);
  let xAxisAgYPos = h -2600;
  xAxisAgGroup.attr("transform", "translate(0,"+xAxisAgYPos+")");
  function createAgAxis(){
    xAxisAgGroup.call(xAxisAg);
  }
  let boxFor= viz.append("rect")
  .attr("class","boxFor")
  .attr("x", 50)
  .attr("y", 100)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rgb(255,255,0)")
  // .on(
  //   "click", revealFor
  // );
  let xAxisForGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisFor=d3.axisBottom(xScaleFor);
  let xAxisForYPos = h -2500;
  xAxisForGroup.attr("transform", "translate(0,"+xAxisForYPos+")");
  function createForAxis(){
    xAxisForGroup.call(xAxisFor);
  }
  let boxFI= viz.append("rect")
  .attr("class","boxFi")
  .attr("x", 50)
  .attr("y", 200)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rgb(0,255,255)")
  // .on(
  //   "click", revealFi
  // );
  let xAxisFIGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisFI=d3.axisBottom(xScaleFI);
  let xAxisFIYPos = h -2400;
  xAxisFIGroup.attr("transform", "translate(0,"+xAxisFIYPos+")");
  function createFIAxis(){
    xAxisFIGroup.call(xAxisFI);
  }
  let boxMin= viz.append("rect")
  .attr("class","boxMin")
  .attr("x", 50)
  .attr("y", 300)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rgb(255,0,255)")
  // .on(
  //   "click", revealMin
  // );
  let xAxisMinGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisMin=d3.axisBottom(xScaleMin);
  let xAxisMinYPos = h -2300;
  xAxisMinGroup.attr("transform", "translate(0,"+xAxisMinYPos+")");
  function createMinAxis(){
    xAxisMinGroup.call(xAxisMin);
  }
  let boxProc= viz.append("rect")
  .attr("class","boxProc")
  .attr("x", 50)
  .attr("y", 400)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rgb(255,0,0)")
  // .on(
  //   "click", revealProc
  // );
  let xAxisProcGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisProc=d3.axisBottom(xScaleProc);
  let xAxisProcYPos = h -2200;
  xAxisProcGroup.attr("transform", "translate(0,"+xAxisProcYPos+")");
  function createProcAxis(){
    xAxisProcGroup.call(xAxisProc);
  }
  let boxEn= viz.append("rect")
  .attr("class","boxEn")
  .attr("x", 50)
  .attr("y", 500)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rgb(0,255,0)")
  // .on(
  //   "click", revealEn
  // );
  let xAxisEnGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisEn=d3.axisBottom(xScaleEn);
  let xAxisEnYPos = h -2100;
  xAxisEnGroup.attr("transform", "translate(0,"+xAxisEnYPos+")");
  function createEnAxis(){
    xAxisEnGroup.call(xAxisEn);
  }
  let boxBuild= viz.append("rect")
  .attr("class","boxBuild")
  .attr("x", 50)
  .attr("y", 600)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rgb(0,0,255)")
  // .on(
  //   "click", revealBuild
  // );
  let xAxisBuildGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisBuild=d3.axisBottom(xScaleBuild);
  let xAxisBuildYPos = h -2000;
  xAxisBuildGroup.attr("transform", "translate(0,"+xAxisBuildYPos+")");
  function createBuildAxis(){
    xAxisBuildGroup.call(xAxisBuild);
  }
  let boxTrade= viz.append("rect")
  .attr("class","boxTr")
  .attr("x", 50)
  .attr("y", 700)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","lavender")
  // .on(
  //   "click", revealTrade
  // );
  let xAxisTradeGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisTrade=d3.axisBottom(xScaleTrade);
  let xAxisTradeYPos = h -1900;
  xAxisTradeGroup.attr("transform", "translate(0,"+xAxisTradeYPos+")");
  function createTradeAxis(){
    xAxisTradeGroup.call(xAxisTrade);
  }
  let boxHR= viz.append("rect")
  .attr("class","boxHR")
  .attr("x", 50)
  .attr("y", 800)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","tomato")
  // .on(
  //   "click", revealHR
  // );
  let xAxisHRGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisHR=d3.axisBottom(xScaleHR);
  let xAxisHRYPos = h -1800;
  xAxisHRGroup.attr("transform", "translate(0,"+xAxisHRYPos+")");
  function createHRAxis(){
    xAxisHRGroup.call(xAxisHR);
  }
  let boxTransp= viz.append("rect")
  .attr("class","boxTransp")
  .attr("x", 50)
  .attr("y", 900)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","gold")
  // .on(
  //   "click", revealTransp
  // );
  let xAxisTranspGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisTransp=d3.axisBottom(xScaleTransp);
  let xAxisTranspYPos = h -1700;
  xAxisTranspGroup.attr("transform", "translate(0,"+xAxisTranspYPos+")");
  function createTranspAxis(){
    xAxisTranspGroup.call(xAxisTransp);
  }
  let boxPC= viz.append("rect")
  .attr("class","boxPC")
  .attr("x", 50)
  .attr("y", 1000)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","maroon")
  // .on(
  //   "click", revealPC
  // );
  let xAxisPCGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisPCG=d3.axisBottom(xScalePCG);
  let xAxisPCGYPos = h -1600;
  xAxisPCGGroup.attr("transform", "translate(0,"+xAxisPCGYPos+")");
  function createYearAxis(){
    xAxisPCGGroup.call(xAxisPCG);
  }
  let boxFIR= viz.append("rect")
  .attr("class","boxFIR")
  .attr("x", 50)
  .attr("y", 1100)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","midnightblue")
  // .on(
  //   "click", revealFI
  // );
  let xAxisFIRGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisFIR=d3.axisBottom(xScaleFIR);
  let xAxisFIRYPos = h -1500;
  xAxisFIRGroup.attr("transform", "translate(0,"+xAxisFIRYPos+")");
  function createFIRAxis(){
    xAxisFIRGroup.call(xAxisFIR);
  }
  let boxRE= viz.append("rect")
  .attr("class","boxRE")
  .attr("x", 50)
  .attr("y", 1200)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","teal")
  // .on(
  //   "click", revealRE
  // );
  let xAxisREGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisRE=d3.axisBottom(xScaleRE);
  let xAxisREYPos = h -1400;
  xAxisREGroup.attr("transform", "translate(0,"+xAxisREYPos+")");
  function createREAxis(){
    xAxisREGroup.call(xAxisRE);
  }
  let boxPA= viz.append("rect")
  .attr("class","boxPA")
  .attr("x", 50)
  .attr("y", 1300)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","coral")
  // .on(
  //   "click", revealPA
  // );
  let xAxisPAGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisPA=d3.axisBottom(xScalePA);
  let xAxisPAYPos = h -1300;
  xAxisPAGroup.attr("transform", "translate(0,"+xAxisPAYPos+")");
  function createPAAxis(){
    xAxisPAGroup.call(xAxisPA);
  }
  let boxEd= viz.append("rect")
  .attr("class","boxEd")
  .attr("x", 50)
  .attr("y", 1400)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","blueviolet")
  // .on(
  //   "click", revealEd
  // );
  let xAxisEdGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisEd=d3.axisBottom(xScaleEd);
  let xAxisEdYPos = h -1200;
  xAxisEdGroup.attr("transform", "translate(0,"+xAxisEdYPos+")");
  function createEdAxis(){
    xAxisEdGroup.call(xAxisEd);
  }
  let boxHSA= viz.append("rect")
  .attr("class","boxHSA")
  .attr("x", 50)
  .attr("y", 1500)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","green")
  // .on(
  //   "click", revealHSA
  // );
  let xAxisHSAGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisHSA=d3.axisBottom(xScaleHSA);
  let xAxisHSAYPos = h -1100;
  xAxisHSAGroup.attr("transform", "translate(0,"+xAxisHSAYPos+")");
  function createHSAAxis(){
    xAxisHSAGroup.call(xAxisHSA);
  }
  let boxServ= viz.append("rect")
  .attr("class","boxServ")
  .attr("x", 50)
  .attr("y", 1600)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","lawngreen")
  // .on(
  //   "click", revealServ
  // );
  let xAxisServGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisServ=d3.axisBottom(xScaleServ);
  let xAxisServYPos = h -1000;
  xAxisServGroup.attr("transform", "translate(0,"+xAxisServYPos+")");
  function createServAxis(){
    xAxisServGroup.call(xAxisServ);
  }

  let boxSAA= viz.append("rect")
  .attr("class","boxSAA")
  .attr("x", 50)
  .attr("y", 1700)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","powderblue")
  // .on(
  //   "click", revealSAA
  // );
  let xAxisSAAGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisSAA=d3.axisBottom(xScaleSAA);
  let xAxisSAAYPos = h -900;
  xAxisSAAGroup.attr("transform", "translate(0,"+xAxisSAAYPos+")");
  function createSAAAxis(){
    xAxisSAAGroup.call(xAxisSAA);
  }
  let boxOrg= viz.append("rect")
  .attr("class","boxOrg")
  .attr("x", 50)
  .attr("y", 1800)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","gray")
  // .on(
  //   "click", revealOrg
  // );
  let xAxisOrgGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisOrg=d3.axisBottom(xScaleOrg);
  let xAxisOrgYPos = h -800;
  xAxisOrgGroup.attr("transform", "translate(0,"+xAxisOrgYPos+")");
  function createOrgAxis(){
    xAxisOrgGroup.call(xAxisOrg);
  }
  let boxUn= viz.append("rect")
  .attr("class","boxUn")
  .attr("x", 50)
  .attr("y", 1900)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","white")
  // .on(
  //   "click", revealUn
  // );
  let xAxisUnGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisUn=d3.axisBottom(xScaleUn);
  let xAxisUnYPos = h -700;
  xAxisUnGroup.attr("transform", "translate(0,"+xAxisUnYPos+")");
  function createUnAxis(){
    xAxisUnGroup.call(xAxisUn);
  }
  let boxGS= viz.append("rect")
  .attr("class","boxGS")
  .attr("x", 50)
  .attr("y", 2000)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","hotpink")
  // .on(
  //   "click", revealGS
  // );
  let xAxisGSGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisGS=d3.axisBottom(xScaleGS);
  let xAxisGSYPos = h -600;
  xAxisGSGroup.attr("transform", "translate(0,"+xAxisGSYPos+")");
  function createGSAxis(){
    xAxisGSGroup.call(xAxisGS);
  }
  let boxPaint= viz.append("rect")
  .attr("class","boxPaint")
  .attr("x", 50)
  .attr("y", 2100)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","violet")
  // .on(
  //   "click", revealPaint
  // );
  let xAxisPaintGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisPaint=d3.axisBottom(xScalePaint);
  let xAxisPaintYPos = h -500;
  xAxisPaintGroup.attr("transform", "translate(0,"+xAxisPaintYPos+")");
  function createPaintAxis(){
    xAxisPaintGroup.call(xAxisPaint);
  }
  let boxPCB= viz.append("rect")
  .attr("class","boxPCB")
  .attr("x", 50)
  .attr("y", 2200)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","rebeccapurple")
  // .on(
  //   "click", revealPCB
  // );
  let xAxisPCBGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisPCB=d3.axisBottom(xScalePCB);
  let xAxisPCBYPos = h -400;
  xAxisPCBGroup.attr("transform", "translate(0,"+xAxisPCBYPos+")");
  function createPCBAxis(){
    xAxisPCBGroup.call(xAxisPCB);
  }
  let boxApar= viz.append("rect")
  .attr("class","boxApar")
  .attr("x", 50)
  .attr("y", 2300)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","silver")
  // .on(
  //   "click", revealApar
  // );
  let xAxisAparGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisApar=d3.axisBottom(xScaleApar);
  let xAxisAparYPos = h -300;
  xAxisAparGroup.attr("transform", "translate(0,"+xAxisAparYPos+")");
  function createAparAxis(){
    xAxisAparGroup.call(xAxisApar);
  }
  let boxFS= viz.append("rect")
  .attr("class","boxFS")
  .attr("x", 50)
  .attr("y", 2400)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","indianred")
  // .on(
  //   "click", revealFS
  // );
  let xAxisFSGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisFS=d3.axisBottom(xScaleFS);
  let xAxisFSYPos = h -200;
  xAxisFSGroup.attr("transform", "translate(0,"+xAxisFSYPos+")");
  function createFSAxis(){
    xAxisFSGroup.call(xAxisFS);
  }
  let boxRoof= viz.append("rect")
  .attr("class","boxRoof")
  .attr("x", 50)
  .attr("y", 2500)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","olive")
  // .on(
  //   "click", revealRoof
  // );
  let xAxisRoofGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisRoof=d3.axisBottom(xScaleRoof);
  let xAxisRoofYPos = h -100;
  xAxisRoofGroup.attr("transform", "translate(0,"+xAxisRoofYPos+")");
  function createRoofAxis(){
    xAxisRoofGroup.call(xAxisRoof);
  }
  let boxWFE= viz.append("rect")
  .attr("class","boxWFE")
  .attr("x", 50)
  .attr("y", 2600)
  .attr("width", 1300)
  .attr("height", 100)
  .attr("fill","khaki")
  // .on(
  //   "click", revealWFE
  // );
  let xAxisWFEGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
  let xAxisWFE=d3.axisBottom(xScaleWFE);
  let xAxisWFEYPos = h;
  xAxisWFEGroup.attr("transform", "translate(0,"+xAxisWFEYPos+")");
  function createWFEAxis(){
    xAxisWFEGroup.call(xAxisWFE);
  }
});
