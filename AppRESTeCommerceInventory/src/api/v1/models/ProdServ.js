import * as mongoose from 'mongoose';

//Commerce
const prodservSchema = new mongoose.Schema({
    IdInstitutoOK: { type : String },
    IdProdServOK: { type : String },
    IdPresentaOK: { type : String },

    negocios: [
      {
        IdNegocioOK: { type : String },
        ControlaSerie: { type : String },
        almacenes: [
            {
                IdAlmacenOK: { type: String },
                Principal: { type: String },
                CantidadActual: { type: Number },
                CantidadDisponible: { type: Number },
                CantidadApartada: { type: Number },
                CantidadTransito: { type: Number },
                CantidadMerma: { type: Number },
                StockMaximo: { type: Number },
                StockMinimo: { type: Number },
                info_ad: [{
                    IdEtiquetaOK: { type: String },
                    IdEtiqueta: { type: String },
                    Etiqueta: { type: String },
                    Valor: { type: String },
                    IdTipoSeccionOK: { type: String },
                    Secuencia: { type: Number },
                    detail_row: {
                        Activo: { type: String },
                        Borrado: { type: String },
                        detail_row_reg: {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String }
                        },
                    },
                },
            ],
            mvtos: [{
                CantidadMovto: { type: Number },
                CantidadAnt: { type: Number },
                CantidadAct: { type: Number },
                IdTipoMovtoOK: { type: String },
                IdClaseMovtoOK: { type: String },
                Referencia: { type: String },
                detail_row: {
                    Activo: { type: String },
                    Borrado: { type: String },
                    detail_row_reg: {
                        FechaReg: { type: Date, default: Date.now },
                        UsuarioReg: { type: String }
                    },
                },
            },
            ],
            series: [{
                Serie: { type: String },
                Placa: { type: String },
                Observacion: { type: String },
                estatus_fisico: [{
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String },
                        Borrado: { type: String },
                        detail_row_reg: {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String }
                        },
                    },
                },
                ],
                estatus_venta: [{
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String },
                        Borrado: { type: String },
                        detail_row_reg: {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String }
                        },
                    },
                },
                ],
                ubicaciones: [{
                    IdAlmacenOK: { type: String },
                    Ubicacion: { type: String },
                    Actual: { type: String },
                    detail_row: {
                        Activo: { type: String },
                        Borrado: { type: String },
                        detail_row_reg: {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String }
                        },
                    },
                },
                ],
                detail_row: {
                    Activo: { type: String },
                    Borrado: { type: String },
                    detail_row_reg: {
                        FechaReg: { type: Date, default: Date.now },
                        UsuarioReg: { type: String }
                    },
                },
            },
            ],
            },
        ],
        detail_row: {
            Activo: { type: String },
            Borrado: { type: String },
            detail_row_reg: {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String }
            },
        },
    },
    ],
    detail_row: {
        Activo: { type: String },
        Borrado: { type: String },
        detail_row_reg: {
            FechaReg: { type: Date, default: Date.now },
            UsuarioReg: { type: String }
        },
    },
});

//Exportar modelo
export default mongoose.model(
    'cat_prod_serv',
    prodservSchema,
    'cat_prod_serv'
  );