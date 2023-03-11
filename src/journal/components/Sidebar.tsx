import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
	drawerWidth: number;
}

export const Sidebar: FC<Props> = ({ drawerWidth = 240 }) => {
	return (
		<Box
			component="nav"
			sx={{
				 width: { sm: drawerWidth }, 
				 flexShrink: { sm: 0 } 
			}}
		>
			<Drawer
				variant="permanent"
				open
				sx={{ 
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
				 }}
			>
				<Box>
					<Typography variant="h6" noWrap component="h6" textAlign="center" paddingY={ 2 }>
						Mirco Martin
					</Typography>
				</Box>
				<Divider />
				<List>
					{
						['Enero', 'Febrero', 'Marzo', 'Abril'].map( (text) => (
							<ListItem key={ text } disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot />
									</ListItemIcon>
									<Box
										display="flex"
										flexDirection="column"
									>
										<ListItemText primary={ text }/>
										<ListItemText secondary="Hola como andas?" />
									</Box>
								</ListItemButton>
							</ListItem>
						))
					}
				</List>
			</Drawer>
		</Box>
	)
}
