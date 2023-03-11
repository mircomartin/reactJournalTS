import { FC, useReducer } from 'react';
import { AuthContext, authReducer } from './';

export interface AuthState {
	children?: React.ReactNode;
	status: string;
	uid: string | number | null;
	email: string | null,
	displayName:  string | null,
	photoURL:  string | null,
	errorMessage:  string | null,
}

const Auth_INITIAL_STATE: AuthState = {
	status: 'not-authenticated', //not-authenticated,authenticated
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
}

export const AuthProvider:FC<AuthState> = ({ children }) => {

const [state, dispatch] = useReducer(authReducer , Auth_INITIAL_STATE)

	const checkingAuth = async ( email: string, password: string ) => {
		console.log(email, password)
		dispatch({
			type: 'Auth - Checking',
			payload: 'checking',
		})

	}

	const startGoogleSignIn = async () => {

		dispatch({
			type: 'Auth - Checking',
			payload: 'checking',
		})

	}
	
	return (
		<AuthContext.Provider value={{
			...state,
			checkingAuth,
			startGoogleSignIn,
		}}>
			{ children }
		</AuthContext.Provider>
	)
}