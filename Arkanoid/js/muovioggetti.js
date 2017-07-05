//variabili display
	var bordosup=450;var bordoinf=0;var bordodx=800;var bordosx=0;
//variabili muro
	var murosx=175;var murodx=625;var muroinf=230;var murosup=390;
//variabili pallina
	var spostx=4;var sposty=2;var pospallx=396;var pospally=60;var raxpall=4;var velpall=20;var mv;var latosup=0;
//variabili sbarra
	var xsbarra=355;var lungsbarra=90;var velsbarra=40;
//variabili generali
	var ingioco=0;

	function muovi_eff() {
		for (var i = 0; i <effetti.length; i++) {
			effetti[i].style.top = parseInt(effetti[i].style.top) + 1 + "px";
			controlla_eff(i);
        }	
	}
	
	function muovisbarra(e){
		e = (!e) ? window.event : e;
		var a = (e.which != null) ? e.which : e.keyCode;
		if(a==39 && xsbarra>=(bordodx-(lungsbarra)))document.getElementById("sbarra").style.left = (xsbarra-=velsbarra) + "px"; //blocco la sbarra per non andare oltre il limite destro
		if(a==37 && xsbarra<=bordosx) document.getElementById("sbarra").style.left = (xsbarra+=velsbarra) + "px" //blocco sbarra per non andare oltre limite sinistro
		if(ingioco==1&&a==32)return;
			switch(a){
				case 39: //destra
						if(ingioco==0)return;
						document.getElementById("sbarra").style.left = (xsbarra+=velsbarra) + "px";
						break;
				case 37: //sinistra
						if(ingioco==0)return;
						document.getElementById("sbarra").style.left = (xsbarra-=velsbarra) + "px";
						break;
				case 32:	
						mv=setInterval(function(){muovi();},velpall);
						ingioco=1;
						break;
				}
	}
	

	function controllapallina(){
		var limitesup=xsbarra+(lungsbarra);
		var limiteinf=xsbarra-(lungsbarra/2);
		var meta=50;
		var sconfitta=40;
		var pxi=pospallx-raxpall;
		var pxs=pospallx+raxpall;
		var hsb=60;
		var pys=pospally+raxpall;
		//console.log("pys:"+pys+",,,xsbarra:"+xsbarra+",,,limitesup:"+limitesup+",,,pxi"+pxi+",,,pxs"+pxs+"pospallx:"+pospallx+",,,,,,,,,,latobarra::::"+latobarra+",,,,meta"+meta+",,spostx"+spostx+",,,,,,,,,sposty"+sposty);
		var pyi=pospally-raxpall;
		if((pxi<limitesup && pxi>xsbarra)||(pxs>xsbarra && pxs<limitesup)){
		    if(pys<=hsb && pys>=meta && latosup==0){                 //limiteinf e sup sono il range della sbarra
				sposty=sposty*(-1);
				latosup=latosup+1;
			}
		}
		if(pospally+raxpall+sposty > bordosup ||(pospally-raxpall)+sposty<=bordoinf){	
			if((pospally-raxpall)+sposty<=bordoinf){
				vite-=1;
				if(vite==-1){//funzione fine gioco
					inviadati();
					clearInterval(mv);
					clearInterval(f);
				}
				var elem=document.getElementById("life");
				var elem1=document.createTextNode("Vite:"+ vite);
				elem.removeChild(elem.lastChild);
				elem.appendChild(elem1);
				clearInterval(mv);
				ingioco=0;
				latobarra=0;
				restart();
			}
		sposty=sposty*(-1);
		}	
	}

	function muovi(){
		if(pospally>=200 && pospallx>=170 && pospallx<=650){//controllo per eliminare mattonella del muro
			if(	latosup==1)	latosup=0;
			elimcas();
		}
		if(pospallx+raxpall+spostx> bordodx|| (pospallx-raxpall)+spostx < bordosx) spostx=spostx*(-1);
		controllapallina();//controllo per vedere se prende la sbarra o supera il limiteinf,sup in y
		document.getElementById("pallina").style.bottom=(pospally+=sposty)+"px";
		document.getElementById("pallina").style.left=(pospallx+=spostx)+"px";
	
	}