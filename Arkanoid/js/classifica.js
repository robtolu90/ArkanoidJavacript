	function anima () { 
		document.onkeydown = controllo_comando;
	}

	function controllo_comando(e){
		e = (!e) ? window.event : e;
		var chi = (e.which != null) ? e.which : e.keyCode;
		if(chi == 90) window.location.href = '../gioco.html';
		if(chi == 88) window.location.href = '../index.html';
    }
