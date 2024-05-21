# TASK- DAY 3

### Day 3's tasks involves 3 Questions:

    Q1. To check weather two JSON objects are same without order.

    Q2. From the restcountries API print every country's
        * name &
        * flag
    in the console

    Q3. From the same API print every country's
        * name
        * region
        * sun-region
        * population

## Q1) Check properties of JSON without order

In the first question we need to check if the two objects are same without conscidering the order of porperties.

Here's a flow-chart on how to check the similarity.

```mermaid
graph LR
        A[obj1,obj2]--[find keys]-->B(key1,key2 \n In array fromat);
        B--> C(<h3>SORT</h3> the key arrays);
        C--> D[find length of both arrays];
        D-->E{<h2>key1.length === key2.length}--no-->F[Both objects are <h3>Different];
        E--yes-->G(Iterate through both arrays)
        G-->H{<h2>obj1.property === obj2.property \n for each property};
        H--no-->F
        H--yes-->I(Both objects are <h3>Same)
```
## Q2) Name & flag from restcontries API

To get any data from the API we first have to request the server for the data,then the server gives the response.

  * First we have to parse the data into JSON format fro clear view
  * Then, we acces the data from JSON according to our requirement

Below is a flowchart for fetching name & flag from the JSON object

```mermaid
graph LR;
A[Fetch data from url using <h3>xmlhttp request method</h3>]-->B(Parse into <h3>JSON fromat)
B-->E(Iterate through the JSON for <h3>Each counrty)
E-->C(access the name of country:\n<h3>counrty.name.common)
E-->D(access the flag of country:\n<h3>country.flag.png)
```
## Q2) Name, region, sub-region & population from restcontries API

To egt the above propertiues from the recieved response we follow the sam esteps that we did for Q2  
But here, we do some extra steps to get all these data
* parse the response into JSON format for clear view
* acces the properties to get our data

below is a flowchart that explains the steps followed:

```mermaid
graph LR;
A[Fetch data from url using <h3>xmlhttp request method</h3>]-->B(Parse into <h3>JSON fromat)
B-->G(Iterate through the JSON for <h3>Each counrty)
G-->C(access the name of country:\n<h3>counrty.name.common)
G-->D(access the region of country:\n<h3>country.region)
G-->E(access the sub-region of country:\n<h3>country.subregion)
G-->F(access the population of country:\n<h3>country.population)
```









