import { FC, useReducer } from 'react';
import { AuthContext, authReducer } from './';

export interface AuthState {
	status: string;
	uid: string | number | null;
	email: string | null,
	displayName:  string | null,
	photoURL:  string | null,
	errorMessage:  string | null,
}

const Auth_INITIAL_STATE: AuthState = {
	status: 'checking', //not-authenticated,authenticated
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
}

export const AuthProvider:FC<AuthState> = ({ children }) => {

const [state, dispatch] = useReducer(authReducer , Auth_INITIAL_STATE)

	return (
		<AuthContext.Provider value={{
			...state
		}}>
			{ children }
		</AuthContext.Provider>
	)
}