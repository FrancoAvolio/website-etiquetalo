import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export const AlertMessage = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>¡Éxito!</AlertTitle>
        Su correo electrónico ha sido enviado con — <strong>correctamente!</strong>
      </Alert>
    </Stack>
  );
}
