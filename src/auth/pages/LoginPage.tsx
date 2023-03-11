import { FC, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { AuthContext } from '../../context';

export const LoginPage: FC = () => {

	const { checkingAuth, startGoogleSignIn } = useContext(AuthContext)

	const { email, password, onInputChange } = useForm({
		email: 'mirco@mirco.com',
		password: '123456'
	})

	const handleSubmit = ( e:React.FormEvent<HTMLFormElement> ) => {
		e.preventDefault();
		checkingAuth( email!, password! )
		console.log('click')
	}

	const onGoogleSignIn = () => {
		console.log('Google SignIn')
		startGoogleSignIn();
	}

	return (
		<AuthLayout title="Iniciar Sesión">
			<form className="form-auth" onSubmit={ handleSubmit }>
				<Grid container direction="column" gap={ 2 } sx={{ width:'100%' }}>

					<Grid item>
						<TextField 
							onChange={ onInputChange }
							value={ email }
							name="email" 
							label="Correo" 
							type="email" 
							placeholder="correo@correo.com" 
							fullWidth />
					</Grid>
					<Grid item>
						<TextField 
							onChange={ onInputChange }
							value={ password }
							name="password" 
							label="Contraseña" 
							type="password" 
							placeholder="Contraseña" 
							fullWidth />
					</Grid>

					<Grid container gap={ 2 } direction="column" justifyContent="center" alignItems="center">
						<Grid item>
							<Button type="submit" variant="contained" sx={{ minWidth:200 }}>
								Login
							</Button>
						</Grid>
						<Grid item>
							<Button variant="contained" sx={{ minWidth:200 }} onClick={ onGoogleSignIn }>
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
