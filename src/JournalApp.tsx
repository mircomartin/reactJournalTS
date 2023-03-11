import { FC } from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const JournalApp:FC = () => {
	return (
		<AppTheme>
			<AppRouter />
		</AppTheme>
	)
}
