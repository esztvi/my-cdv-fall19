let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

function getColor (datapoint,i) {
  console.log(datapoint.person);
  if(datapoint.person == "Mom")
  { return "DeepPink";}
  else if(datapoint.person == "Sarah Barber")
  { return "DarkSlateBlue";}
  else if(datapoint.person == "Dora")
  { return "Lime";}
  else if(datapoint.person == "Katie")
  { return "MediumSlateBlue";}
  else if(datapoint.person == "Corey")
  { return "MediumSpringGreen";}
  else if(datapoint.person == "Sinead")
  { return "MediumSeaGreen";}
  else if(datapoint.person == "Emily")
  { return "Brown";}
  else if(datapoint.person == "Riya")
  { return "DarkGreen";}
  else if(datapoint.person == "Yvonne")
  { return "Indigo";}
  else if(datapoint.person == "Paul")
  { return "OliveDrab";}
  else if(datapoint.person == "Stella")
  { return "MediumAquamarine";}
  else if(datapoint.person == "Amy")
  { return "DarkSeaGreen";}
  else if(datapoint.person == "Gordon")
  { return "Red";}
  else if(datapoint.person == "Elisa")
  { return "Crimson";}
  else if(datapoint.person == "Lilla")
  { return "PaleVioletRed";}
  else if(datapoint.person == "Corbin")
  { return "Purple";}
  else if(datapoint.person == "Kevin")
  { return "MidnightBlue";}
  else if(datapoint.person == "Ding")
  { return "Navy";}
  else if(datapoint.person == "Karesh")
  { return "Orange";}
  else if(datapoint.person == "Shannelle")
  { return "Blue";}
  else if(datapoint.person == "Sarah Brooker")
  { return "LimeGreen";}
  else if(datapoint.person == "Adele")
  { return "DarkOliveGreen";}
  else if(datapoint.person == "Fiona")
  { return "Cyan";}
  else if(datapoint.person == "Lindsay")
  { return "Teal";}
  else if(datapoint.person == "Sienna")
  { return "RebeccaPurple";}
  else if(datapoint.person == "Eleonora")
  { return "DarkRed";}
  else if(datapoint.person == "Akos")
  { return "LightCoral";}
  else if(datapoint.person == "Sabina")
  { return "RoyalBlue";}
  else if(datapoint.person == "Linda")
  { return "SlateGrey";}
  else if(datapoint.person == "Konrad")
  { return "DimGrey";}
  else if(datapoint.person == "Jessica")
  { return "CornflowerBlue";}
  else if(datapoint.person == "Ben")
  { return "DodgerBlue";}
  else if(datapoint.person == "Jenya")
  { return "Gold";}
  else if(datapoint.person == "Tristan")
  { return "Silver";}
  else if(datapoint.person == "Leon")
  { return "Tomato";}
  else if(datapoint.person == "Ellen")
  { return "YellowGreen";}
  else if(datapoint.person == "Sarah Nelson")
  { return "DeepSkyBlue";}
  else if(datapoint.person == "Angelina")
  { return "SpringGreen";}
  else if(datapoint.person == "Naitra")
  { return "DarkViolet";}
  else if(datapoint.person == "Èva")
  { return "IndianRed";}
  else if(datapoint.person == "Sheldon")
  { return "SkyBlue";}
  else if(datapoint.person == "Jackie")
  { return "LightSeaGreen";}
  else if(datapoint.person == "Dan")
  { return "Coral";}
  else if(datapoint.person == "Raymond")
  { return "OrangeRed";}
  else if(datapoint.person == "Adam")
  { return "BlueViolet";}
  else if(datapoint.person == "Amber")
  { return "LightGreen";}
  else if(datapoint.person == "Ethan")
  { return "Olive";}
  else if(datapoint.person == "Kyle")
  { return "SteelBlue";}
  else if(datapoint.person == "Boss")
  { return "Yellow";}
  else if(datapoint.person == "Li Hu")
  { return "Khaki";}
  else if(datapoint.person == "Erik")
  { return "Sienna";}
  else if(datapoint.person == "Lily")
  { return "SaddleBrown";}
  else if(datapoint.person == "Monika")
  { return "Maroon";}
  else if(datapoint.person == "Rasa")
  { return "CadetBlue";}
  else if(datapoint.person == "Anita")
  { return "Turquoise";}
  else if(datapoint.person == "Jasmine")
  { return "Aquamarine";}
  else if(datapoint.person == "Edward")
  { return "PaleTurquoise";}
  else if(datapoint.person == "Ceceilia")
  { return "PowderBlue";}
  else if(datapoint.person == "Robert")
  { return "LightSteelBlue";}
  else if(datapoint.person == "Thomas")
  { return "DarkSlateGrey";}
  else if(datapoint.person == "Xiaoyan")
  { return "SeaGreen";}
  else if(datapoint.person == "Silvia")
  { return "Green";}
  else if(datapoint.person == "Isabella")
  { return "MediumPurple";}
  else if(datapoint.person == "Jenny")
  { return "Honeydew";}
  else if(datapoint.person == "Jenya")
  { return "Goldenrod";}
  else if(datapoint.person == "Dad")
  { return "MediumVioletRed";}
  else if(datapoint.person == "Bobi")
  { return "AliceBlue";}
  else if(datapoint.person == "Berk")
  { return "MintCream";}
  else if(datapoint.person == "Emily Hancock")
  { return "WhiteSmoke";}
  else if(datapoint.person == "Eva")
  { return "Peru";}
  else if(datapoint.person == "Damian")
  { return "RosyBrown";}
  else if(datapoint.person == "Marcela")
  { return "LightGray";}
  return "datapoint.person";
}
function gotData(incomingData){
  // all the data:
  console.log(incomingData);




  let mdToDateObjectConverter = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");
  var formatMonth = d3.timeFormat("%m"),
    formatDay = d3.timeFormat("%dT"),
    formatTime = d3.timeFormat("%H:%M:%S"),
    date = new Date(d.time); // Thu May 01 2014 00:00:00 GMT-0700 (PDT)

  // next we can create an x scale. we want the x axis to sretch all the way from
  // the first year (min) of HIV measurement in our data set to the most recent (max) one.
  // then we want this information in this format:
  // [first-year-of-measurement, most-recent-year-of-measurement]
  // in order to define it as our x Scales input Domain.
  // d3 gives us useful methods to do this:
  // We can get the minimum/maximum value of any key in any array of objects or values. It doesn't
  // matter how complex out data is structured because we can tell d3 precisely
  // where to look for the value of which we want to know the minimum/maximum.
  // take a look:
  let xDomain = d3.extent(incomingData, function(d){
    // let day = d.time(mdToDateObjectConverter);
    console.log(d);
    console.log(mdToDateObjectConverter(d.time));
    let properlyFormatted = mdToDateObjectConverter(d.time)
    // console.log(properlyFormatted);
    //IMPORTANT: whatever we return will be the value of which d3 will
    // look for the minimum. Ultimately it returns the ONE minimum value of all data points.
    return properlyFormatted;
  });


  console.log(xDomain);
  // Let's see what we got:
  // console.log(minDay);
  // // this returns this Date object:
  // // Mon Jan 01 1990 00:00:00 GMT+0800 (China Standard Time)
  // // 1990! looks good!
  // // the maximum
  // let maxDay = d3.max(mdToDateObjectConverter, function(d){
  //   return mdToDateObjectConverter(day);
  // });
  // // the only thing that changed is the word "max"
  // console.log(maxDay);
  // // Sun Jan 01 2017 00:00:00 GMT+0800 (China Standard Time)
  // // 2017! Great, now we can put them into a domain array that we supply to constructing the xScale
  // let xDomain = [minDay, maxDay];
  // this will work perfectly well. But because it is needed so often
  // and requires the same code with only one word changed (min->max),
  // there is an even better method that directly returns min AND max in an array:
  // let alternativeXDomain = d3.extent(properlyFormattedDate, function(d){
  //   return mdToDateObjectConverter(d.time);
  // })
  // check it out
  // console.log(alternativeXDomain);
  // [Mon Jan 01 1990 00:00:00 GMT+0800 (China Standard Time), Sun Jan 01 2017 00:00:00 GMT+0800 (China Standard Time)]
  // You see? the exact same, just much shorter!
  // so right now the variables xDomain and alternativeXDomain have the exact same value.
  // the only difference is that we create alternativeXDomain much smarter.
  // X scale (as learned in week4's Lab)


formatMonth(date); // "May"
formatDay(date); // "Thursday"
  let xPadding = 50;
  // reference: https://github.com/d3/d3-scale#time-scales
  let xScale = d3.scaleTime().domain(XDomain).range([xPadding, w-(xPadding*2)]);
  // console.log(xScale(xDomain("9/10")))
  // Next, let's draw an x axis. This is new for us, but luckily D3 makes it incredibly
  // easy.
  // reference: https://github.com/d3/d3-axis
  // All an axis realy needs is to know our scale
  var xAxis = d3.axisBottom(xScale);
  // d3 works with the default svg shapes, an axis is put together of many of them.
  // it makes A LOT of sense to group all these elements in a group
  let xAxisGroup = viz.append("g").attr("class", "xaxis");
  // then we tell D3 to construct an axis in this group:
  xAxisGroup.call(xAxis);
  // take a look, do you see the axis at the top of your svg?
  // looks good no? The "Bottom" in "d3.axisBottom(xScale);" refers to the side on which
  // the axis text appear, not where the axis as a whole is located,
  // we have to take care of that ourselves:
  let xAxisYPos = h - 30;
  xAxisGroup.attr("transform", "translate(0,"+xAxisYPos+")");
  // excuse me please, but this. looks. mesmerizing.


  // y scale and axis
  // let's do the same on the y axis, for the value of the:
  // "Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)"
  // -key. What an annoyingly long key. If you are confused look at the datapoints
  // we console.logged above. Let's save the key in a variable to make it less annoying:
  let valueKey = "Messages By Platform";

  // Now let's do it, but faster than above!
  // y Scale:
  let topPadding = 30;
  let yScale = d3.scaleLinear().domain(d3.extent(properlyFormatted, function(d){return d[valueKey]})).range([xAxisYPos, topPadding]);
  // Wow, please consider this one carfully. We get the min max extent right in place.
  // we access the values NOT WITH A DOT NOTATATION like d.Year!!!!!! This is confusing, but
  // extremely IMPORTANT to know. We use our string (variable) in []-brackets instead.
  // then, our range: we want the lowest value to be scaled to the pixel where our X AXIS starts
  // so we use the xAxisYPos for the min of the range, and a little padding for the top.

  // next, axis:
  var yAxis = d3.axisLeft(yScale);
  let yAxisgroup = viz.append("g").attr("class", "yaxis").call(yAxis);
  yAxisgroup.attr("transform", "translate("+xPadding+",0)");

  // now that was quick. six lines of code?? Oh my, this is so neat.


  // now let's plot
  // to keep things seperated let's make a group for all shapes:
  let vizGroup = viz.append("g").attr("class", "vizgroup");

  // bind data and create groups for each datapoint:
  let dataGroups = vizGroup.selectAll(".datagroup").data(filteredData).enter()
      .append("g")
      .attr("class", "datagroup")
  ;


  // OPTION 1 circles

  // append circles to the groups

  let circles = dataGroups.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 5)
  ;



  // OPTION 2 graphics
  // i don't want circles / for jerry
  // note the variable at the bottom of this file
  // it's svg code exported from Adobe Illustrator

  // dataGroups.html(svgInsta);
  // dataGroups.selectAll("path").attr("transform", "scale(0.1)");


  // translate function in which we are using our scales
  // NOTE: the xScale expect us to supply a properly formatted date object
  function getTranslate(d, i){
    let properlyFormattedDate = yearToDateObjectConverter(d.Year);
    let value = d[valueKey];
    return "translate("+xScale(properlyFormattedDate)+","+yScale(value)+")";
  }
  // translate the position of each group:
  dataGroups.attr("transform", getTranslate);
  // this looks great, compare it with this graph from the website we got our data from:
  // https://ourworldindata.org/grapher/new-cases-of-hiv-infection?tab=chart&time=1990..2017&country=CHN


  // what next?


  // try changing the country Code in our filer function. E.g. to USA
  // Everything will automatically adjust to the new data. See the y Axis changing?

  // next we could adjust our filter to "let in" data from another country.
  //  (datapoint.Code == "USA" || datapoint.Code == "CHN")
  // then leave all code as it is, but color each circle depending on its Code value
  // that way each country would have its own color. Try it!

}

d3.json("full-data.json").then(gotData);

console.log("lol");
