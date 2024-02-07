"use strict";
function horarios(hora, minutos) {
    const minutosEmHoras = 60;
    const segundosEmMinutos = 60;
    let horasParaMinutos = hora * minutosEmHoras;
    console.log(horasParaMinutos);
    let tudoEmMinutos = minutos + horasParaMinutos;
    console.log(tudoEmMinutos);
    let tudoEmSegundos = tudoEmMinutos * segundosEmMinutos;
    console.log(tudoEmSegundos);
}
horarios(18, 30);
