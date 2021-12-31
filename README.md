# cheerio_scraper
Web Scraper with node.js using `cheerio`

`1. http get request from a website that response data`
`2. then data should be load by cheerio`
`3. target necessaries element, grab it and then restore`

### Here
```
const website = 'https://naturalbd.com/movies.html';
    axios(website).then((res) => {
        const data = res.data;
        const $ = cheerio.load(data);

        let content = [];

        $('.product', data).each(function () {
            const title = $(this).find('h6').text();
            const url = $(this).find('h6').find('a').attr('href');
            const img = $(this).find('img').attr('src')

            content.push({
                title,
                url,
                img
            });
        });
    });
    
```
