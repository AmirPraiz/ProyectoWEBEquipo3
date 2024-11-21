import { Box } from "@mui/material";
import InventoriesNavTab from "../components/tabs/InventoriesNavTab";
import { useState } from "react";
import InventoriesTab from "../components/tabs/InventoriesTab";
import AlmacenesTab from "../components/tabs/AlmacenesTab";

const Inventories = () => {
    const [CurrentRowInInventoriesTab, setCurrentRowInInventoriesTab] = useState(0);    
    const [currentNameTabInPrincipalTab, setCurrentNameTabInPrincipalTab] = useState("ALMACENES");  

    return (
        <Box>
            <InventoriesNavTab
                setCurrentRowInInventoriesTab={setCurrentRowInInventoriesTab} 
                setCurrentNameTabInPrincipalTab={setCurrentNameTabInPrincipalTab} 
            />
            {currentNameTabInPrincipalTab === "NEGOCIOS" && <InventoriesTab />}
            {currentNameTabInPrincipalTab === "ALMACENES" && <AlmacenesTab />}
        </Box>
    );
};

export default Inventories;
