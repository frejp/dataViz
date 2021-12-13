var fs = require('fs');

const apa = "San Francisco,81808, 3500,Beijing,72819, 21000,New York,33763, 20000,San Jose,24857, 2000,Boston,24567, 5000,Shanghai,23839, 26000,Los Angeles,17391, 12000,London,15650, 13000,Hangzhou,11390, 13000,Bangalore,10568, 11000,Delhi,8749, 28000,Berlin,7291, 6000,San Diego,6030,  3000,Seattle,5710, 4000,Tel Aviv,5280, 3800,Chicago,5148, 9600,Singapore,4720, 5800,Paris,4578, 19000,Washington,4359, 6000,Shenzhen,4286, 23000,Austin,3635, 2200,Tokyo,3066, 37000,Atlanta,3036, 6000,Toronto, 2986, 9300,Philadelphia,2985, 6200,Seoul,2848, 10000,Jakarta,2828, 33000,Mumbai,2757, 20000,Stockholm,2641, 2200,Denver,2581, 3500"
const newApa = apa.split(',');
let mapped = [];
newApa.forEach((item, i, array) => {
    if (i%3 === 0 || i===0) {
        //this is needed.
        //som jag tänkte. räcker volym eller vill man ha förändring i volym...
        //förändring i volym är völ intressant om man kolla pp förändring i vc kapital.
        console.log(array[i]);
        const row = {
            city: array[i],
            vcCapital: parseInt(array[i+1], 10),
            cityPopulation: parseInt(array[i+2], 10),
            propertyActivityPerCapita: (1000 +(Math.random()*1000)),
            vcCapitalPerCapita: (parseInt(array[i+1], 10))/parseInt(array[i+2], 10)
        }
        mapped = [
            ...[row],
            ...mapped
        ]
    }
});

var json = JSON.stringify(mapped);
fs.writeFile('myjsonfile.json', json, 'utf8', () => {
    console.log('done');
});
//console.log('asd asd');
//console.log(mapped);
//console.log('asd asd');

