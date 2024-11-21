function MyFetchsAPIs() {
    function fcnXMLHttpRequest(){
    console.log("XMLHttpRequest");
    var request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users', true );
    request.send(null);
    return new Promise(function(resolve, reject){

    request.onreadystatechange = function( state ){

        if (request.readyState === 4) {
            var resp = request.response;
            var respObj = JSON.parse(resp);
            //console.log(respObj);
            //console.log(respObj.page);
            //console.log(respObj.data);
            resolve(respObj.data);
        }

    }
});
};  

function fcnFetchRequest(){
    console.log("GET API by fetch");
    fetch('https://reqres.in/api/users').then(resp =>
        resp.json()).then(respObj => {
            //console.log(respObj);
            //console.log(respObj.page);
            //console.log(respObj.per_page);
            console.log("response Fetch:",respObj.data);
    });
};

fcnFetchRequest();

fcnXMLHttpRequest().then (response=> {
        console.log('Response XMLHttp:', response);
  });
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchsAPIs;