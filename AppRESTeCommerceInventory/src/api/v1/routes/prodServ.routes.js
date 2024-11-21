import * as prodServController from '../controllers/prodserv.controller.js';

//Commerce
import { Router } from 'express';
//import * as prodServController from '../controllers/prodserv.controller';
const router = Router();

//router.get('/list', ProdServController.getProdServList);
router.get('/', prodServController.getProdServList);

//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', prodServController.getProdServItem);

router.post('/', prodServController.postProdServItem);

router.put('/:id', prodServController.putProdServItem);

router.delete('/:id', prodServController.deleteProdServItem);



router.get('/negocio/:negocio', prodServController.getNegocio);
router.get('/almacen/:almacen', prodServController.getAlmacen);
router.post('/negocio/:negocio/almacen', prodServController.postAlmacen);


router.post('/:id/negocio',prodServController.postNegocio);

router.put('/almacen/CantidadActual/:almacen', prodServController.putCantidadActual);
router.put('/almacen/CantidadDisponible/:almacen', prodServController.putCantidadDisponible);
router.put('/almacen/CantidadApartada/:almacen', prodServController.putCantidadApartada);

router.get('/serie/:serie', prodServController.getSerie);
router.get('/serie/:serie/placa', prodServController.getPlaca);
router.post('/almacen/:almacen/serie', prodServController.postSerie);

export default router;