//1 piedra, 2 papel, 3 tijera
let jugador = 0
let pc = 2
jugador = prompt("Escoge: 1 para piedra, 2 para papel, 3 para tijera")
//alert("Elegistes " + jugador)
if (jugador == 1) {
    alert("Elejistes Piedra")
} else if (jugador == 2) {
    alert("Elejistes Papel")
} else if (jugador == 3) {
    alert("Elejistes Tijera")
} else {
    alert("Por Favor ingresa un numero correcto")
}