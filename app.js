var Scraper = require("image-scraper");
 
var scraper = new Scraper("https://www.learncbse.in/rd-sharma-solutions-for-class-9-chapter-13-linear-equations-in-two-variables/");

scraper.scrape(function(image) { 
    console.log(image.attributes.src)
});