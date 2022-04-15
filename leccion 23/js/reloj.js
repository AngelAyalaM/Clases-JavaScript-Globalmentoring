const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formaHora(fecha.getHours());
    let min = formaHora(fecha.getMinutes());
    let seg = formaHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses =['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'jue', 'Vie', 'Sáb'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formaHora = (hora)=>{
    if (hora <  10) hora = '0' + hora;
    return hora;   

}

setInterval(mostrarReloj, 1000); 