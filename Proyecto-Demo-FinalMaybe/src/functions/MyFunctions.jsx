function MyFunctions() {
    // function fcnSumarUno( numero ) {
    //    return numero + 1;
    // };
    
    function fcnSumarUno( numero, fcnResultadoCallBack ){
        setTimeout(function(){
          //return numero + 1; 
          fcnResultadoCallBack( numero + 1 );
        }, 800);
    }
    
    fcnSumarUno (5, function(nuevoValor1){
        fcnSumarUno (nuevoValor1, function(nuevoValor2){
            fcnSumarUno (nuevoValor2, function(nuevoValor3){
                console.log("Resultado:", nuevoValor3);
            });
        });
    });
    console.log("Programa de Funciones"); 
    //let Resultado = fcnSumarUno (5);
    //console.log(Resultado);
    return(
        <>
            <div>
                <h1>Programa de Funciones</h1>
            </div>
        </>
    );
   
};

export default MyFunctions