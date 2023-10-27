//1 piedra, 2 papel, 3 tijera
let jugador = 0
let pc = 2
jugador = prompt("Escoge: 1 para piedra, 2 para papel, 3 para tijera")
//alert("Elegistes " + jugador)
//Area del Jugador
if (jugador == 1) {
    alert("Elejistes Piedra")
} else if (jugador == 2) {
    alert("Elejistes Papel")
} else if (jugador == 3) {
    alert("Elejistes Tijera")
} else {
    alert("Por Favor ingresa un numero correcto")
}
//Area de PC
if(pc == 1) {
    alert("PC elige Piedra")
} else if (pc == 2) {
    alert("PC elige papel")
} else if (pc == 3){
    alert("PC elige tijera")
}
//comienzo del juego
if(pc == jugador) {
    alert("Empate")
} else if (jugador == 1 && pc == 3) {
    alert("Ganastes")
} else if (jugador == 2 && pc == 1) {
    alert("Ganastes")
} else if (jugador == 3 && pc == 2) {
    alert("Ganastes")
} else {
    alert("perdistes")
}