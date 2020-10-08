/*
Cotizacion
    Variable:
        ventana:
            ancho
            altura
            tipo
        tela:
            color
            formaTela
            precio
            paños
        Instalacion:


    bases:

        >>si la las medidas son 200 x 220
                hallamos cantidad de paños primero:
                    cada 75cm de tela es = 1 paño
                    Entonces: ancho(200) / 75 = 2.7 > si redondeamos seria 3 paños
                                ancho/75cm=paños
        formaTela = normal
        formaTela = dobleAncho
        si es normal {
            (altura + 30) * paños = CantidadTela 
        }si es doble ancho{
            (ancho * 2) + 50 = cantidadTela
        }
        >>hallamos precio de tela
            cantidadTela * precio = costoTela



        
*/


//funciones para calculos
let hallarPaños = (ancho)=>{
    let paños
    paños = ancho / 75
    alert(Math.round(paños))
}
let hallarTela = (ancho, altura)=>{
    let costoTela 
    let formaTela = "normal"

    if (formaTela == "normal") {
        costoTela = ((altura + 30) * hallarPaños())/100
        alert(costoTela)
        alert(paños)
    }
}


//funciones de recibir datos por teclado
let inicia = () =>{
    //recibo valores del teclado
    let valor1 = Number(document.getElementById('ancho-ventana').value)//ancho
    let valor2 = Number(document.getElementById('altura-ventana').value)//alto

    //paso las funciones
    //falta pasar el resultado de la funcion hallarPaños a la funcion hallarTela
    //posible solucion almacenar el resultado en una variable y pasar esa variable en a la funcion hallarTela
    hallarTela(valor1, valor2)
    hallarPaños(valor1)
}

//funcion de lanzamiento
let buton1 = document.querySelector('#button_inicia')
buton1.addEventListener('click', inicia)




