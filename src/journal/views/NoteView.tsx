import { SaveOutlined } from '@mui/icons-material'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
	return (
		<Box>

			{/* Header */}
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				marginBottom={ 2 }
			>
				<Typography
					fontSize={ 39 }
					fontWeight="light"
				>11 de Marzo, 2023</Typography>
				<Button color="primary" sx={{ p: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
					Guardar
				</Button>
			</Box>

			{/* Form */} 
			<Box
				sx={{ width: '100%' }}
				display="flex"
				flexDirection="column"
				gap={ 1 }
				mb={ 2 }
			>
				<TextField 
					type="text"
					variant="filled"
					placeholder="Ingrese un título"
					label="Título"
					sx={{ border: 'none' }}
					fullWidth 
				/>
				<TextField 
					type="text"
					variant="filled"
					placeholder="¿Que sucedió hoy?"
					multiline
					minRows={ 5 }
					sx={{ border: 'none' }}
					fullWidth 
				/>
			</Box>

			<ImageGallery />
		</Box>
	)
}
