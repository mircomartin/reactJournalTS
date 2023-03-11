import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
	drawerWidth: number;
}

export const Navbar: FC<Props> = ({ drawerWidth }) => {
	return (
		<AppBar
			position="fixed"
			sx={{ 
				padding: '20px', 
				width: { sm: `calc(100% - ${drawerWidth}px)` } 
			}}
		>
			<Box
				sx={{ display: 'flex' }}
			>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuOutlined />
				</IconButton>

				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					<Typography component="h1" textTransform="uppercase" fontWeight={ 700 } ml={ 1 }>Journal App</Typography>
					<IconButton
						color="error"
					>
						<LogoutOutlined />
					</IconButton>
				</Box>
			</Box>
		</AppBar>

	)
}
