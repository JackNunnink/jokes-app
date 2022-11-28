import React from 'react';
import { 
    Button,
} from 'grommet';
import { Favorite } from 'grommet-icons';



const FavoriteButtonComponent = ({ jokesState }) => {
    const saveFavorite = () => {
        localStorage.setItem("jokesState", JSON.stringify(jokesState))
        console.log(jokesState)
    }

    return (
        <Button 
            icon={<Favorite/>}
            onClick={saveFavorite}
        />
    )
}

export default FavoriteButtonComponent;