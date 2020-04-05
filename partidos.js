const cheerio = require('cheerio');
const got = require('got');
const fs = require('fs');

// ESTA FUNCION DEVUELVE LA HORA DE CADA PARTIDO DE E-SPORT

got('https://www.oddschecker.com/football')
    .then(response => {

				const $ = cheerio.load(response.body);
				long_names = $('.fixtures-bet-name.beta-footnote').length;
				for(let i = 0; i < long_names; i++)
				{
					const vs = (i % 2 == 1) ? console.log('VS') : 'error';
					const salto = (i % 2 == 0) ? console.log('\n') : 'error';
					const name = $('.fixtures-bet-name.beta-footnote')[i].children[0].data;
					console.log(name);
				}
				console.log(long_names)
    })
    .catch(error => {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    });
