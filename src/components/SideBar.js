import React from "react";
import { 
    Box, 
    Button,
    Collapsible, 
    Layer
} from 'grommet';
import { FormClose } from 'grommet-icons';

import FavoritesContainersComponent from "./FavoritesContainers";

const SideBarComponent = ({ setShowSidebar, showSidebar, size }) => {
    if(!showSidebar || size !== 'small') {
        return (
            <Collapsible direction='horizontal' open={showSidebar}>
                <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                >
                    <FavoritesContainersComponent />
                </Box>
            </Collapsible>
        )
    }

    return (
        <Layer>
            <Box
                background='light-2'
                tag='header'
                justify='end'
                align='center'
                direction='row'
            >
            <Button 
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
            />
            </Box>
            <Box
                fill
                background='light-2'
                align='center'
                justify='center'
            >
                <FavoritesContainersComponent />
            </Box>
        </Layer>
    )
    
}

export default SideBarComponent;
