import { Box, Container, Grid, Typography } from '@mui/material';
import { FC } from 'react';

interface AuthProps {
	title: string;
	children: React.ReactNode;
}

export const AuthLayout: FC<AuthProps> = ({ children, title = '', }) => {
	return (
		<Box
			sx={{ backgroundColor: 'primary.main' }}
		>
			<Container
				sx={{ width: { sm: 500 }}}
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ height: '100vh' }}
				>
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
						className="box-shadow"
						sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
					>
						<Typography 
							variant="h5" 
							sx={{ mb: 3 }}>
								{ title }
						</Typography>
						
						{/* Children */}
						{ children }
						
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}
