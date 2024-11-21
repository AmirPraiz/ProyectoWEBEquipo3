function MyObjects() {
    const persona = {
        nombre: 'Amir',
        edad: 20,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            direccion: 'Conocido No. 533'
        }
    };

    console.log("JSON Person:", JSON.stringify(persona, null, 2))
    return (
        <>
            <div>
                <h1>
                    Programa de Objectos Literales
                </h1>
                <h2>
                    <code> 
                        <pre> 
                            {/*JSON.stringify(persona)*/} 
                            {JSON.stringify(persona, null, 2)} 
                        </pre> 
                    </code> 
                </h2>
            </div>
       
        </>
    );
};
export default MyObjects;