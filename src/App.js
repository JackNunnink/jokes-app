import React, { useState } from 'react';
import { 
  Box, 
  Grommet,
  ResponsiveContext
} from 'grommet';

import AppBarComponent from './components/AppBar';
import SideBarComponent from './components/SideBar';
import GetJokesComponent from './components/GetJokeButton';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box 
            fill 
            style={{
              'backgroundColor': '#e63946'
            }}
          >
            <AppBarComponent 
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar} 
            />
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <GetJokesComponent />
              <SideBarComponent 
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                size={size}
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
