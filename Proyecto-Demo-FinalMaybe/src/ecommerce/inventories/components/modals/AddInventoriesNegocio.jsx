import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Typography, TextField, DialogActions, Box, Alert, FormControlLabel, Checkbox } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InventoryValuesNegocio } from "../../helpers/InventoryValuesNegocio"; 
import { AddOneNegocio } from "../../../remote/post/AddOneNegocio"; //nuevo

const AddInventoriesNegocio = ({AddInventoryShowModal, setAddInventoryShowModal, fetchData}) => {
    const [mensajeErrorAlert, setMensajeErrorAlert] = useState("");
    const [mensajeExitoAlert, setMensajeExitoAlert] = useState("");    
    const [Loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            IdNegocioOK: "",
            //ControlaSerie: "",
            ControlaSerie: false,
        },
        validationSchema: Yup.object({
            IdNegocioOK: Yup.string().required("Campo requerido"),
            /*ControlaSerie: Yup.string().required("Campo requerido").max(1, 'Solo se permite una letra')
            .matches(/^[NS]+$/, 'Solo se permite S o N'),*/
            ControlaSerie: Yup.boolean().required("Campo requerido")
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setMensajeErrorAlert(null);
            setMensajeExitoAlert(null);
            try {
                values.ControlaSerie = values.ControlaSerie ? "S" : "N";
                const Inventory = InventoryValuesNegocio(values);
                console.log("<<Inventory>>", Inventory);
                await AddOneNegocio(Inventory);
                setMensajeExitoAlert("Inventario creado y guardado Correctamente");
                fetchData(); // Cierra el modal después de un corto retraso para mostrar el mensaje de éxito 
            } catch (e) {
                setMensajeExitoAlert(null);
                setMensajeErrorAlert("No se pudo crear el Inventario");
            }
            setLoading(false);
        },
    });
    const commonTextFieldProps = {
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        fullWidth: true,
        margin: "dense",
        disabled: !!mensajeExitoAlert,
    };
    return(
        <Dialog 
            open={AddInventoryShowModal}
            onClose={() => setAddInventoryShowModal(false)}
            fullWidth
        >
            <form onSubmit={formik.handleSubmit}>
                {/* FIC: Aqui va el Titulo de la Modal */}
                <DialogTitle>
                    <Typography>
                        <strong>Agregar Nuevo Negocio</strong>
                    </Typography>
                </DialogTitle>
                {/* FIC: Aqui va un tipo de control por cada Propiedad de Institutos */}
                <DialogContent 
                    sx={{ display: 'flex', flexDirection: 'column' }}
                    dividers
                >
                    {/* FIC: Campos de captura o selección */}
                    <TextField
                        id="IdNegocioOK"
                        label="IdNegocioOK*"
                        value={formik.values.IdNegocioOK}
                        {...commonTextFieldProps}
                        error={ formik.touched.IdNegocioOK && Boolean(formik.errors.IdNegocioOK) }
                        helperText={ formik.touched.IdNegocioOK && formik.errors.IdNegocioOK }
                    />
                    {/*<TextField
                        id="ControlaSerie"
                        label="ControlaSerie*"
                        value={formik.values.ControlaSerie}
                        {...commonTextFieldProps}
                        error={ formik.touched.ControlaSerie && Boolean(formik.errors.ControlaSerie) }
                        helperText={ formik.touched.ControlaSerie && formik.errors.ControlaSerie }
                    />*/}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formik.values.ControlaSerie}
                                onChange={formik.handleChange}
                                name="ControlaSerie"
                                color="primary"
                                disabled={!!mensajeExitoAlert}
                            />
                        }
                        label="ControlaSerie"
                    />  
                </DialogContent>
                <DialogActions
                    sx={{ display: 'flex', flexDirection: 'row' }}
                >
                    <Box m="auto">
                        {console.log("mensajeExitoAlert", mensajeExitoAlert)}
                        {console.log("mensajeErrorAlert", mensajeErrorAlert)}
                        {mensajeErrorAlert && (
                        <Alert severity="error">
                            <b>¡ERROR!</b> ─ {mensajeErrorAlert}
                        </Alert>
                        )}
                        {mensajeExitoAlert && (
                        <Alert severity="success">
                            <b>¡ÉXITO!</b> ─ {mensajeExitoAlert}
                        </Alert>
                        )}
                    </Box>
                    {/* FIC: Boton de Cerrar. */}
                    <LoadingButton
                        color="secondary"
                        loadingPosition="start"
                        startIcon={<CloseIcon />}
                        variant="outlined"
                        onClick={() => setAddInventoryShowModal(false)}
                    >
                        <span>CERRAR</span>
                    </LoadingButton>
                     {/* FIC: Boton de Guardar. */}
                    <LoadingButton
                        color="primary"
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        type="submit"
                        disabled={!!mensajeExitoAlert}
                        loading={Loading} 
                    >
                        <span>GUARDAR</span>
                    </LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    );
};
export default AddInventoriesNegocio;