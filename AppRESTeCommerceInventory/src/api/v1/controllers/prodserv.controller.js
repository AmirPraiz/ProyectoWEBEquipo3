//Importar la clase de Servicios de Productos y Servicios.
// y librería estándar de manejo de errores técnicos.

import * as ProdServServices from '../services/prodServ.service.js';
import boom from '@hapi/boom';

// obtener todos los productos/servicios (GET):
export const getProdServList = async (req, res, next) => {
    try {
      const prodServList = await ProdServServices.getProdServList();
      if (!prodServList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else {
        res.status(200).json(prodServList);
      }
    } catch (error) {
      next(error);
    }
  };

  export const getNegocio = async (req, res, next) => {
    const { negocio } = req.params
    try {
      const prodServList = await ProdServServices.getNegocio(negocio);
      if (!prodServList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else {
        res.status(200).json(prodServList);
      }
    } catch (error) {
      next(error);
    }
  };

//obtener un solo producto/servicio por su ID:
export const getProdServItem = async (req, res, next) => {
    try {
      const { id } = req.params; // Obtener el parámetro id
      const keyType = req.query.keyType || 'OK'; // Obtener el tipo de clave (por defecto 'OK')
      const prodServItem = await ProdServServices.getProdServItem(id, keyType);
  
      if (!prodServItem) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else {
        res.status(200).json(prodServItem);
      }
    } catch (error) {
      next(error);
    }
  };
  
  export const getAlmacen = async (req, res, next) => {
    try {
      const { almacen } = req.params; // Obtener el parámetro id
      const keyType = req.query.keyType || 'OK'; // Obtener el tipo de clave (por defecto 'OK')
      const prodServItem = await ProdServServices.getAlmacen(almacen, keyType);
  
      if (!prodServItem) {
        throw boom.notFound('No se encontro el almacen registrados.');
      } else {
        res.status(200).json(prodServItem);
      }
    } catch (error) {
      next(error);
    }
  };

  export const postAlmacen = async (req, res, next) => {
    try {
      const { negocio } = req.params;
      const nuevoAlmacen = req.body;
      const newProdServItem = await ProdServServices.postAlmacen(negocio ,nuevoAlmacen);
      if (!newProdServItem) {
        throw boom.badRequest('No se pudo crear el almacen.');
      } else if (newProdServItem) {
        res.status(201).json(newProdServItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  export const postNegocio = async (req, res, next) => {
    try {
      const { id } = req.params;
      const keyType = req.body;
      const newProdServItem = await ProdServServices.postNegocio(id ,keyType);
      if (!newProdServItem) {
        throw boom.badRequest('No se pudo crear el negocio.');
      } else if (newProdServItem) {
        res.status(201).json(newProdServItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  export const putCantidadActual = async (req, res, next) => {
    try {
    const { almacen } = req.params;
    const { CantidadActual } = req.body;

    const updatedProdServItem = await ProdServServices.putCantidadActual(almacen, CantidadActual );
    if (!updatedProdServItem) {
    throw boom.badRequest('No se pudo actualizar el ProdServ.');
    } else if (updatedProdServItem) {
    res.status(200).json(updatedProdServItem);
    }
    } catch (error) {
    next(error);
    }
    };


    export const putCantidadDisponible = async (req, res, next) => {
      try {
      const { almacen } = req.params;
      const { CantidadDisponible } = req.body;
  
      const updatedProdServItem = await ProdServServices.putCantidadDisponible(almacen, CantidadDisponible );
      if (!updatedProdServItem) {
      throw boom.badRequest('No se pudo actualizar el ProdServ.');
      } else if (updatedProdServItem) {
      res.status(200).json(updatedProdServItem);
      }
      } catch (error) {
      next(error);
      }
      };
  

      export const putCantidadApartada = async (req, res, next) => {
        try {
        const { almacen } = req.params;
        const { CantidadApartada } = req.body;
    
        const updatedProdServItem = await ProdServServices.putCantidadApartada(almacen, CantidadApartada );
        if (!updatedProdServItem) {
        throw boom.badRequest('No se pudo actualizar el ProdServ.');
        } else if (updatedProdServItem) {
        res.status(200).json(updatedProdServItem);
        }
        } catch (error) {
        next(error);
        }
        };

        export const getSerie = async (req, res, next) => {
          try {
            const { serie } = req.params;
            const prodServItem = await ProdServServices.getSerie(serie);
        
            if (!prodServItem) {
              throw boom.notFound('No se encontro la serie.');
            } else {
              res.status(200).json(prodServItem);
            }
          } catch (error) {
            next(error);
          }
        };

        export const getPlaca = async (req, res, next) => {
          try {
            const { serie } = req.params;
            const prodServItem = await ProdServServices.getPlaca(serie);
        
            if (!prodServItem) {
              throw boom.notFound('No se encontro la serie.');
            } else {
              res.status(200).json(prodServItem);
            }
          } catch (error) {
            next(error);
          }
        };

        export const postSerie = async (req, res, next) => {
          try {
            const { almacen } = req.params;
            const nuevaSerie = req.body;
            const newProdServItem = await ProdServServices.postSerie(almacen ,nuevaSerie);
            if (!newProdServItem) {
              throw boom.badRequest('No se pudo crear la serie.');
            } else if (newProdServItem) {
              res.status(201).json(newProdServItem);
            }
          } catch (error) {
            console.log(error);
            next(error);
          }
        };


  export const postProdServItem = async (req, res, next) => {
    try {
      const paProdServItem = req.body;
      const newProdServItem = await ProdServServices.postProdServItem(paProdServItem);
      if (!newProdServItem) {
        throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
      } else if (newProdServItem) {
        res.status(201).json(newProdServItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  export const putProdServItem = async (req, res, next) => {
    try {
    const { id } = req.params;
        console.log('FIC: controller id -> ', id);
    const paProdServItem = req.body;
        console.log('FIC: controller body -> ', paProdServItem);
    const updatedProdServItem = await ProdServServices.putProdServItem(id, paProdServItem );
    if (!updatedProdServItem) {
    throw boom.badRequest('No se pudo actualizar el ProdServ.');
    } else if (updatedProdServItem) {
    res.status(200).json(updatedProdServItem);
    }
    } catch (error) {
    next(error);
    }
    };

    export const deleteProdServItem = async (req, res, next) => {
      try {
        const { id } = req.params;
        const paProdServItem = req.body;
        const deletProdServItem = await ProdServServices.deleteProdServItem(id, paProdServItem);
        if (!deletProdServItem) {
          throw boom.badRequest('No se pudo borrar el Producto y/o Servicio.');
        } else if (deletProdServItem) {
          res.status(200).json(deletProdServItem);
        }
      } catch (error) {
        console.log(error);
        next(error);
      }
    };

  export default ProdServServices;