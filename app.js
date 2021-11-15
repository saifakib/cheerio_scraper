const express = require('express');
const axios = require('axios')
const cheerio = require('cheerio');

const app = express();

const PORT = process.env.port || 3000;

const website = 'https://naturalbd.com/movies.html';

try {
    axios(website).then((res) => {
        const data = res.data;
        const $ = cheerio.load(data);

        let content = [];


        // $('.sdc-site-tile__headline', data).each(function () {
        //     const title = $(this).text();
        //     const url = $(this).find('a').attr('href');

        //     content.push({
        //         title,
        //         url,
        //     });
        //     app.get('/', (req, res) => {
        //         res.json(content);
        //     });
        // });

        $('.product', data).each(function () {
            const title = $(this).find('h6').text();
            const url = $(this).find('h6').find('a').attr('href');
            const img = $(this).find('img').attr('src')

            content.push({
                title,
                url,
                img
            });
            app.get('/', (req, res) => {
                res.json(content);
            });
        });
    });
} catch (error) {
    console.log(error, error.message);
}

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`);
});