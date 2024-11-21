function MyPromises() {
    
    function fcnSumarUno( numero ){
          var promesa = new Promise(function(resolve,reject){
            if (numero >= 7 ){
                reject('El numero es muy alto');
            }
            setTimeout(function(){
                resolve( numero + 1 );
            }, 800);
        });
        return promesa;
    }
    
    /*fcnSumarUno(5).then(nuevoNumero=>{
        console.log("Resultado:", nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
    });*/

    fcnSumarUno(5).then( fcnSumarUno)
        .then( fcnSumarUno)
        .then( nuevoNumero=>{
            console.log("Resultado:",nuevoNumero);
    }).catch(error =>{
        console.log('Error en la Promesa', error);
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