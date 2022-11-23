import React, {useState} from 'react';
import { 
    Box, 
    Button,
    Text
} from 'grommet';
import { Favorite } from 'grommet-icons';



const FavoriteButtonComponent = ({ jokeState }) => {
    const [favoriteState, setFavoriteState] = useState()
    const saveFavorite = () => {
        setFavoriteState(jokeState)
    }

    return (
        <Button 
            icon={<Favorite/>}
            onClick={saveFavorite}
        />
    )
}

export default FavoriteButtonComponent;