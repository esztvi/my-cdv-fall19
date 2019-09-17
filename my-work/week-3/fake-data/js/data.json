let  data = [
    {
        "sproutworkspizza": 5,
        "familymartsushi": 1,
        "familymartcurry": 7,
        "nystylepizza": 9,
        "mcdonaldshamburgers": 4,
        "beefandlibertyhamburgers": 7
    },
    {
        "sproutworkspizza": 5,
        "familymartsushi": 2,
        "familymartcurry": 7,
        "nystylepizza": 8,
        "mcdonaldshamburgers": 4,
        "beefandlibertyhamburgers": 8
    },
    {
        "sproutworkspizza": 6,
        "familymartsushi": 6,
        "familymartcurry": 5,
        "nystylepizza": 8,
        "mcdonaldshamburgers": 7,
        "beefandlibertyhamburgers": 9
    },
    {
        "sproutworkspizza": 6,
        "familymartsushi": 3,
        "familymartcurry": 9,
        "nystylepizza": 10,
        "mcdonaldshamburgers": 3,
        "beefandlibertyhamburgers": 7
    },
    {
        "sproutworkspizza": 8,
        "familymartsushi": 5,
        "familymartcurry": 8,
        "nystylepizza": 9,
        "mcdonaldshamburgers": 8,
        "beefandlibertyhamburgers": 9
    },
    {
        "sproutworkspizza": 5,
        "familymartsushi": 1,
        "familymartcurry": 6,
        "nystylepizza": 10,
        "mcdonaldshamburgers": 6,
        "beefandlibertyhamburgers": 8
    },
    {
        "sproutworkspizza": 3,
        "familymartsushi": 1,
        "familymartcurry": 3,
        "nystylepizza": 7,
        "mcdonaldshamburgers": 7,
        "beefandlibertyhamburgers": 8
    },
    {
        "sproutworkspizza": 6,
        "familymartsushi": 6,
        "familymartcurry": 6,
        "nystylepizza": 7,
        "mcdonaldshamburgers": 7,
        "beefandlibertyhamburgers": 8
    },
    {
        "sproutworkspizza": 8,
        "familymartsushi": 1,
        "familymartcurry": 6,
        "nystylepizza": 9,
        "mcdonaldshamburgers": 8,
        "beefandlibertyhamburgers": 8
    },
    {
        "sproutworkspizza": 7,
        "familymartsushi": 5,
        "familymartcurry": 5,
        "nystylepizza": 8,
        "mcdonaldshamburgers": 6,
        "beefandlibertyhamburgers": 8
    },
    {
        "familymartsushi": 6,
        "familymartcurry": 7,
        "nystylepizza": 5,
        "mcdonaldshamburgers": 10,
        "beefandlibertyhamburgers": 9
    },
    {
        "sproutworkspizza": 6,
        "familymartsushi": 1,
        "familymartcurry": 7,
        "nystylepizza": 8,
        "mcdonaldshamburgers": 9,
        "beefandlibertyhamburgers": 1
    }
]

// the function dates a data
// arrayn as an argument
function averageData(data){
  // new empty array to be filled
  // with data in new structure
  let newData = [];
  // assuming each data point has the same
  // keys/categories, we extract an array of them from the
  // first data point in the array
  let keys = Object.keys(data[data.length-1]);
  // now we loop over the keys/categories
  for(let i = 0; i < keys.length; i++){
    // store the current key/category in
    // a variable:
    let key = keys[i];
    // now we will loop over each data point
    // in the data set, check if it has a value
    // for the key/category and add them to
    // a total sum variable
    // as well as count the occurences in order to
    // calulate the averae in the end
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      // check if the key exists
      // for this datapoint
      if(key in datum){
        // add to sum
        sum += datum[key];
        // increase count
        num++;
      }
    }
    // now calculate the average
    let avg = sum/num;
    // make sure the value is a number
    // (some value might be strings)
    if(!isNaN(avg)){
      // create an object with both the average
      // and also the number of measurements that
      // went into the average
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      // add the new datapoint to the new data array
      newData.push(newDataPoint);
    }
  }
  // return everything when it is done
  return newData;
}
//loop over data
let transformedData = averageData(data);
//get the item we deal with at this iteration
console.log(transformedData);
//ge the name of the current item
//and the avergae liking value
for(let i = 0; i < transformedData.length; i++){
  let datapoint = transformedData[i];
  let food = datapoint.name;
  let average = datapoint.average;
  //create a div
  let bar = document.createElement("div");
  let barname = document.createElement("p");
  barname.innerHTML=food;
  bar.style.width = (average * 44) + "px";
  //modify size and position of div
  bar.className = "bar";
  //append dive to the page
  bar.appendChild(barname);
  document.body.appendChild(bar);
}
