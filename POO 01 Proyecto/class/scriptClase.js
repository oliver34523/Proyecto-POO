//Creacion de la clase
class Laptop {
    //Atributos
    marca = "Asus";
    ram = 32 + "GB";
    almacenamiento = 1 + "TB"

    //Métodos
    encender(){
        return "La laptop se esta encendiendo";
    }

    navegar(){
        return "Puedo navegar en internet usando Chrome";
    }

    
}


//Declarar una nueva laptop
const laptop1 = new Laptop;

// Imprimir atributos de la laptop

for (const [key, value] of Object.entries(laptop1)) {
    console.log(`${key}: ${value}`);
  }

//Imprimir métodos
console.log(laptop1.encender());

console.log(laptop1.navegar());



