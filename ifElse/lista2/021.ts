function horarios(hora:number, minutos:number):void{
    const minutosEmHoras:number= 60
    const segundosEmMinutos:number= 60
    let horasParaMinutos:number = hora * minutosEmHoras
    console.log(horasParaMinutos)
    let tudoEmMinutos:number= minutos + horasParaMinutos
    console.log(tudoEmMinutos)
    let tudoEmSegundos:number= tudoEmMinutos* segundosEmMinutos
    console.log(tudoEmSegundos)
}
horarios(18, 30)