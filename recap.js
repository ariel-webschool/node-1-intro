/**
 * 1. Data Type (type de donnee)
 *		a. String	// "acbdh"
 *		b. Number	// 1 -> Integer (Entier), 1.2 -> Float (Flottant)
 *		c. Boolean	// false
 *		d. Object	// new Date()
 *		e. Array (List) // [1,2,3,4]
 *		f. Array (Tableau associatif) // {name: "Ariel", age: 34}
 *		g. Array (JSON) // {"name": "Ariel", "age": 34}
 *
 * 2. Variable
 * 		a. let
 * 		b. const
 * 		c. var
 * 
 * 3. Conditions
 * 
 * if
 * else
 * else if
 * 
 * 4. Functions
 * 
 * function main(param, param2) {
 * 	return param+param2
 * }
 * 
 * 5. Loop (Boucle)
 * 
 * while(/* condition *\/) {
 * 	  // instructions
 * }
 * 
 * for( let i = 0; i < 10; i++ ){ 
 * 	console.log(i)
 * }
 * 
 * var arr = { 
 * 	name: "Ariel",
 * 	age: 34
 * }
 * for( const k in arr) { // Pour tableau associatif
 * 	console.log(v) // name, age
 * }
 * 
 * 
 * var list = [1,2,3,4]
 * for( const k of arr) { // pour une liste
 * 	console.log(v) // 1,2,3,4
 * }
 * 
 * 6. Classe -> Objet (Oriente-Objet)
 * 
 *  
 * function Car(id,name) {
 * 		let _name = "Monsieur "+name;	// Private
 * 		this.id = "1"					// Public
 * 	
 * 		this.getName = function() {
 * 			return _name;	
 * 		}
 * 		this.setName = function(val) {
 * 	
 * 			_name = "Monsieur "+val
 * 			
 * 		}
 * }
 * 	
 * let c = new Car(1,"Ariel")
 * c.setName("Zeev")
 * console.log(c.getName());
 * 
 * 
 * let c = new Car(1,"Toyota")
 * c._name // Error
 * 
 */


function add(num1,num2) {
	return parseFloat(num1)+parseFloat(num2)
}


function sub(num1,num2) {
	return parseFloat(num1)-parseFloat(num2)
}


function mul(num1,num2) {
	return parseFloat(num1)*parseFloat(num2)
}


function div(num1,num2) {
	return parseFloat(num1)/parseFloat(num2)
}

console.log("Bienvenue, dans l'application de calcul:")

let num1=10
let num2=90
let sum_add = add(num1,num2)
let sum_div = div(num1,num2)


console.log("(Entier) Le resultat de: "+num1+"+"+num2+"="+sum_add);
console.log("(Flottant) Le resultat de: "+num1+"/"+num2+"="+sum_div);
