// function randomTranslate(){
//   let cx = randomNumber;
//   let cy = 50;
//   // return "translate(" + cx + "," + cy + ")";
// }
// function randomNumber(datapoint, i)
// {
// console.log(datapoint);
// // console.log(whatsthesecond);
// console.log(i);
//     // return Math.random()*500;
//     return datapoint.time * 5;
// };
function randomTranslate(datapoint, i){
  let x = (datapoint.time * 5);
  let y = Math.random()*500;
  return "translate(" + x + "," + y + ")";
};
function gotData(incomingData){
  // create svg
  let viz = d3.select("body")
    .append("svg")
      .attr("width", 7500)
      .attr("height", 800)
  ;
  // append groups
  let groupelements = viz.selectAll(".datagroup").data(incomingData)
    .enter()
      .append("g")
      .attr("class", "datagroup")
  ;
  // append circles
  groupelements.append("circle")
      .attr("r", 20)
  ;
  // append text
  groupelements.append("text")
      .text("hello")
      .attr("fill", "red")
  ;
  // position groups (this could also be part of the
  // section where we created the groups in the first place).
  groupelements.attr("transform", randomTranslate)
  ;
}

// get data
d3.json("data.json").then(gotData);
