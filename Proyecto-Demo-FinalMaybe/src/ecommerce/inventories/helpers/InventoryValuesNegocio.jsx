import {  InventoryNegocio } from "../models/InventoryNegocio";

export const InventoryValuesNegocio = (values)=>{
   let InventoryN =  InventoryNegocio()
   InventoryN.IdNegocioOK=values.IdNegocioOK,
   InventoryN.ControlaSerie=values.ControlaSerie
   return InventoryN
}