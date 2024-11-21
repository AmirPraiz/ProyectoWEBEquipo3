import axios from "axios";

export function AddOneNegocio(Inventory) {
    
    console.log("<<EJECUTA>> API <<AddOneNegocio>> Requiere:", Inventory)
    return new Promise((resolve, reject) => {

      axios.post(`${import.meta.env.VITE_REST_API_ECOMMERCE}/prod-serv/9001/negocio`, Inventory)
        .then((response) => {
          console.log("<<RESPONSE>> AddOneNegocio", Inventory)
          const data = response.data;
          //console.log("<<RESPONSE>> DATA:", data);
          if (!data || data.error) {  
            console.error("<<ERROR>> <<NO>> se ejecuto la API <<AddOneNegocio>> de forma correcta", data);
            reject(data); 
          } else {
             resolve(data);
          }
        })
        .catch((error) => {
          console.error("<<ERROR>> en API <<AddOneNegocio>>", error);
          reject(error); 
        });     
    });
 }