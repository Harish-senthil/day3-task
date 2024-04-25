var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    var res = JSON.parse(req.response);
    //SubQuestion 2
    res.forEach(country => console.log(country.flags.svg));
    //SubQuestion 3
    res.forEach(country => {
        console.log("Name:", country.name.common);
        console.log("Region:", country.region);
        console.log("Sub-region:", country.subregion);
        console.log("Population:", country.population);
    });
}
