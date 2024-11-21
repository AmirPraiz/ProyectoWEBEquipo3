//Commerce
import ProdServ from '../models/ProdServ.js';
import boom from '@hapi/boom';

import mongoose from 'mongoose';

// GET PRODUCTS AND SERVICES LIST
export const getProdServItem = async (id, keyType) => {
    let prodServItem;
   
    try {
      if (keyType === 'OK') {
        prodServItem = await ProdServ.findOne({
        IdProdServOK: id,
        });
      } else if (keyType === 'BK') {
          prodServItem = await ProdServ.findOne({
          IdProdServBK: id,
        });
      }
      return(prodServItem);
    } catch (error) {
      throw boom.internal(error);
    }
  };


  //Get para obtener la informacion de un almacen especifico
  export const getAlmacen = async (almacen, keyType) => {
    let prodServItem;
   
    try {
      if (keyType === 'OK') {
        prodServItem = await ProdServ.findOne({
          'negocios.almacenes.IdAlmacenOK': almacen,
        });
      } 
      const almacenInfo = prodServItem.negocios
      .flatMap(negocio => negocio.almacenes)
      .find(almacenObj => almacenObj.IdAlmacenOK === almacen);
      return(almacenInfo);
    } catch (error) {
      throw boom.internal(error);
    }
  };

  export const getNegocio = async (negocio) => {
    let prodServItem;
   
    try {
        prodServItem = await ProdServ.findOne({
          'negocios.IdNegocioOK': negocio,
        });
      return(prodServItem.negocios);
    } catch (error) {
      throw boom.internal(error);
    }
  };

  // Post para añadir un nuevo almacen en un negocio especifico
  export const postAlmacen = async (negocio, nuevoAlmacen) => {
    try {
      const prodServItem = await ProdServ.findOneAndUpdate(
        { 'negocios.IdNegocioOK': negocio },
        { $push: { 'negocios.$.almacenes': nuevoAlmacen } },
        { new: true }
      );
    return prodServItem;
    } catch (error) {
    throw error;
    }
  };

  // Post para añadir un nuevo negocio
  export const postNegocio = async (id, keyType) => {
    try {
      const prodServItem = await ProdServ.findOneAndUpdate(
        { 'IdInstitutoOK': id },
        { $push: { 'negocios': keyType } },
        { new: true }
      );
    return prodServItem;
    } catch (error) {
    throw error;
    }
  };

  //Put para cambiar la cantidad actual en un almacen
  export const putCantidadActual = async (almacen, CantidadAct) => {
    try {
    return await ProdServ.findOneAndUpdate({ 'negocios.almacenes.IdAlmacenOK': almacen }, 
      { $set: { 'negocios.$[].almacenes.$[alm].CantidadActual': CantidadAct } },
      {
        new: true,
        arrayFilters: [{ 'alm.IdAlmacenOK': almacen }]
    });
    } catch (error) {
    throw boom.badImplementation(error);
    }
  };

    //Put para cambiar la cantidad Disponible en un almacen
  export const putCantidadDisponible = async (almacen, CantidadDisp) => {
    try {
    return await ProdServ.findOneAndUpdate({ 'negocios.almacenes.IdAlmacenOK': almacen }, 
      { $set: { 'negocios.$[].almacenes.$[alm].CantidadDisponible': CantidadDisp } },
      {
        new: true,
        arrayFilters: [{ 'alm.IdAlmacenOK': almacen }]
    });
    } catch (error) {
    throw boom.badImplementation(error);
    }
  };


    //Put para cambiar la cantidad Apartada en un almacen
  export const putCantidadApartada = async (almacen, CantidadApart) => {
    try {
    return await ProdServ.findOneAndUpdate({ 'negocios.almacenes.IdAlmacenOK': almacen }, 
      { $set: { 'negocios.$[].almacenes.$[alm].CantidadApartada': CantidadApart } },
      {
        new: true,
        arrayFilters: [{ 'alm.IdAlmacenOK': almacen }]
    });
    } catch (error) {
    throw boom.badImplementation(error);
    }
  };

  //Get para obtener una serie
  export const getSerie = async (serie) => {
    let prodServItem;
   
    try {
        prodServItem = await ProdServ.findOne({
          'negocios.almacenes.series.Serie': serie,
        });
        
        const serieInfo = prodServItem.negocios
        .flatMap(negocio => negocio.almacenes)
        .flatMap(almacen => almacen.series)
        .find(serieO => serieO.Serie === serie);
      return(serieInfo);
    } catch (error) {
      throw boom.internal(error);
    }
  };


  export const getPlaca = async (serie) => {
    let prodServItem;
   
    try {
        prodServItem = await ProdServ.findOne({
          'negocios.almacenes.series.Serie': serie,
        });
        
        const placa = prodServItem.negocios
        .flatMap(negocio => negocio.almacenes)
        .flatMap(almacen => almacen.series)
        .find(serieO => serieO.Serie === serie)?.Placa;
      return(placa);
    } catch (error) {
      throw boom.internal(error);
    }
  };

  export const postSerie = async (almacen, nuevaSerie) => {
    try {
      const prodServItem = await ProdServ.findOneAndUpdate(
        { 'negocios.almacenes.IdAlmacenOK': almacen },
        { $push: { 'negocios.$[].almacenes.$[almacen].series': nuevaSerie } },
        {
          new: true,
          arrayFilters: [{ 'almacen.IdAlmacenOK': almacen }]
        }
      );
  
      return prodServItem;
    } catch (error) {
      throw boom.internal(error.message);
    }
  };
  






  export const getProdServList = async (keyType) => {
    let prodServList;
    
    try {
        // Validate keyType and construct the query dynamically
        let query = {};
        if (keyType === 'OK') {
            query = { IdProdServOK: { $exists: true } };  // Only return items with 'OK' key
        } else if (keyType === 'BK') {
            query = { IdProdServBK: { $exists: true } };  // Only return items with 'BK' key
        }
        
        // Fetch the list of products or services based on the query
        prodServList = await ProdServ.find(query);
        
        // If no items are found, throw a 404 error
        if (!prodServList || prodServList.length === 0) {
            throw boom.notFound('No products or services found');
        }

        return prodServList;
    } catch (error) {
        throw boom.internal(error);
    }


};


export const getAlmacenes = async (keyType) => {
  let prodServList;
  
  try {
      // Validate keyType and construct the query dynamically

          query = { IdNegocioOK: { $exists: true } };  // Only return items with 'OK' key
      
      // Fetch the list of products or services based on the query
      prodServList = await ProdServ.find(query.negocios);
      
      // If no items are found, throw a 404 error
      if (!prodServList || prodServList.length === 0) {
          throw boom.notFound('No products or services found');
      }

      return prodServList;
  } catch (error) {
      throw boom.internal(error);
  }


};

export const postProdServItem = async (paProdServItem) => {
  try {
  const newProdServItem = new ProdServ(paProdServItem);
  return await newProdServItem.save();
  } catch (error) {
  throw error;
  }
};

export const putProdServItem = async (id, paProdServItem) => {
  try {
  return await ProdServ.findOneAndUpdate({ IdProdServOK: id }, paProdServItem, {
  new: true,
  });
  } catch (error) {
  throw boom.badImplementation(error);
  }
};

export const deleteProdServItem = async (id) => {
  try {
    return await ProdServ.findOneAndDelete({ IdProdServOK: Number(id)});
  } catch (error) {
  throw error;
  }
  };