import React, { useState } from 'react';
import { 
    Box, 
    Button,
    Text
} from 'grommet';

import { Refresh } from 'grommet-icons';

import getRandom from 'jokesmodule'

import FavoriteButtonComponent from './FavoritesButton';



const GetJokesComponent = () => {
    const [jokesState, setJokesState] = useState()
    const onClick = async () => {
        const joke = await getRandom();
        setJokesState(joke);
        console.log('jokes', joke)
    }
    if(jokesState !== undefined) {
        return (
            <Box 
                flex 
                align='center' 
                justify='center'
                style={{
                    'backgroundColor': '#f1faee',
                    'border-radius': '10px',
                    'margin': '20%',
                    'paddingTop': '10%',
                    'paddingBottom': '10%'
                }}
            >
                <FavoriteButtonComponent jokesState={jokesState} />
                {jokesState.setup ? (
                    <div>
                        <Text 
                            style={{
                                'padding': '10px'
                            }}
                        >
                            {jokesState.setup}
                        </Text>
                        <Text 
                            style={{
                                'paddingBottom': '50px'
                            }}
                        >
                            {jokesState.punchline}
                        </Text>
                    </div>
                ) : (
                    <Text
                    style={{
                        'padding': '10px'
                    }}
                    >
                        {jokesState.value}
                    </Text>
                )}
                <Button 
                    icon={<Refresh />}
                    onClick={onClick}
                />
            </Box>
        )
    } else {
        return (
            <Box flex align='center' justify='center'>
                <Button 
                    onClick={onClick}
                    style={{
                        'background-color': '#f49d37',
                        'border': 'solid #f49d37',
                        'border-radius': '10px',
                        'padding': '10px'
                    }}
                >
                    Get a random joke
                </Button>
            </Box>
        )
    }

}

export default GetJokesComponent;