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
                    style={{
                        'backgroundColor': '#457b9d',
                        'overflow':'auto'
                    }}
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
                style={{
                    'backgroundColor': '#d72638',
                    'overflow': 'auto'
                }}
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
                style={{
                    'backgroundColor': '#d72638'
                }}
            >
                <FavoritesContainersComponent />
            </Box>
        </Layer>
    )
    
}

export default SideBarComponent;
