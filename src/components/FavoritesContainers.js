import React from 'react';
import {
    Box,
    Button,
    Text
} from 'grommet';
import { Favorite } from 'grommet-icons';

const FavoritesContainersComponent = () => {
    const jokeString = localStorage.getItem('jokesState')
    const jokeObj = JSON.parse(jokeString)
    console.log(jokeObj)

    // const joke = jokeObj.map(x => x * 2)

    if(jokeObj === null) {
        return(
            <h1>Nothing here</h1>
        )
    }

    return (
        <div>
            {Object.keys(jokeObj).map(index => {
                return (
                    <div key={index}>
                        <Box
                            align='center' 
                            justify='center'
                            style={{
                                'backgroundColor': '#f1faee',
                                'border-radius': '10px',
                                'margin': '20%',
                                'padding': '10%'
                            }}
                        >
                            <Button 
                                icon={<Favorite />}
                            />
                            {jokeObj.setup ? (
                                <div>
                                    <Text>{jokeObj.setup}</Text>
                                    <Text>{jokeObj.punchline}</Text>
                                </div>
                            ) : (
                                <Text>{jokeObj.value}</Text>
                            )}
                        </Box>
                    </div>
                )
            })}
        </div>
    )
}

export default FavoritesContainersComponent;