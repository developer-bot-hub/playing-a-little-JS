class Animal {
    constructor(especie,edad,color){
        this.sp = especie;
        this.age = edad;
        this.colour = color;
        this.info = `Soy ${this.sp}, tengo ${this.age} años y soy de color ${this.colour}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
    ladrar(){
        if (this.sp == "perro") {
            document.write("WAW <br>");
        } else {
            document.write("No puede ladrar, ya que es un " + this.sp + "<br>")
        }
    }
}
class Perro extends Animal {
    constructor(especie,edad,color,caracter,raza){
            super(especie,edad,color)
            this.car = caracter;
            this.raza = null;
    }
    verData(){
        if (this.sp == "perro") {
            document.write(`Soy ${this.sp}, tengo ${this.age} años y soy de color ${this.colour}, me caracterizo por ser ${this.car} y `);
        } else {
            document.write("<br>")
        }
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");
const perro = new Perro("perro",5,"marron","guardian");
perro.verInfo();
gato.verInfo();
pajaro.verInfo();
perro.ladrar();
gato.ladrar();
pajaro.ladrar();
perro.verData();
perro.setRaza = "doberman";
document.write(perro.getRaza)