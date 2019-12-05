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
  .attr("fill","rgb(0)")
  // .on(
  //   "click", revealAg
  // );
  let xAxisAgGroup=viz.append("g")
      .attr("class","xaxisgroup")
      .attr("fill","whitesmoke")
      .attr("stroke","whitesmoke")
      .attr("line","whitesmoke")
  ;
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

});
