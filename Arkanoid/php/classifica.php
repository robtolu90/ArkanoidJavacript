<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html lang="it">
	<head>
		<title> ARKANOID CLASSIFICA </title>
		<link rel="stylesheet" href="../css/classifica.css" type="text/css">
	
	</head>

	<body onload="anima()" class="back">
		<div class="blocco">
			<div class="titolo"> <p style="text-align:center;">CLASSIFICA ARKANOID </p></div>
			<table>
				<tbody>
					<?php
					$nomeHost = "localhost";
					$nomeUtente = "root";
					$password = "";
					$nomeDb = "classificaark";
					$connessione = new mysqli ($nomeHost, $nomeUtente, $password); 
					if ($connessione->connect_error) {
						die('Connect Error (' . $connessione->connect_errno . ') ' .$connessione->connect_error);
					}
					do{
						$db_selected = $connessione->select_db($nomeDb);
						if(!$db_selected){
							$db_create = "CREATE DATABASE IF NOT EXISTS classificaark;";
							$result = $connessione->query($db_create);
						}
					}
					while(!$db_selected);
					$query = "CREATE  TABLE IF NOT EXISTS classifica ( `idClassifica` INT NOT NULL AUTO_INCREMENT ,`Nome` varchar(10) NOT NULL DEFAULT 'xxx',  `Punteggio` INT UNSIGNED NOT NULL, PRIMARY KEY (`idClassifica`) ) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
					$risultato = $connessione->query($query);
					$query = "SELECT * FROM classifica ORDER BY punteggio DESC LIMIT 10";
					$risultato = $connessione->query($query);
					if (!$risultato) {
			             echo "Fallimento nell'esecuzione della query: ".mysql_error();
						exit;
					}
					if ($risultato->num_rows != 0) {							                 
					?>
					<table id= "tabella">
						<tr>
							<th></th><th>Giocatore</th><th>Punteggio</th>
						</tr>
						<?php
							$i=1;
							while ($riga = $risultato->fetch_assoc()) {?>
								<tr>
									<td><?php echo $i ?></td>
									<td><?php echo $riga['Nome']?></td>
									<td><?php echo $riga['Punteggio']?></td>
								</tr>
								<?php	
								$i++;
							}
						?>				
				</table>	
				<?php }
				else{ 
					echo "Classifica vuota";} 
					$risultato->free_result();
					$connessione->close();
				?>
			</p>
        </div>
		<p class="indicazionicl">*Premi X per ritornare al menu principale, Z per giocare una nuova partita</p>
		<script  type="text/javascript" src="../js/classifica.js"></script>
	</body>
</html>
