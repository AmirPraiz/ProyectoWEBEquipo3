import { MaterialReactTable } from 'material-react-table';
import { Box, Stack, Tooltip, Button, IconButton, Dialog } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import AddInventoriesNegocio from '../modals/AddInventoriesNegocio';

import { getAllNegocio } from '../../../remote/get/GetAllNegocio';
const InventoriesColumns = [
    {
      accessorKey: "IdNegocioOK",
      header: "ID OK",
      size: 30, //small column
    },
    {
      accessorKey: "ControlaSerie",
      header: "ControlaSerie",
      size: 30, //small column
    },
  ];
 
 //FIC: Table - FrontEnd.
  const NegocioTable = () => {
    const [loadingTable, setLoadingTable] = useState(true);
    const [InventoriesData, setInventoriesData] = useState([]);
    const [AddInventoryShowModal, setAddInventoryShowModal] = useState(false);
    async function fetchData() {
      try {
        const AllInventoriesData = await getAllNegocio();
        //const productos = await getProducts();
        setInventoriesData(AllInventoriesData);   
        setLoadingTable(false);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }
    useEffect(() => {
      fetchData();
    }, []);
    return (
        <Box>
          <Box>
            <MaterialReactTable
             columns={InventoriesColumns}
             data={InventoriesData}
              state={{isLoading: loadingTable}}
             initialState={{ density: "compact", showGlobalFilter: true }}
             renderTopToolbarCustomActions={({ table }) => (
              <>
                {/* ------- BARRA DE ACCIONES ------ */}
                <Stack direction="row" sx={{ m: 1 }}>
                  <Box>
                    <Tooltip title="Agregar">
                        <IconButton 
                            onClick={() => setAddInventoryShowModal(true)}>
                            <AddCircleIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar">
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Detalles ">
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Stack>
                {/* ------- BARRA DE ACCIONES FIN ------ */}
              </>
            )}
            />
          </Box>
          <Dialog open={AddInventoryShowModal}>
            <AddInventoriesNegocio
              AddInventoryShowModal={AddInventoryShowModal}
              setAddInventoryShowModal={setAddInventoryShowModal}
              onClose={() => setAddInventoryShowModal(false)}
              fetchData={fetchData}
            />
          </Dialog>
        </Box>
      );
  };

  export default NegocioTable;