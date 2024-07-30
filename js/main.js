//Registro de gastos mensuales//
let gastosMensuales = [];
let categoriaGastoAgregado;
let montoAgregado;


do {
categoriaGastoAgregado = prompt("Ingresá la CATEGORÍA que queres registrar. Para salir, escribí \"salir\"");

if (categoriaGastoAgregado.toLocaleLowerCase() !== "salir") {
    montoAgregado = parseInt(prompt("Ingrese el monto de ese gasto que querés registrar."));

    let gastoAgregado = {
        categoria: categoriaGastoAgregado,
        monto: montoAgregado
    }
    gastosMensuales.push(gastoAgregado);
}

} while (categoriaGastoAgregado.toLocaleLowerCase() !== "salir");


function calcularGastos() {
    let total = gastosMensuales.reduce((acc, gasto)=> acc + gasto.monto, 0);
    console.log(total);
    return total
    
    

}


console.log(gastosMensuales)
calcularGastos();