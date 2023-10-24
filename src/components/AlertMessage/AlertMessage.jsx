import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export const AlertMessage = () => {
  return (
    <Stack className='sm:-my-10 -my-12' sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>¡Éxito!</AlertTitle>
        Su correo electrónico ha sido enviado — <strong>correctamente!</strong>
      </Alert>
    </Stack>
  );
}
