import axios from "axios";
export function getAllNegocio() {
    return new Promise((resolve, reject) => {
      axios.get(`${import.meta.env.VITE_REST_API_ECOMMERCE}/prod-serv/9001-000000000001`)
        .then((response) => {
          const data = response.data;

          if (!Array.isArray(data) || data.length === 0) {
            console.error("No se pudo realizar correctamente la petición <<getAllNegocio - Services>>", data);
            reject(data); // Rechaza la promesa con la respuesta si no fue exitosa
          }  else {
            const InventoriesData = data.flatMap(item => item.negocios); 
                    resolve(InventoriesData);
          }
        })
        .catch((error) => {
          console.error("Error en <<getAllNegocio - Services>>", error);
          reject(error); // Rechaza la promesa en caso de error
        });
    });
  }