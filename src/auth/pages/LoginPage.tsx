import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import axios from 'axios';

interface LoginProps {
	email: string,
	password: string
}

export const LoginPage: FC = () => {

	const [ values, setValues ] = useState<LoginProps>({
		email: 'admin@admin',
		password: 'admin1234'
	})
	const { email, password } = values;

	const handleInputChange = ( e :React.ChangeEvent<HTMLInputElement> ) => {
		const { name, value } = e.target;

		setValues({
				...values,
				[ name ]: value
		});

	}

	const handleLogin = async ( e:React.FormEvent<HTMLFormElement> ) => {
		e.preventDefault();
		
	}

	return (
		<AuthLayout title="Iniciar Sesión">
			<form className="form-auth" onSubmit={ handleLogin }>
				<Grid container direction="column" gap={ 2 } sx={{ width:'100%' }}>

					<Grid item>
						<TextField 
						onChange={ handleInputChange }
						value={ email }
						name="email" 
						label="Correo" 
						type="email" 
						placeholder="correo@correo.com" 
						fullWidth />
					</Grid>
					<Grid item>
						<TextField 
						onChange={ handleInputChange }
						value={ password }
						name="password" label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
					</Grid>

					<Grid container gap={ 2 } direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<Button type="submit" variant="contained" sx={{ minWidth:200 }}>
								Login
							</Button>
						</Grid>
						<Grid item>
							<Button variant="contained" sx={{ minWidth:200 }}>
								<Google />
								<Typography ml={ 1 }>
									Google
								</Typography>
							</Button>
						</Grid>
					</Grid>

				</Grid>
			</form>

			<Box sx={{ marginY: 2, borderTop: '1px solid #cecece', width:'100%', paddingTop: 2 }}>
				<Link component={ RouterLink } color="inherit" to="/auth/register" sx={{ width: '100%', display: 'block', textAlign: 'center' }}>
					Crear Cuenta
				</Link>
			</Box>
		</AuthLayout>
						
	)
}
