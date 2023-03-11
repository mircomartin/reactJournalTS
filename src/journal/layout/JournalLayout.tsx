import { Box, Toolbar } from '@mui/material'
import { FC } from 'react'
import { Navbar, Sidebar } from '../components';

interface JournalProps {
	children: React.ReactNode;
}

const drawerWidth: number = 240;

export const JournalLayout: FC<JournalProps> = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>

			<Navbar drawerWidth={ drawerWidth } />

			<Sidebar drawerWidth={ drawerWidth } />

			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3, paddingTop: '104px' }}
			>
				
				{ children }
				
			</Box>
		</Box>
	)
}
