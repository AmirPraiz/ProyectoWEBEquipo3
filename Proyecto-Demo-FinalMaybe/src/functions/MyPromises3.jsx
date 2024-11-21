function MyPromises() {
    
    function fcnSumarLento( numero ){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    }
    
    let fcnSumarRapido = (numero)=>{
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                //resolve( numero + 1 );
                reject('Error en la promesa de la funcion Sumar Rapido');
                }, 1000);
        });
    }

    Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuestas:', respuesta);
    }).catch(error=>{
        console.log("Error en la respuesta de la promesa: ", error);
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