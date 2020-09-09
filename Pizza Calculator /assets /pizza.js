//Jason Ronoastro
//Pizza Calculator. 09-10-2020.
//Da Vinci College. Software Development.

var smallPizza = prompt('Hoeveel small pizza wilt u?');//Het aantal small Pizza dat de gebruiker wilt bestellen.
    alert('Het aantal small pizza:'+' '+ Number(smallPizza));//Geeft een alert aan hoeveel small Pizza de gebruiker heeft besteld.
        const SMALLPRIZE = 2.50;//Prijs per small pizza.
              var totaleSmall = smallPizza * SMALLPRIZE;//Hier word uitgerekend het aantal small pizza keer de prijs.

var mediumPizza = prompt('Hoeveel medium pizza wilt u?');//Het aantal medium pizza dat de gebruiker wilt bestellen.
    alert('Het aantal medium pizza:'+' '+ Number(mediumPizza));//Geeft een alert aan hoeveel medium pizza de gebruiker heeft besteld.
        const MEDIUMPRIZE = 3.90;//Prijs per medium pizza.
            var totaleMedium = mediumPizza * MEDIUMPRIZE;//Hier word uitgerekend het aantal medium pizza keer de prijs.
           

var largePizza = prompt('Hoeveel large pizza wilt u bestellen?');//Het aantal large pizza dat de gebruiker wilt bestellen.
    alert('Het aantal latrge pizza:'+' '+Number(largePizza));//Geeft een alert aan hoeveel large pizza de gebruiker heeft besteld.
        const LARGEPRICE = 5.00;//Prijs per large pizza.
            var totaleLarge = largePizza * LARGEPRICE;//Hier word uitgerekend het aantal large pizza keer de prijs.

            //Hieronder word alle aantal pizza's weergegeven  op het beeldscherm nadat alles is besteld.
            document.write('Aantal small pizza:'+' '+smallPizza+'<br/>');
            document.write('Aantal medium pizza:'+' '+mediumPizza+'<br/>');
            document.write('Aantal large pizza:'+' '+largePizza+'<br/>');

        totalePrijs = totaleSmall + totaleMedium + totaleLarge;//Rekent uit hoeveel alles bij elkaar kost.
        document.write('Totale bedrag: €'+' '+totalePrijs);//Het totale bedrag word weergegeven op het scherm.