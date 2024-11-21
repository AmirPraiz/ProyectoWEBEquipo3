function MyFetchBlob() {
    let img1 = document.getElementById("IdImg1");
    let img2 = document.getElementById("IdImg2");

    //FIC: Fetch con codigo de promesa simplificada.
    fetch('images/imagen1.png')
    .then(resp => resp.blob())
    .then(image => {
        console.log(image);
        var imgPath1 = URL.createObjectURL(image);
        img1.src = imgPath1;
    });
    //FIC: Fetch con codigo de promesa normal.
    fetch('images/imagen2.png')
    .then(resp => {
        return resp.blob();
    })
    .then(image => {
        console.log(image);
        var imgPath2 = URL.createObjectURL(image);
        img2.src = imgPath2;
    });

    return (
        <>
            <div>
                <h1>
                    Programa para FETCH API POST
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchBlob;