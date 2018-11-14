
var totaalfris = 0;
var totaalbier = 0;
var totaalwijn = 0;
var totaalbitterbal8 = 0;
var totaalbitterbal16 = 0;

const FRISPRIJS = 150 / 100;
const BIERPRIJS = 220 / 100;
const WIJNPRIJS = 300 / 100;
const BITTERBAL8 = 400 / 100;
const BITTERBAL16 = 600 / 100;

function bestelling(drankje) {

	if(drankje == 'fris') {

		var fris = prompt('Hoeveel fris wilt u bestellen?');
		totaalfris = (totaalfris) + (fris);
		var drankje = prompt('Wat wilt u bestellen (fris, bier, wijn of snacks)?');
		bestelling(drankje);

	} else if(drankje == 'bier') {

		var bier = prompt('Hoeveel bier wilt u bestellen?');
		totaalbier = (totaalbier) + (bier);
		var drankje = prompt('Wat wilt u bestellen (fris, bier, wijn of snacks)?');
		bestelling(drankje);

	} else if(drankje == 'wijn') {
		var wijn = prompt('Hoeveel wijn wilt u bestellen?');
		totaalwijn = (totaalwijn) + (wijn);
		var drankje = prompt('Wat wilt u bestellen (fris, bier, wijn of snacks)?');
		bestelling(drankje);

	} else if(drankje == 'snacks') {
		var snacks = prompt('Hoeveel bitterballen wilt u bestellen (8 of 16)?')

		if (snacks == '8') {
			var bitterbalaantal8 = prompt('Hoeveel bordjes wilt u bestellen?');
			totaalbitterbal8 = (totaalbitterbal8) + (bitterbalaantal8);
			var drankje = prompt('Wat wilt u bestellen (fris, bier, wijn of snacks)?');
			bestelling(drankje);

		} else if(snacks == '16') {
			var bitterbalaantal16 = prompt('Hoeveel bordjes wilt u bestellen?');
			totaalbitterbal16 = (totaalbitterbal16) + (bitterbalaantal16);
			var drankje = prompt('Wat wilt u bestellen (fris, bier, wijn of snacks)?');
			bestelling(drankje);

		} else {
			alert('U kunt aleen 8 of 16 stuks kiezen. Uw keuze is niet toegevoegd aan uw bestelling.')
		}

	} else if(drankje == 'stop') {
		document.write("Uw bestelling:" + "</br>" + "Aantal fris besteld:" + '' + totaalfris);
		document.write("</br> Bedrag van 1 fris = " + '€' + FRISPRIJS);
		document.write("</br> Totale bedrag van uw fris: " + '€' + FRISPRIJS * totaalfris);
		var frisprijstotaal = totaalfris * FRISPRIJS;
		document.write('</br>');

		document.write("</br> Aantal bier besteld:" + '' + totaalbier);
		document.write("</br> Bedrag van 1 bier = " + '€' + BIERPRIJS);
		document.write("</br> Totale bedrag van uw bier: " + '€' + BIERPRIJS * totaalbier);
		var bierprijstotaal = totaalbier * BIERPRIJS;
		document.write('</br>');

		document.write("</br> Aantal wijn besteld:" + '' + totaalwijn);
		document.write("</br> Bedrag van 1 wijn = " + '€' + WIJNPRIJS);
		document.write("</br> Totale bedrag van uw wijn: " + '€' + WIJNPRIJS * totaalwijn);
		var wijnprijstotaal = totaalwijn * WIJNPRIJS;
		document.write('</br>')

		document.write("</br> Aantal bitterbalaantal8 besteld:" + '' + totaalbitterbal8);
		document.write("</br> Bedrag van 1 bitterbalaantal8 = " + '€' + BITTERBAL8);
		document.write("</br> Totale bedrag van uw bitterbalaantal8: " + '€' + BITTERBAL8 * totaalbitterbal8);
		var bitterbal8prijstotaal = totaalbitterbal8 * BITTERBAL8;
		document.write('</br>')

		document.write("</br> Aantal bitterbalaantal16 besteld:" + '' + totaalbitterbal16);
		document.write("</br> Bedrag van 1 bitterbalaantal16 = " + '€' + BITTERBAL16);
		document.write("</br> Totale bedrag van uw bitterbalaantal16: " + '€' + BITTERBAL16 * totaalbitterbal16);
		var bitterbal16prijstotaal = totaalbitterbal16 * BITTERBAL16;
		document.write('</br>')

		document.write("Totale bedrag van uw bestellingen = " + ' ' + "€" + ' ' + (frisprijstotaal + bierprijstotaal + wijnprijstotaal + bitterbal8prijstotaal + bitterbal16prijstotaal));
	} else {
		alert('Vanwegen een ongeldige invoer is uw bestelling niet toegevoegd.');
		var drankje = prompt('Wat wilt u bestellen (fris, bier, wijn of snacks)?');
		bestelling(drankje);
	}
}

var drankje = prompt('Wat wilt u bestellen (fris, bier, wijn of snacks)?');
bestelling(drankje);