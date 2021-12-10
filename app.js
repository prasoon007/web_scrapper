const axios = require('axios').default;
const cheerio = require("cheerio");
const fs = require("fs");
const pretty = require("pretty");

// URL of the page we want to scrape
const url = "https://yandex.com/images/search?source=collections&rpt=imageview&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F1782043%2FHvn_cBrTbxallv1R1sOwwQ4560%2Forig&cbir_id=1782043%2FHvn_cBrTbxallv1R1sOwwQ4560";

// Async function which scrapes the data
async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const listItems = $(".CbirSimilar-ThumbImage");
        listItems.each((idx, el) => {
            // const country = { name: "", iso3: "" };
            // country.name = $(el).children("a").text();
            // country.iso3 = $(el).children("span").text();
            let images = $(el).attr('href');
            // countries.push(country);
        });
        
    } catch (err) {
        console.error(err);
    }
}
scrapeData();


