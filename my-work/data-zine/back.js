//http://datawanderings.com/2018/10/28/making-a-map-in-d3-js-v-5/
//this can be a map!!!!
//
// var shapefile = ogr2ogr('/mywork/data-zine/map.geojson')
//                     .format('ESRI Shapefile')
//                     .skipfailures()
//                     .stream()
// shapefile.pipe(fs.createWriteStream('/shapefile.zip'))
//http://datawanderings.com/2018/10/28/making-a-map-in-d3-js-v-5/
    let w = 1200;
    var h = 800;
    var svg = d3.select("div#container").append("svg").attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + w + " " + h).style("background","#c9e8fd")
    .classed("svg-content", true);
    var projection = d3.geoMercator().translate([w/2, h/2]).scale(2200).center([0,40]);
var path = d3.geoPath().projection(projection);
var worldmap = d3.json("countries.geojson");
var cities = d3.csv("cities.csv");
Promise.all([worldmap, cities]).then(function(values){
// draw map
    svg.selectAll("path")
        .data(values[0].features)
        .enter()
        .append("path")
        .attr("class","continent")
        .attr("d", path),
// draw points
    svg.selectAll("circle")
        .data(values[1])
        .enter()
        .append("circle")
        .attr("class","circles")
        .attr("cx", function(d) {return projection([d.Longitude, d.Lattitude])[0];})
        .attr("cy", function(d) {return projection([d.Longitude, d.Lattitude])[1];})
        .attr("r", "1px"),
// add labels
    svg.selectAll("text")
        .data(values[1])
        .enter()
        .append("text")
        .text(function(d) {
            return d.City;
            })
        .attr("x", function(d) {return projection([d.Longitude, d.Lattitude])[0] + 5;})
        .attr("y", function(d) {return projection([d.Longitude, d.Lattitude])[1] + 15;})
        .attr("class","labels");
});
