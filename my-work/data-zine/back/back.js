//http://datawanderings.com/2018/10/28/making-a-map-in-d3-js-v-5/
//this can be a map!!!!
//
var shapefile = ogr2ogr('/mywork/data-zine/map.geojson')
                    .format('ESRI Shapefile')
                    .skipfailures()
                    .stream()
shapefile.pipe(fs.createWriteStream('/shapefile.zip'))
