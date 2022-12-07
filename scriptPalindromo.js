
function checkPalindromo(cadena) {
		// convierto todo a minúsculas reemplazo acentos y elimino espacios

		var cadena = cadena.toLowerCase().replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o")
				.replace("ú", "u").replace(" ", "").replace(".", "").replace(",", "").replace(" ", "");
		// revisar, para 	"Arriba la birra" tuve que agregar de nuevo	.replace(" ", "") porque borraba solo 1 espacio

		// doy vuelta la cadena y si es igual a la original, entonces es palíndromo
		
		//separo 
		var separoCadena = cadena.split("");
		//invierto
		var invertirArreglo = separoCadena.reverse();
		// lo vuelvo a unir
		var unirArreglo = invertirArreglo.join("");

		// resultado de la función
		return unirArreglo == cadena;

		/*return
		if (unirArreglo == cadena){	
			console.log("Es palíndromo! Bien!");
		} else {
			console.log("Nope");
		}*/
			
		
    }
    
console.log(checkPalindromo("Arriba la birra"));