import React from 'react';
import { 
    Box, 
    Button, 
    Heading, 
} from 'grommet';

import { FormView, FormViewHide } from 'grommet-icons';

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left:'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
);


const AppBarComponent = ({ setShowSidebar, showSidebar }) => {
    return (
        <AppBar 
            style={{
                'background-color': '#140f2d'
            }}
        >
            <Heading level='3' margin='none'>Jokes App</Heading>
            <Button 
                icon={showSidebar === false ? <FormViewHide /> : <FormView />} 
                onClick={() => setShowSidebar(!showSidebar)}
            />
        </AppBar>
    )
};

export default AppBarComponent;