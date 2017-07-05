<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title> Arkanoid invia  dati </title>	
	</head>
	<body>         
		<p>
			<?php
				$nome = $_POST['nome'];
				$punteggio = $_POST['punteggio'];
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
				$query = "INSERT INTO classifica (nome,punteggio) VALUES ('$nome','$punteggio ')";
				$risultato = $connessione->query($query);
				if (!$risultato) {
					echo "Fallimento nell'esecuzione della query: ".mysql_error();
					exit;
				}
				$connessione->close();
			?>  
		</p>
		<script type="text/javascript"> window.location.href = "./php/classifica.php" </script>
	</body>
</html>