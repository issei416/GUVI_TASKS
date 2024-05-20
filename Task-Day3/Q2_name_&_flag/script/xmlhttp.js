function reqListener() {
  let countryArray = JSON.parse(this.responseText);
  console.log(countryArray);
  for(let key of countryArray){
    console.log(key.name.common,key.flags.png)
  }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();