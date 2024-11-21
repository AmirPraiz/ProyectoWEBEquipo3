import { Box, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
const InventoriesTabs = ["ALMACENES", "NEGOCIOS"];
const InventoriesNavTab = ({CurrentRowInInventoriesTab, setCurrentNameTabInPrincipalTab}) => {
const [currenTabIndex, setCurrentTabIndex] = useState(0); 
const handleChange = (e) => {
    console.log("entro al handleChange", e.target.innerText.toUpperCase());
    setCurrentNameTabInPrincipalTab(e.target.innerText.toUpperCase());

    switch (e.target.innerText.toUpperCase()) {
        case "ALMACENES":
            setCurrentTabIndex(0);
            break;
        case "NEGOCIOS":
            setCurrentTabIndex(1);
            break;
    }
};
return (
        <Box sx={{ border: (theme) => `2px solid ${theme.palette.divider}`, mx: 1, padding: 0.5 }}>
            <Tabs
                value={currenTabIndex}
                variant={"fullWidth"}
                onChange={handleChange}
                aria-label="icon tabs example"
                textColor="primary"
            >
                {InventoriesTabs.map((tab) => {
                    return <Tab key={tab} label={tab} disabled ={CurrentRowInInventoriesTab === null}/>;
                })}
            </Tabs>
        </Box>
    );
}
export default InventoriesNavTab;