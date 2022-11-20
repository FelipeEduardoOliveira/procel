import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export default function BasicCard({data}) {
  return (
    <Grid item xs={4} key={data.cod_licenciamento}>

    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          {data.nome_sistema}
        </Typography>
        <br/>
        <Typography variant="overline">
         {data.apelido}
        </Typography>
       
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data.validade}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Selecioanr</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}