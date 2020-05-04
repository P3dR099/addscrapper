const cheerio = require('cheerio');
//const got = require('got');
const colors = require('colors');
const axios = require('axios');

// MUESTRA CADA PARTIDO Y LA CUOTA DE VICTORIA, EMPATE Y DERROTA

axios.get('https://www.oddschecker.com/football')
	.then((response) => {
    if (response.status == 200) {
      const html = response.data;
		  const $ = cheerio.load(html);
		  //	const cuota_home = $('.participant-name')[0].children[0].children[0].data;
		  const long_names = $('.fixtures-bet-name.beta-footnote').length;
		  let arrCuotas = [];
		  let arrPartidos = [];
		  let arrTeam_local = [];
		  let arrTeam_visit = [];
		  let arrHome = [];
		  let arrDraw = [];
		  let arrAway = [];

  		/// FOR PARA PARRTIDOS
  		for(let i = 0; i < long_names; i++)
  		{

  			const name = $('.fixtures-bet-name.beta-footnote')[i].children[0].data;
        arrPartidos.push(name)
  			const d = (arrPartidos.length % 2 == 1) ? arrTeam_local.push(name) : 'error';
  			const e = (arrPartidos.length % 2 == 0) ? arrTeam_visit.push(name) : 'error';

      }
  		const cuota_length = $('.participant-name').find('.odds.beta-footnote.bold.add-to-bet-basket').length;
  		// FOR PARA CUOTAS
  		for (let i = 0; i < cuota_length; i++)
  		{
  			const cuota2 = $('.basket-add')[i].attribs['data-best-dig'] - 1;
  			const cuota = cuota2.toFixed(1);
  			arrCuotas.push(cuota);
  			const a = (arrCuotas.length % 3 == 1) ? arrHome.push(cuota) : 'error';
  			const b = (arrCuotas.length % 3 == 2) ? arrDraw.push(cuota) : 'error';
  			const c = (arrCuotas.length % 3 == 0) ? arrAway.push(cuota) : 'error';
  		}
  		for (let i = 0; i < arrTeam_local.length; i++)
  		{
  			console.log('Partido:'.gray + [i+1],arrTeam_local[i] + ' VS '.green + arrTeam_visit[i], '---------> '.yellow + 'HOME:'.blue+arrHome[i].red + ' ------- '.yellow + 'DRAW:'.blue +
  			arrDraw[i].red + ' -------- '.yellow + 'AWAY:'.blue+arrAway[i].red.padEnd(59) + '\n');
  		}
    }
  }, (error) => console.log(error) );
		//=> 'Internal server error ...'
