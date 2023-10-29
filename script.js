//1 piedra, 2 papel, 3 tijera
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra"
    } else if (jugada == 2) {
        resultado = "Papel"
    } else if (jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "Por Favor ingresa un numero correcto"
    }
    return resultado
}
let jugador = 0
let min = 1
let max = 3
let pc = aleatorio(1, 3)
jugador = prompt("Escoge: 1 para piedra, 2 para papel, 3 para tijera")
alert ("Elegistes: " + eleccion(jugador))
alert ("PC elegio: " + eleccion(pc))
//comienzo del juego
if (pc == jugador) {
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