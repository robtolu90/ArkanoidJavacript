	bordosup=490;bordoinf=0;bordodx=680;bordosx=0;
	pospally1=0;
	pospallx1=197;
	var bot= new Array;
	spostx1=2;
	sposty1=3;

	function inizializza() {	
		bot[0] = document.getElementById('gioca');
		bot[1] = document.getElementById('istruzioni');
		bot[2] = document.getElementById('classifica');
		bot.indice = 0;
	}

	function scegli() { 
		inizializza();
		document.onkeydown = controllo_comando;
		mv=setInterval(function(){muovi();},15);
	}

	function controllo_comando(e) {			
		e = (!e) ? window.event : e;
		var chi = (e.which != null) ? e.which : e.keyCode;
		if((chi == 40)&&(bot.indice < 2)) spostacursore(1);
		if((chi == 38)&&(bot.indice > 0)) spostacursore(-1);
		if(chi ==90){
		       switch (bot.indice) {
			         case 0:
			               window.location.href = './gioco.html';
					break;
					case 1:   
			              window.location.href = './istruzioni.html';
			     	break;
					case 2:
			              window.location.href = './php/classifica.php';
			     	break;
					default:
			     	break;
			    }
		}    
	}

	function spostacursore(x){
		bot[bot.indice].style.color = "orange";	
		bot[bot.indice].style.border = "none";	
		bot.indice = bot.indice +x;
		bot[bot.indice].style.color = "orange";	
		bot[bot.indice].style.border = "dotted";
	}
	function muovi(){
		if(pospallx1+spostx1> bordodx|| (pospallx1)+spostx1 < bordosx) spostx1=spostx1*(-1);
		if(pospally1+sposty1 > bordosup ||(pospally1)+sposty1<=bordoinf)sposty1=sposty1*(-1);
		document.getElementById("palla").style.bottom=(pospally1+=sposty1)+"px";
		document.getElementById("palla").style.left=(pospallx1+=spostx1)+"px";
	}