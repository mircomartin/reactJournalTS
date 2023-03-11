import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage: FC = () => {
	return (
		<AuthLayout title="Crear Cuenta">
			<form className="form-auth">
				<Grid container direction="column" gap={ 2 } sx={{ width:'100%' }}>
					<Grid item>
						<TextField label="Nombre" type="text" placeholder="Nombre" fullWidth />
					</Grid>
					<Grid item>
						<TextField label="Apellido" type="text" placeholder="Apellido" fullWidth />
					</Grid>
					<Grid item>
						<TextField label="Correo" type="email" placeholder="correo@gmail.com" fullWidth />
					</Grid>
					<Grid item>
						<TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
					</Grid>
					<Grid item>
						<TextField label="Confirmar Contraseña" type="password" placeholder="Contraseña" fullWidth />
					</Grid>

					<Grid container gap={ 2 } justifyContent="center" alignItems="center">
						<Grid item>
							<Button variant="contained" sx={{ minWidth:200 }}>
								Crear Cuenta
							</Button>
						</Grid>
					</Grid>

				</Grid>
			</form>

			<Box sx={{ marginY: 2, borderTop: '1px solid #cecece', width:'100%', paddingTop: 2 }}>
				<Typography>
					Ya tenés cuenta?
					<Link component={ RouterLink } color="inherit" to="/auth/login" ml={ 1 }>
						Iniciar Sesión
					</Link>
					</Typography>
			</Box>
		</AuthLayout>
	)
}
