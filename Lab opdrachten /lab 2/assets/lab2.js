//Jason Ronoastro
//Lab 2. 08-09-2020
//Da Vinci College. Software Development.
 
const VRAAG = 'Vul de volgende 3 vragen in';
alert(VRAAG);


//Hier onder staat de code dat de gebruiker door middel van 3 promps zijn voornaam,achternaam,leeftijd kan invullen.
var voornaam = prompt('Type hier uw voornaam in.');//Voornaam.
var achternaam = prompt('Type hier uw achternaam in');//Achternaam.
var leeftijd = prompt('Type hier uw leeftijd in');//Leeftijd. 

//Door middel van de document.write komt alles op te zien op het beelscherm.
document.write(voornaam ,'<br/>', achternaam ,'<br/>',  leeftijd);