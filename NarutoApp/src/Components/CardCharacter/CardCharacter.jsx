import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import noImage from '../../Assets/No_Image_Available.jpg'
import Chip from '@mui/material/Chip';


const CardCharacter = ({ character }) => {

    const [contImages, setContImages] = useState(0);

    const handleClick = () => {
        if (contImages < character.images.length-1) {
            setContImages(contImages + 1);
        }
    }

    const handleClickBack = () => {
        if (contImages > 0 ) {
            setContImages(contImages - 1);
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    //   height="140"
                    image={character.images ? character.images[contImages] : noImage}
                    alt={character.name ? `imagen del personaje ${character.name}` : "Imagen no disponible"}
                />
                <CardContent>
                    <Chip label="Siguiente" variant="outlined" onClick={handleClick} />
                    <Chip label="Anterior" variant="outlined" onClick={handleClickBack} />
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name ? character.name : "Nombre no disponible"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardCharacter;