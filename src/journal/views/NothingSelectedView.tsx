import { StarOutlined } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'

export const NothingSelectedView: FC = () => {
	return (
		<Box
			sx={{ backgroundColor: 'primary.main', borderRadius: 3 }}
		>
			<Container
				sx={{ width: { sm: 500 }}}
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ height: 'calc(100vh - 128px)' }}
				>
					<Box
						display="flex"
						justifyContent="center"
						flexDirection="column"
						alignItems="center"
					>
						<StarOutlined sx={{ fontSize: '100px', color: 'white' }}/>
						<Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
