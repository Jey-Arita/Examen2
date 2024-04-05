const boton = document.getElementById('convert-btn');
const cantidad = document.getElementById('amount');
const resultado = document.getElementById('result-container')
let conversion = 0;

cargarEventos();

function cargarEventos() {
    boton.addEventListener('click', capturarMonto);
}

function capturarMonto() {
    const monto  = cantidad.value;
    let primerDivisa = capturarPrimerDivisa();
    let segundaDivisa = capturarSegundaDivisa();
    console.log(monto);
    console.log(primerDivisa);
    console.log(segundaDivisa);


    switch (primerDivisa) {
        case 'usd':
            switch (segundaDivisa) {
                case 'eur':
                    conversion = monto * 0.92; 
                    break;
                
                case 'usd':
                    conversion = monto; 
                    break;

                case 'gbp':
                    conversion = monto * 0.79; 
                    break;
            }
            break;

        case 'eur':
            switch (segundaDivisa) {
                case 'eur':
                    conversion = monto; 
                    break;
                
                case 'usd':
                    conversion = monto * 1.08; 
                    break;

                case 'gbp':
                    conversion = monto * 0.86; 
                    break;
            }
            break;

        case 'gbp':
            switch (segundaDivisa) {
                case 'eur':
                    conversion = monto * 1.17; 
                    break;
                
                case 'usd':
                    conversion = monto * 1.26; 
                    break;

                case 'gbp':
                    conversion = monto; 
                    break;
            }
            break;
    
        default:
    }

    mostraHtml();

}

function capturarPrimerDivisa() {
    const primerDivisa = document.getElementById('from');
    // console.log(primerDivisa.value);
    return primerDivisa.value;
}

function capturarSegundaDivisa() {
    const segundaDivisa = document.getElementById('to');
    // console.log(segundaDivisa.value);
    return segundaDivisa.value;
}

function mostraHtml() {
    resultado.textContent = conversion;
}