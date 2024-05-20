function reqListener() {
  let countryArray = JSON.parse(this.responseText);
  for(let key of countryArray){
    console.log("country name: ",key.name.common,",region: ",key.region,",sub-region: ",key.subregion,",population: ",key.population);
  }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();