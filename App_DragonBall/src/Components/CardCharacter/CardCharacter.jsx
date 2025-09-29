import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardCharacter = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={character.image}          
          alt={"Imagen del personaje "+character.name}
          sx={{ objectFit: 'contain', bgcolor: '#f0f0f0' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" sx={{ height: '200px', overflowY: 'auto', color: 'text.secondary' }}>
            {character.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCharacter;