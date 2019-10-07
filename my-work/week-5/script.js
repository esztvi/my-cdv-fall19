let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
    ;

    function gotData(incomingData){
      console.log(incomingData);
      //Making new array example
    // }
  //   function printIndexAndValue(d){
  //     console.log(d);
  //   }
  //   incomingData.forEach(function(d,i){
  //     console.log("current: ", i);
  //     console.log(d);
  //   });
  //   function newDataPointBasedOnOldDatapont(d){
  //     let entity = d.Entity;
  //     let year = d.Year;
  //     return{firstValue: entity, secondValue: year}
  //
  //   let newArray = incomingData.map(newDataPointBasedOnOldDatapont)
  //   console.log(newArray);
  //
  // }
  //
  // FILTER EXAMPLE
  function filterFunction(d){
    if(d.Code=="CHN"){
      return true;
    } else{
      return false;
    }
  }
      let filteredData = incomingData.filter(filterFunction);
      console.log(filteredData);
}
d3.csv("new-cases-of-hiv-infection.csv").then(gotData);
