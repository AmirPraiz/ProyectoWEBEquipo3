function MyDataTypes() {
    let IdNombre = 'Frank';
    
    IdNombre = 706;

    const Nombre = 'Amir';
    const Apellidos = 'Praiz Cruz';
    const NumControl = 21400749;
    const NumControl2 = 21400750;
    const FicFechaReg = new Date();
    let FicExperiencia = 20;
    let FicActivo = true;
    let Pasatiempos = ['futbol', 'squash', 'leer', 'series y peliculas'];

    let Libros = [];
    Libros.push(1533);
    Libros.push(true);
    Libros.push("El Principito");

    console.log("IdNombre:", IdNombre);
    console.log("Nombre:", Nombre);
    console.log("Apellidos:", Apellidos);
    console.log("NumControl:", NumControl);
    console.log("NumControl2:", NumControl2);
    console.log("Fecha:", FicFechaReg);
    console.log("Experiencia:", FicExperiencia);
    console.log("Activo:", FicActivo);
    console.log("Pasatiempos:", Pasatiempos);
    console.log("Libros:", Libros);

    return (
        /*<>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                <h1>
                    {IdNombre}
                </h1>
            </div>
       
        </>*/
            <>
                <div>
                    <h1>
                        Programa para conocer diferentes Tipos de de Datos
                    </h1>
                    <h2>
                                Alias: {IdNombre}<br/>
                                Nombre: {Nombre},<br/>
                                Apellidos: {Apellidos},<br/>
                                No. Control: {NumControl},<br/>
                                No. Control 2: {NumControl2},<br/>
                                Fecha de Registro: {FicFechaReg.toString()},<br/>
                                Años de experiencia: {FicExperiencia},<br/>
                                Estatus: {(FicActivo) ? 'Activo' : 'No Activo'}, <br/>
                                Pasatiempos: {Pasatiempos}, <br/>
                                Libros: {Libros[0]},   
                              {(Libros[1]) ? 'Activo' : 'No Activo'},
                              {Libros[2]}
                    </h2>
                </div>
           
            </>
        );
};
export default MyDataTypes; 