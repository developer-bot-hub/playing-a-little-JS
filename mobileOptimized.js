class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        `;
    }
}
class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}
celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
celular3 = new Celular("blanco","154g","5.9'","full hd","2GB");

celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`);

celular1 = new CelularAltaGama("rojo","150g","5'","4K","1GB","full hd");
celular2 = new CelularAltaGama("negro","155g","5.4'","4K","2GB","hd");

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
`);