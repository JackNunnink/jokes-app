import React from 'react';
import { 
    Button,
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
        <p>{jokeObj.setup}</p>
    )
}

export default FavoritesContainersComponent;