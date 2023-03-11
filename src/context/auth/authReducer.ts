import { AuthState } from './';

type AuthActionType =
| { type: 'Auth - Login' }
| { type: 'Auth - Logout' }
| { type: 'Auth - Checking' }

export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {

		switch (action.type) {
				case 'Auth - Login':
					return {
							...state,
					}
				case 'Auth - Logout':
					return {
							...state,
					}
				case 'Auth - Checking':
					return {
							...state,
					}
				default:
						return state;
		}

}