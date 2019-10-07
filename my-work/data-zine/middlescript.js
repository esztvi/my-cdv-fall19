let viz = d3.select("#viz-container")
                .append("svg")
                    .attr("id", "viz")
                    .attr("width", 2400)
                    .attr("height", 800)
;

let line = d3.select("#viz-container")
                .append("svg")
                    .attr("id", "line")
                    .attr("width", 2400)
                    .attr("height", 800)
;
d3.json("full-data.json").then(gotData);

// 3. concept: data and datapoint
// 4. make one circle for each datapoint (size and position doesn't matter)
//create svg
d3.select("body")
  .append("svg")
      .attr("width",2400)
      .attr("height",800)

      ;
      function randomNumber(datapoint, i)
      {
console.log(datapoint);
//This needs to be the date thing... so I need to splace the day from the hour and from the minute
console.log(i);

          return datapoint.time;
        //scale the X values then to fit in the Zine... but then you need something like:
        //let paddingSide = 8;
        // let xScale = d3.scaleLinear().domain([0,100]).range([paddingSide,(w - paddingSide)]);
        // function xPosition(d, i){
        //   return xScale(i);
//var parser = d3.time.format("%m/%d/%Y");
//time = d3.time.format("%x %X").parse("01/02/2014 08:22:05");
//console.log(time);
      // maybe Y is the date and x is the time???
        }

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
          // console.log(datapoint.medium);
          // if(datapoint.medium == "Viber")
          // { return "purple";}
          // else if(datapoint.medium == "Snapchat")
          // { return "yellow";}
          // else if(datapoint.medium == "Instagram")
          // { return "magenta";}
          // else if(datapoint.medium == "WeChat")
          // { return "lime";}
          // else if(datapoint.medium == "Facebook")
          // { return "blue";}
          // else if(datapoint.medium == "Email")
          // { return "orange";}
          // return "datapoint.medium";
      };
      function getStroke (datapoint,i) {
          //maybe underline it with the location?


      };
      function gotData(incomingData) {
          console.log(incomingData)

  viz.selectAll("circle").data(incomingData)
      .enter()
      .append("circle")
      .attr("cx",randomNumber)
      .attr("cy", 50)
      .attr("r", 20)
      .attr("fill", getColor)
      .attr("stroke", getStroke)
      .attr("strokeWeight", 30)
      ;
}

//same main idea with the coloring.... make stroke thickness the freq of messages?
