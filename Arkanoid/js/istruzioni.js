	var oggetti = new Array(0);

	function crealista() {
		var app = document.getElementsByTagName("DIV");
		for(var i=0 ; i < app.length; i++) {
			if((app[i].getAttribute("class")) == "oggetto") {
				oggetti[oggetti.length] = app[i];
		}   }
	}
	function anima(){
		crealista();
		oggetti.immagine = document.getElementById("imma");
		oggetti.indice = 0;
		oggetti.indice2 =0;
		oggetti.sin = document.getElementById("sin");
		oggetti.des = document.getElementById("des");
		document.onkeydown = controllo_comando;
	}
	function controllo_comando(e) {			
		e = (!e) ? window.event : e;
		var chi = (e.which != null) ? e.which : e.keyCode;
		if((chi == 37)&&(oggetti.indice > 0)) cambia_oggetto(-1);
		if((chi == 39)&&(oggetti.indice <3)) cambia_oggetto(1);//destra
		if(chi == 88)  window.location.href = './index.html';
    }
	
	function cambia_oggetto(x){
		console.log("indice"+oggetti.indice);
		if(((x == 1)&&((oggetti.indice <=3)))||((x == -1)&&((oggetti.indice >0 )))){
            oggetti[oggetti.indice2].style.visibility = "hidden";
            oggetti.indice2= oggetti.indice2+x;
            oggetti[oggetti.indice2].style.visibility = "visible";
          }
		oggetti.indice += x; 
		oggetti.immagine.src = "./immagini/saturnistru" + oggetti.indice + ".png";
		if (oggetti.indice == 0) oggetti.sin.style.visibility = "hidden"; else oggetti.sin.style.visibility = "visible";
		if (oggetti.indice == 3) oggetti.des.style.visibility = "hidden"; else oggetti.des.style.visibility = "visible";   
    }
