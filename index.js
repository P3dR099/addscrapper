const cheerio = require('cheerio');
const got = require('got');
//const fs = require('fs');

// ESTA FUNCION DEVUELVE LA HORA DE CADA PARTIDO DE E-SPORT

got('https://www.oddschecker.com/e-sports')
    .then(response => {
		const $ = cheerio.load(response.body);
		const long_horarios = $(".time-digits.beta-callout.bold.betam-caption2").length;
		for(let i = 0; i < long_horarios; i++)
			console.log($(".time-digits.beta-callout.bold.betam-caption2")[i].children[0].data);
			console.log(long_horarios);
    })
    .catch(error => {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    });
