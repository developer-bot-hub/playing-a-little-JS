let cantidad = prompt("¿Cuantos alumnos son?");
let matriculaTotal = [];
for (i = 0; i < cantidad; i++) {
      matriculaTotal[i] = [prompt("Nombre " + (i+1)),0];
}
const tomarAsistencia = (nombre,p)=>{
      let presencia = prompt(nombre);
      if (presencia == "p" || presencia == "P") {
            matriculaTotal[p][1]++;
      }
}
for (i = 0; i < 30; i++) {
      for (alumno in matriculaTotal) {
            tomarAsistencia(matriculaTotal[alumno][0],alumno);
      }
}
for (alumno in matriculaTotal) {
      let resultado = `${matriculaTotal[alumno][0]}:<br>
      _____Presentes: <b>${matriculaTotal[alumno][1]}</b> <br>
      _____Ausentes: <b>${30 - matriculaTotal[alumno][1]}</b>`;
      if (30 - matriculaTotal[alumno][1] > 18) {
            resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIA</b><br><br>";
      } else {
            resultado+= "<br><br>"
      }
      document.write(resultado)
}