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
      }
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
          //finish adding people here total should be 75 ish
          //choose a better color code in general (this is cosmetic and can be done later)
          //potentially color based on message freq?
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
