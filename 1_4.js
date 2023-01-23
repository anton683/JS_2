let road = "15 km";

let result =road.slice(0, -3)
 
 console.log(result)
  result = result * 0.62
 console.log(result);
  result = ( Math.round(result * 10) / 10 )
 console.log(result);