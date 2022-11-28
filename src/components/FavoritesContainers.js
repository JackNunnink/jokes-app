import React from 'react';
import { 
    Button,
} from 'grommet';
import { Favorite } from 'grommet-icons';

const FavoritesContainersComponent = () => {
    const joke = localStorage.getItem('id')
    console.log(joke)

    if(joke === null) {
        return(
            <h1>Nothing here</h1>
        )
    }

    return (
        <h1>{joke}</h1>
    )
}

export default FavoritesContainersComponent;