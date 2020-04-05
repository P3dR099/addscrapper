const cheerio = require('cheerio');
const got = require('got');
const fs = require('fs');


// ESTA FUNCION DEVUELVE LA HORA DE CADA PARTIDO DE E-SPORT

got('https://www.oddschecker.com/football')
    .then(response => {

			const $ = cheerio.load(response.body);
			const cuota_home = $('.participant-name')[0].children[0].children[0].data;
			const cuota_draw = $('.participant-name.participant-name-draw')[0].children[0].children[0].data;
			for (let i = 0;  i < 15; i++)
			{
				const salto = (i % 3 == 0) ? console.log('\n') : 'error';

				const cuota_away = $('.participant-name')[i].children[0].children[0].data;
				//console.log('HOME:'+ cuota_home + '  DRAW:' + cuota_draw);
				console.log(cuota_away);
				console.log(cuota_away.length)
			}

//			console.log($('.fixtures-bet-name.beta-footnote').length);
							//console.log(long_horarios);
							//fs.writeFileSync('index3.html', $);
 		})
    .catch(error => {
      console.log(error.response.body);
        //=> 'Internal server error ...'
    });
