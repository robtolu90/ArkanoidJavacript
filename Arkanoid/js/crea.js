//variabili muro
	var murosx=175;var murodx=625;var muroinf=230;var murosup=390;
//variabili mattonelle
	var larg=45;var alt=20;var numcasfort=15;var numcasspec=18;var muro=[];var forti=[];
//variabili generali
	var punteggio=0;
	var vite=1;
	function poseffetti(x,y){
		this.posix=x;
		this.posiy=y;
						//1=vel +;;;;2=vel-;3=lungh++;4=lungh-;;
	}
	function elem(x,y,p){
		this.posx=x;
		this.posy=y;
		this.pres=p;
	}
	function posforti(x,y,c){
		this.posfx=x;
		this.posfy=y;
		this.colp=c;
	}
	function crea1(){
		for(var i=0;i<7;i++){
			muro[i]=[];
				for(var j=0;j<10;j++){
					muro[i][j]=new elem(murosx+(j*larg),(murosup-(i*alt)),1);	
				}
		}
	}

	function crea(){         
		for(var i=0;i<7;i++){
			for(var j=0;j<10;j++){
				var elemento=document.createElement("div");
				elemento.setAttribute('class',"mattonella");
				elemento.setAttribute('id',"mat"+(i)+(j));
				elemento.style.top=(i*alt)+"px";
				elemento.style.left=(j*larg)+"px";
				document.getElementById("muro").appendChild(elemento);
			}
		}
	}

	function crecaselleforti(){
		for(var	i=0;i<numcasfort;i++){
			var y=Math.floor((6*Math.random()));
			var x=Math.floor((9*Math.random())+1);
			forti[i]=new posforti(x,y,2);
		//console.log(forti[i]);
	}
}
	function modifica(){
		for(var i=0;i<numcasfort;i++){
			fx=forti[i].posfx;
			fy=forti[i].posfy;
			p=document.getElementById("mat"+(fy)+(fx));
			p.style.backgroundColor="red";
		}	
	}
	function crecasellespeciali(){
		for(var	i=0;i<numcasspec;i++){
			var y=Math.floor((6*Math.random()));
			var x=Math.floor((9*Math.random())+1);
			poseffetti[i]=new poseffetti(x,y);
		}
	}
	function creadatipartita(){
		var elem=document.getElementById("punteggioo");
		var elem1=document.createTextNode("Punteggio:"+ punteggio);
		elem.appendChild(elem1);
		var elem2=document.getElementById("life");
		var elem3=document.createTextNode("Vite:"+ vite);
		elem2.appendChild(elem3);	
	}


