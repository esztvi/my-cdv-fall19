let  data = [

  {
    "timestamp": "2019-09-03T14:44:28.271Z",
    "milkTea": 3,
    "ramen": 7,
    "spaghettiBolognese": 5,
    "mango": 2
  },
  {
    "timestamp": "2019-09-03T14:44:36.101Z",
    "milkTea": 2,
    "ramen": 2,
    "spaghettiBolognese": 8,
    "mango": 4
  },
  {
    "timestamp": "2019-09-03T14:45:10.480Z",
    "milkTea": 2,
    "ramen": 3,
    "spaghettiBolognese": 4,
    "mango": 1
  },
  {
    "timestamp": "2019-09-04T05:48:07.519Z",
    "milkTea": 10,
    "ramen": 10,
    "spaghettiBolognese": 7,
    "mango": 10,
    "dumpling": 8
  },
  {
    "timestamp": "2019-09-04T05:48:11.427Z",
    "milkTea": 7,
    "ramen": 5,
    "spaghettiBolognese": 6,
    "mango": 1,
    "dumpling": 7
  },
  {
    "timestamp": "2019-09-04T05:48:11.509Z",
    "milkTea": 7,
    "ramen": 9,
    "spaghettiBolognese": 10,
    "mango": 1,
    "dumpling": 8
  },
  {
    "timestamp": "2019-09-04T05:48:15.178Z",
    "milkTea": 10,
    "ramen": 10,
    "spaghettiBolognese": 4,
    "mango": 10,
    "dumpling": 10
  },
  {
    "timestamp": "2019-09-04T05:48:19.690Z",
    "milkTea": 5,
    "ramen": 10,
    "spaghettiBolognese": 8,
    "mango": 8,
    "dumpling": 7
  },
  {
    "timestamp": "2019-09-04T05:48:23.595Z",
    "milkTea": 1,
    "ramen": 10,
    "spaghettiBolognese": 10,
    "mango": 10,
    "dumpling": 5
  },
  {
    "timestamp": "2019-09-04T05:48:32.244Z",
    "milkTea": 10,
    "ramen": 10,
    "spaghettiBolognese": 9,
    "mango": 1,
    "dumpling": 8
  },
  {
    "timestamp": "2019-09-04T05:48:35.279Z",
    "milkTea": 10,
    "ramen": 9,
    "spaghettiBolognese": 8,
    "mango": 10,
    "dumpling": 7
  },
  {
    "timestamp": "2019-09-04T05:48:36.009Z",
    "milkTea": 10,
    "ramen": 10,
    "spaghettiBolognese": 9,
    "mango": 10,
    "dumpling": 9
  },
  {
    "timestamp": "2019-09-04T05:48:40.293Z",
    "milkTea": 10,
    "ramen": 10,
    "spaghettiBolognese": 10,
    "mango": 10,
    "dumpling": 10
  },
  {
    "timestamp": "2019-09-04T05:48:40.671Z",
    "milkTea": 8,
    "ramen": 8,
    "spaghettiBolognese": 7,
    "mango": 9,
    "dumpling": 7
  },
  {
    "timestamp": "2019-09-04T05:49:14.027Z",
    "milkTea": 1,
    "ramen": 10,
    "spaghettiBolognese": 1,
    "mango": 10,
    "dumpling": 1
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
