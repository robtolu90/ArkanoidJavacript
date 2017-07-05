	var effetti=new Array(0);
//variabili generali
	var	px=0;
	var	py=0;

	function casspec(u,s){
		for(var i=0;i<numcasspec;i++){
			if(poseffetti[i].posix==u && poseffetti[i].posiy==s){
				var pos=effetti.length;
				effetti[pos]=document.createElement("div");
				effetti[pos].setAttribute('class',"effetto");
				var imm=document.createElement("img");
				var t=Math.floor((4*Math.random())+1);
				imm.src="./immagini/saturn"+ t +".png";
				effetti[pos].style.top=(s*alt) +"px";
				effetti[pos].style.left=(u*larg) +"px";
				effetti[pos].style.width=larg+"px";
				effetti[pos].type=t;
				//effetti[pos].style.backgroundColor="red";
				effetti[pos].style.height=alt+"px";
				effetti[pos].appendChild(imm);
				document.getElementById("muro").appendChild(effetti[pos]);
			}
		}
	}

	function elimcas(){
		var id=20;//20 è un valore di default .Mi serve quando devo controllare se la cartella che elimino  è una casella rossa.Se id rimane a 20 vuol dire che non era rossa,se assume una altro valore era una cartella rossa
		var px,py;var xx;var yy;
		if(sposty>0&&spostx>0)ty=1;
		if(sposty>0&&spostx<0)ty=2;
		if(sposty<0&&spostx<0)ty=3;
		if(sposty<0&&spostx>0)ty=4;
		switch(ty){
			case 1:
				px=pospallx+raxpall;
				py=pospally+raxpall;
			break;
			case 2:
				px=pospallx-raxpall;
				py=pospally+raxpall;
			break;
			case 3:
				px=pospallx-raxpall;
				py=pospally-raxpall;
			break;
			case 4:
				px=pospallx+raxpall;
				py=pospally-raxpall;
			break;
		}	
		for(var i=0;i<7;i++){
			for(var j=0;j<10;j++){
				mx=muro[i][j].posx+larg;
				my=muro[i][j].posy-alt;
				if(!(px<=muro[i][j].posx || px>=mx || py<=my || py>=muro[i][j].posy)){
					if(muro[i][j].pres==1){
						xx=j;
						yy=i;
						console.log("hai preso la mattonella "+yy+"::"+xx);
						for(var h=0;h<numcasfort;h++){
							if(forti[h].posfy==i && forti[h].posfx==j){
							id=i;
							}
						}
						if((id==20) || (id!=20 && forti[id].colp==1)){
							var togli = document.getElementById("mat"+(i)+(j)).parentNode.removeChild(document.getElementById("mat"+(i)+(j)));
							aggiornapunti();
						var t,q;
						t=Math.floor((muro[i][j].posx-murosx)/larg);
						q=Math.floor((murosup-muro[i][j].posy)/alt);
						casspec(t,q);
						muro[i][j].pres=0;
						prevy=py-sposty;
						prevx=px-spostx;
						if(ty==1)prevx=prevx+(3);
						if((prevx >= mx || prevx <=muro[i][j].posx) && prevy >= my && prevy <= muro[i][j].posy){
							spostx=spostx*(-1);
						} 
						else {
							sposty=sposty*(-1);
						}
						break;
						}
				else{
					if(id!=20)forti[id].colp=forti[id].colp-1;
					prevy=py-sposty;
					prevx=px-spostx;
					if(ty==1)prevx=prevx+(3);
					
					if((prevx >= mx || prevx <=muro[yy][xx].posx) && prevy >= my && prevy <= muro[yy][xx].posy){
						spostx=spostx*(-1);
					} 
					else {
						sposty=sposty*(-1);
					}
				}
			}
		}
	}
}
}