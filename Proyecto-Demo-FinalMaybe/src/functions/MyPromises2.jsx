function MyPromises() {
    
    function fcnSumarLento( numero ){
        return new Promise(function(resolve, reject){
            if(numero >= 8 ){
                reject('Sumar Lento Fallo');
            }
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    }
    
    let fcnSumarRapido = (numero)=>{
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 300);
        });
    }

    /*fcnSumarLento(5)
    .then(Resultado=>{
        console.log('Resultado Lento:', Resultado);
    });
    fcnSumarRapido(10)
    .then(Resultado=>{
        console.log('Resultado Rapido:', Resultado);
    });*/

    let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, '¡Hola Mundo!'];

    Promise.all(arregloVarios)
    .then(Resultados =>{
        console.log('Resultados:', Resultados);
    }).catch(error =>{
        console.log("Error en todas las promesas: ", error);
    });

    console.log("Programa de Funciones"); 
    return(
        <>
            <div>
                <h1>Programa de Funciones Con Promesas</h1>
            </div>
        </>
    );
   
};

export default MyPromises