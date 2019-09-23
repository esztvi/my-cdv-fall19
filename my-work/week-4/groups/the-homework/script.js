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
function getColor (datapoint,i) {

    console.log(datapoint.medium);
    if(datapoint.medium == "Viber")
    { return "purple";}
    else if(datapoint.medium == "Snapchat")
    { return "yellow";}
    else if(datapoint.medium == "Instagram")
    { return "magenta";}
    else if(datapoint.medium == "WeChat")
    { return "lime";}
    else if(datapoint.medium == "Facebook")
    { return "blue";}
    else if(datapoint.medium == "Email")
    { return "orange";}
    return "datapoint.medium";
};
function getStroke (datapoint,i) {

    console.log(datapoint.person);
    if(datapoint.person == "Mom")
    { return "purple";}
    else if(datapoint.person == "Sarah Barber")
    { return "yellow";}
    else if(datapoint.person == "Dora")
    { return "magenta";}
    else if(datapoint.person == "Katie")
    { return "lime";}
    else if(datapoint.person == "Corey")
    { return "lavender";}
    else if(datapoint.person == "Sinead")
    { return "black";}
    else if(datapoint.person == "Emily")
    { return "white";}
    else if(datapoint.person == "Riya")
    { return "blue";}
    else if(datapoint.person == "Yvonne")
    { return "red";}
    else if(datapoint.person == "Paul")
    { return "orange";}
    else if(datapoint.person == "Stella")
    { return "violet";}
    else if(datapoint.person == "Amy")
    { return "gray";}
    else if(datapoint.person == "Gordon")
    { return "beige";}
    else if(datapoint.person == "Elisa")
    { return "brown";}
    else if(datapoint.person == "Lilla")
    { return "BurlyWood";}
    else if(datapoint.person == "Corbin")
    { return "coral";}
    else if(datapoint.person == "Kevin")
    { return "Crimson";}
    else if(datapoint.person == "Ding")
    { return "cyan";}
    else if(datapoint.person == "Karesh")
    { return "DarkGoldenRod";}
    else if(datapoint.person == "Shannelle")
    { return "DarkGreen";}
    else if(datapoint.person == "Sarah Brooker")
    { return "DarkKhaki";}
    else if(datapoint.person == "Adele")
    { return "SeaGreen";}
    else if(datapoint.person == "Fiona")
    { return "salmon";}
    else if(datapoint.person == "Lindsay")
    { return "SlateBlue";}
    else if(datapoint.person == "Sienna")
    { return "DeepPink";}
    else if(datapoint.person == "Eleonora")
    { return "DeepSkyBlue";}
    else if(datapoint.person == "Akos")
    { return "DodgerBlue";}
    else if(datapoint.person == "Sabina")
    { return "gold";}
    else if(datapoint.person == "Linda")
    { return "GreenYellow";}
    else if(datapoint.person == "Konrad")
    { return "IndianRed";}
    else if(datapoint.person == "Jessica")
    { return "indigo";}
    else if(datapoint.person == "Ben")
    { return "MidnightBlue";}
    else if(datapoint.person == "Jenya")
    { return "MediumAquaMarine";}
    else if(datapoint.person == "Tristan")
    { return "Olive";}
    else if(datapoint.person == "Leon")
    { return "Maroon";}
    else if(datapoint.person == "Ellen")
    { return "MediumPurple";}
    else if(datapoint.person == "Sarah Nelson")
    { return "PaleGreen";}
    else if(datapoint.person == "Angelina")
    { return "PaleVioletRed";}
    else if(datapoint.person == "Naitra")
    { return "Plum";}
    else if(datapoint.person == "Eva")
    { return "RosyBrown";}
    else if(datapoint.person == "Sheldon")
    { return "Tomato";}
    else if(datapoint.person == "Jackie")
    { return "tan";}
    return "datapoint.person";
};
function getPlace (datapoint,i) {

    console.log(datapoint.locationOfSender);
    if(datapoint.locationOfSender == "Toronto")
    { return "Toronto";}
    else if(datapoint.locationOfSender == "Fort Collins")
    { return "Fort Collins";}
    else if(datapoint.locationOfSender == "New York")
    { return "New York";}
    else if(datapoint.locationOfSender == "Abu Dhabi")
    { return "Abu Dhabi";}
    else if(datapoint.locationOfSender == "Belmont")
    { return "Belmont";}
    else if(datapoint.locationOfSender == "DC")
    { return "DC";}
    else if(datapoint.locationOfSender == "Madrid")
    { return "Madrid";}
    else if(datapoint.locationOfSender == "Prague")
    { return "Prague";}
    else if(datapoint.locationOfSender == "Shanghai")
    { return "Shanghai";}
    else if(datapoint.locationOfSender == "Chiang Mai")
    { return "Chiang Mai";}
    else if(datapoint.locationOfSender == "Gyongyos")
    { return "Gyongyos";}
    return "datapoint.medium";
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
  groupelements.append("circle", getColor, getStroke)
      .attr("r", 20)
      .attr("fill", getColor)
      .attr("stroke", getStroke)
      .attr("strokeWeight", 30)
  ;
  // append text
  groupelements.append("text", getPlace)
      .text("text", getPlace)
      .attr("fill", "black")
  ;
  // position groups (this could also be part of the
  // section where we created the groups in the first place).
  groupelements.attr("transform", randomTranslate)
  ;
}

// get data
d3.json("data.json").then(gotData);
