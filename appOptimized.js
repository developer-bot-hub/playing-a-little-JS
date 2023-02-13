class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("app desinstalada correctamente")
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("1.000","5 estrellas","900mb");
app2 = new App("10.000","4 estrellas","700mb");
app3 = new App("11.000","5 estrellas","800mb");
app4 = new App("12.000","3 estrellas","900mb");
app5 = new App("900","4.3 estrellas","1gb");
app6 = new App("13.000","2 estrellas","600mb");
app7 = new App("14.000","5 estrellas","900mb");

app.instalar();
app.abrir()
app.cerrar()
app.desinstalar();

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `)