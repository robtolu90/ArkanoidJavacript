 //FUNZIONI DI CREAZIONE -----------------------------------------------------------------------------------
 
	function init(){
		crea();
		crea1();
		crecasellespeciali();
		crecaselleforti();
		modifica();
		creadatipartita()
		f=setInterval(function(){muovi_eff();},veleffetti);
		document.onkeydown = muovisbarra;
	}
//FUNZIONI AGGIORNA GIOCO
	function aggiornapunti(){
		punteggio+=1;
		if(punteggio==70){
			inviadati1();
			clearInterval(mv);
			clearInterval(f);
		}
		var elem=document.getElementById("punteggioo");
		var elem1=document.createTextNode("Punteggio:"+ punteggio);
		elem.removeChild(elem.lastChild);
		elem.appendChild(elem1);
	}	
	function restart(){
		clearInterval(mv);
		pospally=60;
		pospallx=396;
		xsbarra=355;
		document.getElementById("pallina").style.bottom=pospally + "px";
		document.getElementById("pallina").style.left=pospallx + "px";
		document.getElementById("sbarra").style.left =xsbarra + "px"
		clearInterval(mv);
	}
//FUNZIONE  INVIA DATI-----------------------------------------------------------------------------------------
	function inviadati1(){
		var f = document.createElement("form");
		f.className = 'formcl';
		f.method = "post"; 
		f.action="invia.php";
		var tit = document.createElement("p");
		tit.setAttribute("class","titolo2");
		tit.appendChild(document.createTextNode("Hai vinto"));
		var test = document.createElement("p");
		test.setAttribute("class",'tcentrato');
		test.appendChild(document.createTextNode("Hai vinto, hai totalizzato " + punteggio + " punti"));
		var contenitore = document.createElement("div");
        var input = document.createElement("input");
        contenitore.appendChild(input);
        input.id = "testonome";
        input.name = 'nome';
        input.type = 'text';
        input.className = 'centrato';
		input.maxLength="10";
		var input1 = document.createElement("input");
		input1.name = 'punteggio';
		input1.type = 'hidden';
		input1.value = punteggio;
		contenitore.appendChild(input1);
		var p = document.createElement("p");
        p.setAttribute("id","indicazionifin");
		var te = document.createTextNode("Inserisci un nome di massimo 10 caratteri,poi premi INVIO per inserirti in classifica");
        p.appendChild(te);
		p.style.fontSize="13px";
		f.appendChild(tit);
		f.appendChild(test);
        f.appendChild(contenitore);
        f.appendChild(p);
		document.getElementById("display").appendChild(f);
		input.focus();
		f.onsubmit = convalida;
    }

	
	
	
	
	
	
	function inviadati(){
		var f = document.createElement("form");
		f.className = 'formcl';
		f.method = "post"; 
		f.action="invia.php";
		var tit = document.createElement("p");
		tit.setAttribute("class","titolo2");
		tit.appendChild(document.createTextNode("Game Over"));
		var test = document.createElement("p");
		test.setAttribute("class",'tcentrato');
		test.appendChild(document.createTextNode("Hai perso, hai totalizzato " + punteggio + " punti"));
		var contenitore = document.createElement("div");
        var input = document.createElement("input");
        contenitore.appendChild(input);
        input.id = "testonome";
        input.name = 'nome';
        input.type = 'text';
        input.className = 'centrato';
		input.maxLength="10";
		var input1 = document.createElement("input");
		input1.name = 'punteggio';
		input1.type = 'hidden';
		input1.value = punteggio;
		contenitore.appendChild(input1);
		var p = document.createElement("p");
        p.setAttribute("id","indicazionifin");
		var te = document.createTextNode("Inserisci un nome di massimo 10 caratteri,poi premi INVIO per inserirti in classifica");
        p.appendChild(te);
		p.style.fontSize="13px";
		f.appendChild(tit);
		f.appendChild(test);
        f.appendChild(contenitore);
        f.appendChild(p);
		document.getElementById("display").appendChild(f);
		input.focus();
		f.onsubmit = convalida;
    }

	
	function convalida(){ 
		var t= document.getElementById("testonome").value;
		var myregexp = /^[a-zA-Z0-9]+$/;
		if((t == "") || (t == "undefined")||(t.length >10)||(myregexp.test(t) == false)){ 
			p=document.getElementById("testonome");
			p.style.background="red";	
			p.title="Immissione non consentita,puoi inserire lettere e numeri per un max di 10 caratteri.";				
			document.forms[0].reset();
		return false;
		}  
		else{ 
			p=document.getElementById("testonome");
			p.style.background="white";
			document.forms[0].action = "invia.php";
			document.forms[0].submit();
		}
	}

