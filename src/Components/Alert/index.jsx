import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({modalAlert}) {


  
  // variantes: error - warning - info - success
  return (
    <Stack sx={{ width: '100%' }} spacing={2} position='absolute'>

{modalAlert?.alertType&&(
    <Alert variant="standard" severity={modalAlert?.alertType}>
    {modalAlert?.message}
  </Alert>
 )} 

    </Stack>
  );
}