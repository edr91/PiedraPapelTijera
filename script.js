//1 piedra, 2 papel, 3 tijera
let jugador = 0
let min = 1
let max = 3
let pc = Math.floor(Math.random() * (max - min + 1) + min)
jugador = prompt("Escoge: 1 para piedra, 2 para papel, 3 para tijera")
//Area del Jugador
if (jugador == 1) {
    alert("Elegistes Piedra")
} else if (jugador == 2) {
    alert("Elegistes Papel")
} else if (jugador == 3) {
    alert("Elegistes Tijera")
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