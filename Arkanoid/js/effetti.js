//variabili  effetti
	var veleffetti=10;
//numero di effetti dello stesso tipo  accumulati  
	var vp=0;
	var vm=0;
	var lp=0;
	var lm=0;

	function controlla_eff(x){
		var limitesup=xsbarra+lungsbarra;
		var largheff=40;
		var	limiteinf=xsbarra-largheff;
		var hsb=310;
		var	liminf=370;
		var efftop=parseInt(effetti[x].style.top);
		var effleft=parseInt(effetti[x].style.left)+murosx;
		if (effleft<=limitesup	&&	effleft>=limiteinf	&&	efftop>=hsb){
			elimina_effetto(x,1);
		}	
		if (efftop>=liminf)
			elimina_effetto(x,0);
	}

	function elimina_effetto(i, s) {
		var app=effetti[i];
		effetti.splice(i,1);
		if (s == 1){
			switch (app.type) {
				case 1:
					vp=vp+1;
					if(vp==1)
						accelera();
				break;
				case 2:   
					vm=vm+1;
					if(vm==1)
						rallenta();
				break;
				case 3:
					lp=lp+1;
					if(lp==1)
						allunga();
				break;
				case 4:
					lm=lm+1;
					if(lm==1)
						restringi();
				break;
				default:
				break;
			}    
			elimina(app);
		}
		else 
			elimina(app);
	}

	function elimina (x) {
		document.getElementById("muro").removeChild(x);
	}

	function accelera(){
		clearInterval(mv);
		velpall-=15;
		mv=setInterval(function(){muovi();},velpall);
		setTimeout("ripristina(1)",3500);
	}
	function rallenta() {
		clearInterval(mv);
		velpall+=15;
		mv=setInterval(function(){muovi();},velpall);
		setTimeout("ripristina(2)",7000);
	}

	function allunga(){
		document.getElementById("sbarra").style.width = (lungsbarra+=70) + "px";
		setTimeout("ripristina(3)",7000);			     
	}
	function restringi(){
		document.getElementById("sbarra").style.width = (lungsbarra-=70) + "px";
		setTimeout("ripristina(4)",7000);		
	}

	function ripristina(x){
		switch (x){
			case 1:
				vp=vp-1;
				if(vp==0){
					clearInterval(mv);
					velpall+=15;
					mv=setInterval(function(){muovi();},velpall);
				}
				else{
					clearInterval(mv);
					velpall+=15;
					accelera()
				}
			break;
			case 2:
				vm=vm-1;
				if(vm==0){
					clearInterval(mv);
					velpall-=15;
					mv=setInterval(function(){muovi();},velpall);
				}
				else{
					clearInterval(mv);
					velpall-=15;
					rallenta();
				}
			break;
			case 3:
				lp=lp-1;
				if(lp==0){
					document.getElementById("sbarra").style.width = (lungsbarra-=70) + "px";
				}
				else{
					document.getElementById("sbarra").style.width = (lungsbarra-=70) + "px";
					allunga();
				}
			break;
			case 4:
				lm=lm-1;
				if(lm==0){
					document.getElementById("sbarra").style.width = (lungsbarra+=70) + "px";
				}
				else{
					document.getElementById("sbarra").style.width = (lungsbarra+=70) + "px";
					restringi();
				}
			break;
		}
	}	